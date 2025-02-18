import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors text-white text-base leading-[15px] select-none focus-visible:outline-none focus-visible:-outline-offset-4 focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-black  disabled:pointer-events-none disabled:text-[#292c21] disabled:[text-shadow:_1px_1px_0_rgb(117_128_111)] disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] active:border-t-[#292c21] active:border-l-[#292c21] active:border-r-[#8c9284] active:border-b-[#8c9284] ring-offset-background focus-visible:ring-2 focus-visible:ring-ring/50",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] active:border-t-[#292c21] active:border-l-[#292c21] active:border-r-[#8c9284] active:border-b-[#8c9284] ring-offset-background focus-visible:ring-2 focus-visible:ring-ring/50",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-primary text-primary-foreground border ring ring-black border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] active:border-t-[#292c21] active:border-l-[#292c21] active:border-r-[#8c9284] active:border-b-[#8c9284] ring-offset-background focus-visible:ring-2 focus-visible:ring-ring/50",
        ghost:
          "hover:text-accent-foreground active:bg-primary border border-transparent active:border-2 active:border-t-[#292c21] active:border-l-[#292c21] active:border-r-[#8c9284] active:border-b-[#8c9284] hover:border-t-[#292c21] hover:border hover:border-l-[#292c21] hover:border-r-[#8c9284] hover:border-b-[#8c9284]",
        link: "text-accent-foreground underline-offset-4 hover:underline hover:decoration-dotted",
      },
      size: {
        default: "h-6 pl-2 py-2 pr-6",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
