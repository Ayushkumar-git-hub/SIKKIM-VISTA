
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { LocateFixed, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { GoogleMapComponent } from "@/components/google-map";
import { Card } from "@/components/ui/card";

type UserLocation = {
  lat: number;
  lng: number;
};

export default function LocationTrackerPage() {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isTracking, setIsTracking] = useState(false);

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
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
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
                title="Location Tracker"
                description="Find your current location on the map of Sikkim with a single click."
            />
            <div className="flex gap-2 mb-4 md:mb-0">
                <Button onClick={handleTrackUser} disabled={isTracking}>
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
            </div>
        </div>
        <div className="flex-1 w-full flex items-center justify-center">
            <Card className="w-full max-w-5xl aspect-[4/3] rounded-lg overflow-hidden border shadow-sm">
                <GoogleMapComponent userLocation={userLocation} />
            </Card>
        </div>
      </main>
    </AppLayout>
  );
}
