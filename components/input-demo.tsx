import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function InputDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      {/* default */}
      <Input type="email" placeholder="Email" />
      {/* disabled */}
      <Input type="email" placeholder="Email" disabled />
      {/* file */}
      <div className="flex w-full max-w-sm flex-col-reverse items-start gap-1.5">
        <Input id="picture" type="file" />
        <Label htmlFor="picture">Picture</Label>
      </div>
      {/* with label */}
      <div className="flex w-full max-w-sm flex-row-reverse items-center gap-1.5">
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
