import AppLayout from "@/components/layout/app-layout";
import { AiChat } from "@/components/ai-chat";
import { PageHeader } from "@/components/page-header";

export default function AiAssistantPage() {
  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-60px)]">
        <main className="flex-1 flex flex-col p-4 md:p-6">
            <PageHeader
                title="AI Travel Assistant"
                description="Your personal guide to Sikkim. Ask for itineraries, travel tips, or cultural insights."
            />
            <div className="flex-1 bg-card border rounded-lg shadow-sm overflow-hidden">
                <AiChat />
            </div>
        </main>
      </div>
    </AppLayout>
  );
}
