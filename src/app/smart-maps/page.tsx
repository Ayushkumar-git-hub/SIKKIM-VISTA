
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { mapPois } from "@/lib/data";
import { GoogleMapComponent } from "@/components/google-map";
import { Card } from "@/components/ui/card";

export default function SmartMapsPage() {

  const pois = mapPois.map(poi => ({
    lat: parseFloat(poi.top),
    lng: parseFloat(poi.left),
    name: poi.name,
    description: poi.description,
  }));

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <PageHeader
            title="Smart Maps"
            description="Navigate Sikkim with ease. Discover monasteries, viewpoints, and hidden gems with our interactive map."
            />
        </div>
        <div className="flex-1 w-full flex items-center justify-center">
          <Card className="w-full max-w-5xl aspect-[4/3] rounded-lg overflow-hidden border shadow-sm">
            <GoogleMapComponent pois={pois} />
          </Card>
        </div>
      </main>
    </AppLayout>
  );
}
