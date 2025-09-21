
"use client";

import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
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

interface Poi {
    lat: number;
    lng: number;
    name: string;
    description: string;
}

interface GoogleMapComponentProps {
  userLocation?: { lat: number, lng: number } | null;
  pois?: Poi[];
}

export function GoogleMapComponent({ userLocation, pois = [] }: GoogleMapComponentProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selectedPoi, setSelectedPoi] = useState<Poi | null>(null);

  const mapCenter = userLocation || defaultCenter;
  const zoomLevel = userLocation ? 14 : (pois.length > 0 ? 8 : 10);

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
      zoom={zoomLevel}
    >
      {userLocation && <Marker position={userLocation} />}
      {pois.map((poi) => (
          <Marker 
            key={poi.name} 
            position={{ lat: poi.lat, lng: poi.lng }} 
            onClick={() => setSelectedPoi(poi)}
          />
      ))}

      {selectedPoi && (
          <InfoWindow
            position={{ lat: selectedPoi.lat, lng: selectedPoi.lng }}
            onCloseClick={() => setSelectedPoi(null)}
          >
            <div>
              <h3 className="font-bold font-headline text-lg text-primary">{selectedPoi.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{selectedPoi.description}</p>
            </div>
          </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <Skeleton className="w-full h-full" />
  );
}
