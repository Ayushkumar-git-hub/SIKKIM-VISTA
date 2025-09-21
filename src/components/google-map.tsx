
"use client";

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertTriangle } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

// Default center to Gangtok, Sikkim
const defaultCenter = {
  lat: 27.3389,
  lng: 88.6065,
};

interface GoogleMapComponentProps {
  userLocation: { lat: number, lng: number } | null;
}

export function GoogleMapComponent({ userLocation }: GoogleMapComponentProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapCenter = userLocation || defaultCenter;

  if (loadError) {
    return (
        <div className="flex items-center justify-center h-full p-8">
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error Loading Map</AlertTitle>
                <AlertDescription>
                    There was an error loading the Google Map. Please ensure your API key is configured correctly in the .env file.
                </AlertDescription>
            </Alert>
        </div>
    );
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={userLocation ? 14 : 10}
    >
      {userLocation && <Marker position={userLocation} />}
    </GoogleMap>
  ) : (
    <Skeleton className="w-full h-full" />
  );
}
