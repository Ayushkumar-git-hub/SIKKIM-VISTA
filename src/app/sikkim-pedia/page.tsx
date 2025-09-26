
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sikkimPediaData } from "@/lib/sikkim-pedia-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Book, Landmark, Sprout } from "lucide-react";

export default function SikkimPediaPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "sikkim-pedia-bg");

  return (
    <AppLayout>
      <main className="flex-1">
        <section className="relative h-[300px] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Ancient Sikkimese scroll"
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-4">
            <PageHeader
              title="Sikkim Pedia"
              description="An encyclopedia of Sikkim's rich history, vibrant culture, and sacred monasteries."
            />
          </div>
        </section>

        <div className="p-4 md:p-8 space-y-8">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{sikkimPediaData.introduction}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-6 h-6 text-primary" />
                  <span>{sikkimPediaData.history.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>{sikkimPediaData.history.content}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="w-6 h-6 text-primary" />
                  <span>{sikkimPediaData.culture.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>{sikkimPediaData.culture.content}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-primary" />
                <span>{sikkimPediaData.monasteries.title}</span>
              </CardTitle>
              <CardDescription>
                Explore the history and significance of Sikkim's most revered
                spiritual centers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {sikkimPediaData.monasteries.list.map((monastery, index) => {
                   const image = PlaceHolderImages.find(img => img.id === monastery.imageId);
                  return (
                    <AccordionItem value={`item-${index}`} key={monastery.id}>
                      <AccordionTrigger className="text-lg hover:no-underline">
                        <div className="flex items-center gap-4">
                           {image && (
                                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                    <Image src={image.imageUrl} alt={monastery.name} fill className="object-cover" data-ai-hint={image.imageHint} />
                                </div>
                            )}
                            <span className="text-left">{monastery.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 pt-4">
                        <div>
                            <h4 className="font-semibold text-card-foreground">History</h4>
                            <p className="text-muted-foreground">{monastery.history}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-foreground">Significance</h4>
                            <p className="text-muted-foreground">{monastery.significance}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
    </AppLayout>
  );
}
