
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function ImmersiveViewsPage() {
  const immersiveImages = [
    PlaceHolderImages.find(img => img.id === 'immersive-1'),
    PlaceHolderImages.find(img => img.id === 'immersive-2'),
    PlaceHolderImages.find(img => img.id === 'immersive-3'),
    PlaceHolderImages.find(img => img.id === 'immersive-4'),
    PlaceHolderImages.find(img => img.id === 'immersive-5'),
  ].filter(Boolean);

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Immersive Views"
          description="Step into the breathtaking landscapes of Sikkim. A virtual journey to its most serene and majestic spots."
        />
        <div className="flex items-center justify-center w-full">
            <Carousel
                className="w-full max-w-4xl"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                {immersiveImages.map((image, index) => (
                    <CarouselItem key={index}>
                         <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative aspect-video w-full">
                                    {image && (
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12" />
            </Carousel>
        </div>
      </main>
    </AppLayout>
  );
}
