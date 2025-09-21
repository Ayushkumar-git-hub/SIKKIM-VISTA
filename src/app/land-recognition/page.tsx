"use client";

import React, { useState, useRef, useEffect } from 'react';
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Camera, File, Loader2, Upload } from "lucide-react";
import { recognizeLand } from '@/ai/flows/recognize-land-flow';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LandRecognitionPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [recognitionResult, setRecognitionResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (typeof navigator.mediaDevices?.getUserMedia !== 'function') {
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        setHasCameraPermission(false);
      }
    };
    getCameraPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setRecognitionResult(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptureFromCamera = () => {
    if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        if (context) {
            context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
            const dataUri = canvas.toDataURL('image/jpeg');
            setPreviewUrl(dataUri);
            setSelectedFile(null); // Clear file selection
            setRecognitionResult(null);
        }
    }
  };
  
  const handleRecognize = async () => {
    let dataUri: string | null = previewUrl;

    if (!dataUri) {
      toast({
        variant: "destructive",
        title: "No Image",
        description: "Please upload or capture an image first.",
      });
      return;
    }

    setIsLoading(true);
    setRecognitionResult(null);

    try {
      const result = await recognizeLand({ photoDataUri: dataUri });
      setRecognitionResult(result.recognition);
    } catch (error) {
      console.error("Land Recognition Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to recognize the land in the image.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Land Recognition"
          description="Upload a photo of a Sikkimese landscape, and our AI will tell you about it."
        />
        <div className="grid gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Capture or Upload an Image</CardTitle>
                    <CardDescription>Use your camera to take a photo or upload an image file from your device.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                        <video ref={videoRef} className="w-full aspect-video rounded-md bg-muted" autoPlay muted playsInline />
                        {hasCameraPermission === false && (
                            <Alert variant="destructive">
                                <Camera className="h-4 w-4" />
                                <AlertTitle>Camera Access Denied</AlertTitle>
                                <AlertDescription>
                                    Please enable camera permissions in your browser to use this feature.
                                </AlertDescription>
                            </Alert>
                        )}
                        <canvas ref={canvasRef} className="hidden" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button onClick={handleCaptureFromCamera} disabled={!hasCameraPermission} className="flex-1">
                            <Camera className="mr-2 h-4 w-4" /> Capture Photo
                        </Button>
                        <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="flex-1">
                            <File className="mr-2 h-4 w-4" /> Upload from File
                        </Button>
                        <Input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-stretch gap-4">
                    {previewUrl && (
                        <div className="relative w-full aspect-video rounded-md overflow-hidden border">
                            <Image src={previewUrl} alt="Selected preview" layout="fill" objectFit="cover" />
                        </div>
                    )}
                    <Button onClick={handleRecognize} disabled={!previewUrl || isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Recognizing...
                            </>
                        ) : (
                            <>
                                <Upload className="mr-2 h-4 w-4" /> Recognize Land
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recognition Result</CardTitle>
                    <CardDescription>This is what our AI found in your image.</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-card-foreground">
                    {isLoading && (
                        <div className="flex items-center space-x-2">
                            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                            <p className="text-muted-foreground">Analyzing image...</p>
                        </div>
                    )}
                    {recognitionResult ? (
                        <p>{recognitionResult}</p>
                    ) : (
                        !isLoading && <p className="text-muted-foreground">The analysis of your image will appear here.</p>
                    )}
                </CardContent>
            </Card>
        </div>
      </main>
    </AppLayout>
  );
}
