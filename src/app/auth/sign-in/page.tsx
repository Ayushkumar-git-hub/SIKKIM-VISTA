
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mountain } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignInPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-[380px] max-w-[90vw] border-none shadow-none sm:border sm:shadow-sm">
          <CardHeader className="text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <CardDescription>
              Choose your role to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tourist">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tourist">Tourist / User</TabsTrigger>
                <TabsTrigger value="official">Official Partner</TabsTrigger>
              </TabsList>
              <TabsContent value="tourist" className="pt-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email-tourist">Email</Label>
                    <Input
                      id="email-tourist"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password-tourist">Password</Label>
                      <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input id="password-tourist" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sign in with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/sign-up" className="underline">
                    Sign up
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="official" className="pt-6">
                 <div className="grid gap-4">
                  <p className="text-center text-sm text-muted-foreground">For government verified tour guides, hotels, travel agencies, and event organizers.</p>
                  <div className="grid gap-2">
                    <Label htmlFor="email-official">Official Email or ID</Label>
                    <Input
                      id="email-official"
                      type="text"
                      placeholder="official.id@sikkim.gov"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password-official">Password</Label>
                       <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password-official" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In as Official
                  </Button>
                   <div className="mt-4 text-center text-sm">
                    Not registered?{" "}
                    <Link href="#" className="underline">
                      Apply for Partner Account
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <img
          src="https://picsum.photos/seed/auth-bg/1920/1080"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          data-ai-hint="mountain landscape"
        />
         <div className="absolute top-8 left-8 text-white flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="text-xl font-semibold font-headline">Sikkim Explorer</span>
        </div>
      </div>
    </div>
  )
}
