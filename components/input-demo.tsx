import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function InputDemo() {
  return (
    <div className="flex flex-col gap-4 items-start">
      {/* default */}
      <Input type="email" placeholder="Email" />
      {/* disabled */}
      <Input type="email" placeholder="Email" disabled />
      {/* file */}
      <div className="flex flex-col-reverse w-full max-w-sm items-start gap-1.5">
        <Input id="picture" type="file" />
        <Label htmlFor="picture">Picture</Label>
      </div>
      {/* with label */}
      <div className="flex flex-row-reverse w-full max-w-sm items-center gap-1.5">
        <Input id="name" type="text" placeholder="Your Name..." />
        <Label htmlFor="name">Name</Label>
      </div>
      {/* with button */}
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
