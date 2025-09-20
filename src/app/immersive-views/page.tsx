import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ImmersiveViewsPage() {
  const immersiveImages = PlaceHolderImages.filter(img => img.id.startsWith('immersive-'));

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Immersive 360° Views"
          description="Step into the breathtaking landscapes of Sikkim. A virtual journey to its most serene and majestic spots."
        />
        <Card>
          <CardContent className="p-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {immersiveImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative aspect-video w-full">
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="rounded-lg object-cover"
                        data-ai-hint={image.imageHint}
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                       <div className="absolute bottom-0 left-0 p-6">
                         <h3 className="text-2xl font-bold text-white font-headline">{image.description}</h3>
                       </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
}
