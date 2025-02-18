"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer h-3 w-3 shrink-0 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-border-light rounded-xs data-[state=checked]:bg-primary data-[state=checked]:text-foreground data-[state=checked]:border-foreground",
        secondary:
          "border-t-[#292c21] border-l-[#292c21] border-r-[#8c9284] bg-muted border-b-[#8c9284] data-[state=checked]:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

interface CheckProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Check: React.FC<CheckProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    className={cn("h-3 w-3 fill-current", className)}
    {...props}
  >
    <path d="M2 6h1v1H2m1-2h1v1H3M2 5h1v1H2m0-2h1v1H2m1 1h1v1H3m0 0h1v1H3m1-2h1v1H4m0 0h1v1H4m0 0h1v1H4m1-2h1v1H5m0-2h1v1H5m0-2h1v1H5m1-2h1v1H6m0 0h1v1H6m0 0h1v1H6m1-2h1v1H7m0-2h1v1H7m0-2h1v1H7m1 0h1v1H8m0-2h1v1H8m0-2h1v1H8"></path>
  </svg>
);
