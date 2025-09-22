
import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function ImmersiveViewsPage() {

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Immersive 360° Views"
          description="Step into the breathtaking landscapes of Sikkim. A virtual journey to its most serene and majestic spots."
        />
        <Card>
          <CardContent className="p-6 flex items-center justify-center h-96">
            <p className="text-muted-foreground">Immersive view content will be available here.</p>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
}
