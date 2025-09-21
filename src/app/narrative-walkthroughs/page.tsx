
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { narrativeWalkthroughs, Language } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ne', name: 'नेपाली' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ru', name: 'Русский' },
    { code: 'pt', name: 'Português' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'bo', name: 'བོད་སྐད' },
    { code: 'dz', name: 'རྫོང་ཁ' },
];

export default function NarrativeWalkthroughsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);
  const selectedLanguageName = languages.find(l => l.code === selectedLanguage)?.name || 'English';

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <div className="flex justify-between items-start mb-8">
            <PageHeader
              title="Narrative Walkthroughs"
              description="Journey through time with captivating stories of Sikkim's endangered heritage, folklore, and traditions."
            />
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                    {selectedLanguageName}
                    <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="max-h-80 overflow-y-auto">
                    {languages.map(lang => (
                        <DropdownMenuItem key={lang.code} onSelect={() => setSelectedLanguage(lang.code)}>
                            {lang.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
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
