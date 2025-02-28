"use client";

import { Checkbox } from "@/registry/cs16/ui/checkbox";
import { Label } from "@/registry/cs16/ui/label";

export function CheckboxDemo() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" variant="secondary" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
    </div>
  );
}
