"use client";

import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  startTitle?: string;
  endTitle?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, startTitle, endTitle, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("h-[24px] w-full touch-none select-none", className)}
    {...props}
  >
    <div className="relative z-10 mt-2 flex items-center">
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden border border-t-[#292c21] border-r-[#8c9284] border-b-[#8c9284] border-l-[#292c21] bg-[#1f1f1f]">
        <SliderPrimitive.Range className="absolute h-full bg-[#1f1f1f]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-2 border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] bg-background transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
    </div>
    <div className="relative mt-1 w-full">
      {/* Percentage indicators */}
      <div
        className="absolute flex w-full justify-between px-1"
        style={{ transform: "translateX(1px)" }}
      >
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((percent) => (
          <div
            key={percent}
            className="flex flex-col items-center"
            style={{ width: "1px", marginLeft: percent === 0 ? "0" : `-1px` }}
          >
            <div className="h-1 w-[1px] bg-muted-foreground" />
          </div>
        ))}
      </div>

      {/* Start and End labels */}
      {(startTitle || endTitle) && (
        <div className="absolute mt-1 flex w-full justify-between">
          {startTitle && (
            <span className="text-sm text-muted-foreground">{startTitle}</span>
          )}
          {endTitle && (
            <span className="text-sm text-muted-foreground">{endTitle}</span>
          )}
        </div>
      )}
    </div>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
