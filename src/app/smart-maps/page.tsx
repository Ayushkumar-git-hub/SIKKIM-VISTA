import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { mapPois } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function SmartMapsPage() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8 flex flex-col">
        <PageHeader
          title="Smart Maps"
          description="Navigate Sikkim with ease. Discover monasteries, viewpoints, and hidden gems with our offline-friendly maps."
        />
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative w-full max-w-5xl aspect-[4/3] rounded-lg overflow-hidden border shadow-sm">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt="Stylized map of Sikkim"
                fill
                className="object-contain"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
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
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
