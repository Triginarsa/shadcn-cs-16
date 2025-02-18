"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex justify-start w-fit text-primary-foreground gap-[1px] ",
      className
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
      "inline-flex w-fit justify-start border bg-background -mb-[1px] border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] whitespace-nowrap p-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-accent-foreground data-[state=active]:border-t-[#8c9284] data-[state=active]:border-l-[#8c9284] data-[state=active]:border-r-[#292c21] data-[state=active]:border-b-[#8c9284] data-[state=active]:border-solid data-[state=inactive]:border-b-[#8c9284] data-[state=active]:-mt-[2px] relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-[calc(100%+1px)] after:h-[1px] data-[state=active]:after:bg-background  data-[state=inactive]:after:bg-[#8c9284]",
      className
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
      " p-2 bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
