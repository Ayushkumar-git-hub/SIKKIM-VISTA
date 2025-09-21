
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { narrativeWalkthroughs, Language } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ne', name: 'नेपाली' },
    { code: 'hi', name: 'हिंदी' },
];

export default function NarrativeWalkthroughsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <div className="flex justify-between items-start">
            <PageHeader
              title="Narrative Walkthroughs"
              description="Journey through time with captivating stories of Sikkim's endangered heritage, folklore, and traditions."
            />
            <div className="flex items-center gap-2 mb-8 p-1 bg-muted rounded-lg">
                {languages.map(lang => (
                    <Button
                        key={lang.code}
                        variant={selectedLanguage === lang.code ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={cn("transition-colors duration-200", selectedLanguage === lang.code && "shadow-sm")}
                    >
                        {lang.name}
                    </Button>
                ))}
            </div>
        </div>

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
                        alt={narrative.title['en']}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="sm:w-2/3 flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{narrative.title[selectedLanguage]}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{narrative.description[selectedLanguage]}</CardDescription>
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
