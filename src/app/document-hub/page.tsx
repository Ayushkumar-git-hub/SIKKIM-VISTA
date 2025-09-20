import AppLayout from "@/components/layout/app-layout";
import { PageHeader } from "@/components/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { userDocuments } from "@/lib/data";
import { Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DocumentHubPage() {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
      case "active":
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      default:
        return "destructive";
    }
  };

  return (
    <AppLayout>
      <main className="flex-1 p-4 md:p-8">
        <PageHeader
          title="Document Hub"
          description="Access and manage all your essential travel documents in one place."
        />
        <Card>
          <CardContent className="p-0">
             <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Issued Date</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userDocuments.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(doc.status)}>
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{doc.issuedDate}</TableCell>
                      <TableCell>{doc.expiryDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="mr-2">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon" disabled={doc.status === 'Pending'}>
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </AppLayout>
  );
}
