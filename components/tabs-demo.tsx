import { Button } from "@/registry/cs16/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/cs16/ui/card";
import { Input } from "@/registry/cs16/ui/input";
import { Label } from "@/registry/cs16/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/cs16/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
        veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur excepteur sint
        occaecat cupidatat non proident sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you will be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
