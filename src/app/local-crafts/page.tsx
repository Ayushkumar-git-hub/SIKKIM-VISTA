
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { localCrafts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { IndianRupee, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function LocalCraftsPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Local Crafts Showcase"
          description="Support Sikkim's talented artisans. Each purchase empowers local communities and preserves traditional craftsmanship."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {localCrafts.map((craft) => {
            const image = getImage(craft.imageId);
            return (
              <Card key={craft.id} className="overflow-hidden flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative aspect-square w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={craft.name}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg">{craft.name}</CardTitle>
                  <CardDescription className="mt-1 text-sm">{craft.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center">
                  <div className="flex items-center text-xl font-bold text-primary">
                    <IndianRupee className="h-5 w-5 mr-1" />
                    <span>{craft.price}</span>
                  </div>
                  <Button>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </AppLayout>
  );
}
