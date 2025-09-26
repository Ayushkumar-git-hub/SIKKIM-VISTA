"use client";

import React, { useState, useRef, useEffect } from 'react';
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Camera, File, Loader2, Upload, VideoOff } from "lucide-react";
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function LandRecognitionPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const enableCamera = async () => {
      if (typeof navigator.mediaDevices?.getUserMedia !== 'function') {
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        setHasCameraPermission(false);
      }
    };

    const disableCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }
    };

    if (isCameraOn) {
        enableCamera();
    } else {
        disableCamera();
    }

    return () => {
      disableCamera();
    }
  }, [isCameraOn]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCaptureFromCamera = () => {
    if (isCameraOn && videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        if (context) {
            context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
            const dataUri = canvas.toDataURL('image/jpeg');
            setPreviewUrl(dataUri);
        }
    } else {
        toast({
            variant: "destructive",
            title: "Camera is Off",
            description: "Please turn on the camera to capture a photo.",
        });
    }
  };
  
  const handleRecognize = async () => {
    toast({
        title: "Feature Coming Soon",
        description: "The AI land recognition feature is currently under development.",
    });
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
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Capture or Upload an Image</CardTitle>
                            <CardDescription>Use your camera to take a photo or upload an image file from your device.</CardDescription>
                        </div>
                         {hasCameraPermission !== false && (
                            <div className="flex items-center space-x-2">
                                <Switch id="camera-switch" checked={isCameraOn} onCheckedChange={setIsCameraOn} />
                                <Label htmlFor="camera-switch">Camera</Label>
                            </div>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                        <div className="w-full aspect-video rounded-md bg-muted flex items-center justify-center">
                           {isCameraOn ? (
                                <video ref={videoRef} className="w-full h-full object-cover rounded-md" autoPlay muted playsInline />
                           ) : (
                                <div className="flex flex-col items-center text-muted-foreground">
                                    <VideoOff className="w-16 h-16" />
                                    <p>Camera is off</p>
                                </div>
                           )}
                        </div>
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
                        <Button onClick={handleCaptureFromCamera} disabled={!hasCameraPermission || !isCameraOn}>
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
                    <CardDescription>This is what our AI would find in your image.</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-card-foreground">
                    <p className="text-muted-foreground">The AI analysis feature is coming soon. When available, the description of your image will appear here.</p>
                </CardContent>
            </Card>
        </div>
      </main>
    </AppLayout>
  );
}
