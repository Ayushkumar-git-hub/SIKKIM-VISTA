"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bot } from "lucide-react";
import React, { useRef, useEffect } from "react";

export function AiChat() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const yetiAvatar = PlaceHolderImages.find(img => img.id === 'yeti-avatar');

   const YetiAvatar = () => (
    <Avatar className="w-10 h-10 border">
        {yetiAvatar ? (
            <AvatarImage src={yetiAvatar.imageUrl} alt="Yatra Yeti" className="object-cover" />
        ) : (
            <AvatarFallback><Bot /></AvatarFallback>
        )}
    </Avatar>
  );

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
            <div className="flex items-start gap-4">
              <YetiAvatar />
              <div className="p-4 rounded-lg bg-card max-w-lg">
                <p className="font-medium text-card-foreground">Yatra Yeti</p>
                <p className="text-card-foreground">
                    Hello! The AI chat feature is currently under development. Soon, I will be able to help you plan your trip to Sikkim.
                </p>
              </div>
            </div>
        </div>
      </ScrollArea>
       <div className="p-4 border-t text-center">
        <p className="text-sm text-muted-foreground">The AI Assistant feature is coming soon!</p>
      </div>
    </div>
  );
}
