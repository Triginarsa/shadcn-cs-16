"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex w-fit justify-start gap-[1px] text-primary-foreground ",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative -mb-[1px] inline-flex w-fit justify-start border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] bg-background p-1 text-sm font-medium whitespace-nowrap ring-offset-background transition-all after:absolute after:-bottom-[1px] after:left-0 after:h-[1px] after:w-[calc(100%+1px)] after:content-[''] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:-mt-[2px] data-[state=active]:border-solid data-[state=active]:border-t-[#8c9284] data-[state=active]:border-r-[#292c21] data-[state=active]:border-b-[#8c9284] data-[state=active]:border-l-[#8c9284] data-[state=active]:bg-background data-[state=active]:text-accent-foreground data-[state=active]:after:bg-background data-[state=inactive]:border-b-[#8c9284]  data-[state=inactive]:after:bg-[#8c9284]",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      " border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] bg-background p-2 ring-offset-background focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
