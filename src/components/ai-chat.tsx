"use client";

import { yatraYeti } from "@/ai/flows/yatra-yeti-flow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Bot, Send, User } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const yetiAvatar = PlaceHolderImages.find(img => img.id === 'yeti-avatar');

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await yatraYeti({ query: input });
      const assistantMessage: Message = {
        role: "assistant",
        content: result.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Yatra Yeti Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get a response from Yatra Yeti.",
      });
       const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="flex flex-col h-full max-h-[calc(100vh-120px)]">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.length === 0 && (
             <div className="flex items-start gap-4">
              <YetiAvatar />
              <div className="p-4 rounded-lg bg-card max-w-lg">
                <p className="font-medium text-card-foreground">Yatra Yeti</p>
                <p className="text-card-foreground">Hello! How can I help you plan your trip to Sikkim today? Ask me about places, itineraries, or culture.</p>
              </div>
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-4",
                message.role === "user" && "justify-end"
              )}
            >
              {message.role === "assistant" && (
                <YetiAvatar />
              )}
              <div
                className={cn(
                  "p-4 rounded-lg max-w-lg",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card"
                )}
              >
                <p className={cn("font-medium", message.role === "user" ? "text-primary-foreground" : "text-card-foreground")}>
                  {message.role === "user" ? "You" : "Yatra Yeti"}
                </p>
                <p className={cn(message.role === "user" ? "text-primary-foreground" : "text-card-foreground")}>
                  {message.content}
                </p>
              </div>
              {message.role === "user" && (
                 <Avatar className="w-10 h-10 border">
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <YetiAvatar />
              <div className="p-4 rounded-lg bg-card max-w-lg">
                 <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
                  </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your trip to Sikkim..."
            className="flex-1"
            disabled={isLoading}
            autoComplete="off"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
