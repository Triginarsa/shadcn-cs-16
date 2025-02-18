import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

export function InputDemo() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <Input type="email" placeholder="Email" />
      <Input type="email" placeholder="Email" disabled />
      <div className="flex flex-col-reverse w-full max-w-sm items-start gap-1.5">
        <Input id="picture" type="file" />
        <Label htmlFor="picture">Picture</Label>
      </div>
      <div className="flex flex-row-reverse w-full max-w-sm items-center gap-1.5">
        <Input id="name" type="text" placeholder="Your Name..." />
        <Label htmlFor="name">Name</Label>
      </div>
    </div>
  );
}
