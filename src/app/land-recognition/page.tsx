
"use client";

import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { ScanLine } from "lucide-react";

export default function LandRecognitionPage() {
  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-md">
            <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                    <ScanLine className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
            </div>
            <h1 className="font-headline text-4xl font-bold text-foreground">
                Feature Coming Soon
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Our AI-powered Land Recognition feature is currently under development. Soon, you'll be able to identify Sikkim's beautiful landscapes just by taking a photo!
            </p>
        </div>
      </main>
    </AppLayout>
  );
}
