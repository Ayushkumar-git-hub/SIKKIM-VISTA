import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { narrativeWalkthroughs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NarrativeWalkthroughsPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Narrative Walkthroughs"
          description="Journey through time with captivating stories of Sikkim's endangered heritage, folklore, and traditions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {narrativeWalkthroughs.map((narrative) => {
            const image = getImage(narrative.imageId);
            return (
              <Card key={narrative.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative aspect-video sm:aspect-auto">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={narrative.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="sm:w-2/3 flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{narrative.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{narrative.description}</CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0 flex justify-end items-center">
                      <span className="text-sm font-semibold text-accent mr-2 group-hover:mr-1 transition-all">Read More</span>
                      <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </AppLayout>
  );
}
