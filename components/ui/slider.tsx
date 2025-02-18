"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

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
    className={cn("w-full h-[24px] touch-none select-none", className)}
    {...props}
  >
    <div className="relative flex items-center mt-2 z-10">
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden border border-r-[#8c9284] border-b-[#8c9284] border-t-[#292c21] border-l-[#292c21] bg-[#1f1f1f]">
        <SliderPrimitive.Range className="absolute h-full bg-[#1f1f1f]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-2 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] bg-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </div>
    <div className="relative w-full mt-1">
      {/* Percentage indicators */}
      <div
        className="absolute w-full flex justify-between px-1"
        style={{ transform: "translateX(1px)" }}
      >
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((percent) => (
          <div
            key={percent}
            className="flex flex-col items-center"
            style={{ width: "1px", marginLeft: percent === 0 ? "0" : `-1px` }}
          >
            <div className="w-[1px] h-1 bg-muted-foreground" />
          </div>
        ))}
      </div>

      {/* Start and End labels */}
      {(startTitle || endTitle) && (
        <div className="absolute w-full flex justify-between mt-1">
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
