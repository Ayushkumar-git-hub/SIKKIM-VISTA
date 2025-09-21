
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { mapPois } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DownloadCloud, MapPin, LocateFixed, User, Loader2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

type UserLocation = {
  top: string;
  left: string;
};

export default function SmartMapsPage() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleOfflineDownload = () => {
    toast({
      title: "Map Cached for Offline Use",
      description: "The map area has been saved and is now available for offline access.",
    });
  };

  const handleTrackUser = () => {
    setIsTracking(true);
    if (typeof navigator.geolocation?.getCurrentPosition !== 'function') {
        toast({
            variant: "destructive",
            title: "Geolocation not supported",
            description: "Your browser does not support location tracking.",
        });
        setIsTracking(false);
        return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Simulate converting GPS coordinates to a position on the static map image.
        // In a real app, this would involve a complex calculation.
        const simulatedLocation = { top: '45%', left: '50%' };
        setUserLocation(simulatedLocation);
        toast({
          title: "Location Found",
          description: "Your current location is marked on the map.",
        });
        setIsTracking(false);
      },
      (error) => {
        toast({
          variant: "destructive",
          title: "Could not get location",
          description: error.message,
        });
        setIsTracking(false);
      }
    );
  };

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <PageHeader
            title="Smart Maps"
            description="Navigate Sikkim with ease. Discover monasteries, viewpoints, and hidden gems with our offline-friendly maps."
            />
            <div className="flex gap-2 mb-4 md:mb-0">
                <Button onClick={handleTrackUser} variant="outline" disabled={isTracking}>
                    {isTracking ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            <span>Tracking...</span>
                        </>
                    ) : (
                         <>
                            <LocateFixed className="mr-2 h-4 w-4" />
                            <span>Track My Location</span>
                        </>
                    )}
                </Button>
                <Button onClick={handleOfflineDownload}>
                    <DownloadCloud className="mr-2 h-4 w-4" />
                    Download for Offline Use
                </Button>
            </div>
        </div>
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative w-full max-w-5xl aspect-[4/3] rounded-lg overflow-hidden border shadow-sm">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt="Satellite map of Sikkim"
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-transparent" />
            {mapPois.map((poi) => (
              <Popover key={poi.id}>
                <PopoverTrigger asChild>
                  <button
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: poi.top, left: poi.left }}
                    aria-label={`Location pin for ${poi.name}`}
                  >
                    <MapPin className="w-8 h-8 text-accent drop-shadow-lg animate-pulse hover:animate-none hover:scale-125 transition-transform" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <h3 className="font-bold font-headline text-lg text-primary">{poi.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{poi.description}</p>
                </PopoverContent>
              </Popover>
            ))}

            {userLocation && (
              <Popover>
                <PopoverTrigger asChild>
                    <div
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ top: userLocation.top, left: userLocation.left }}
                        aria-label="Your current location"
                    >
                        <div className="relative">
                            <User className="w-7 h-7 text-white bg-blue-600 rounded-full p-1 border-2 border-white shadow-lg" />
                            <div className="absolute inset-0 rounded-full bg-blue-500/50 animate-ping -z-10" />
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-48">
                  <h3 className="font-bold text-lg text-primary">You are here</h3>
                  <p className="text-sm text-muted-foreground mt-1">Your estimated current location.</p>
                </PopoverContent>
              </Popover>
            )}

          </div>
        </div>
      </main>
    </AppLayout>
  );
}
