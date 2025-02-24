"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] bg-background p-2 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("flex items-center gap-2 text-lg font-semibold", className)}
    {...props}
  >
    <SteamIcon />
    {props.children}
  </AlertDialogPrimitive.Title>
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants({ variant: "secondary" }), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "default" }),
      "mt-2 sm:mt-0",
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

const SteamIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    viewBox="0 0 16 15"
  >
    <path fill="#8c9284" d="M1 12h1v1H1m1 0h1v1H2m1-2h1v1H3m11-6h1v1h-1"></path>
    <path fill="#a5aa9c" d="M3 14h1v1H3"></path>
    <path
      fill="#bdbeb5"
      d="M0 11h1v1H0m10-9h1v1h-1m0 1h1v1h-1m2-3h1v1h-1m0 1h1v1h-1m0 2h1v1h-1"
    ></path>
    <path
      fill="#fff"
      d="M0 10h1v1H0m0-2h1v1H0m0-2h1v1H0m1-1h1v1H1m0 0h1v1H1m0 0h1v1H1m1-1h1v1H2m0-2h1v1H2m1-1h1v1H3m0 0h1v1H3m1-2h1v1H4m0 0h1v1H4m1-1h1v1H5m-4 0h1v1H1m1-1h1v1H2m1-1h1v1H3m1-1h1v1H4m1-1h1v1H5m-2 1h1v1H3m3-6h1v1H6m0-2h1v1H6m1-1h1v1H7m0 0h1v1H7m1-2h1v1H8m0 0h1v1H8m1-2h1v1H9m0 0h1v1H9m1-2h1v1h-1m0 0h1v1h-1M7 9h1v1H7m1-1h1v1H8m1-1h1v1H9M7 6h1v1H7m1-1h1v1H8m0-2h1v1H8m0-2h1v1H8m0-2h1v1H8m-1 7h1v1H7m4-9h1v1h-1m0 0h1v1h-1m-1-1h1v1h-1m1 0h1v1h-1m1-2h1v1h-1M9 2h1v1H9m4-1h1v1h-1m0 4h1v1h-1m1-2h1v1h-1m0-2h1v1h-1m0-2h1v1h-1m0-2h1v1h-1m-4-3h1v1h-1m1-1h1v1h-1m1-1h1v1h-1"
    ></path>
    <path fill="#848e84" d="M0 7h1v1H0m11-8h1v1h-1M7 4h1v1H7m1-4h1v1H8"></path>
    <path
      fill="#9ca29c"
      d="M2 8h1v1H2m1-1h1v1H3m3 5h1v1H6m1-2h1v1H7m3-5h1v1h-1m5-6h1v1h-1m0 0h1v1h-1"
    ></path>
    <path fill="#d6d7ce" d="M4 8h1v1H4m2 0h1v1H6"></path>
    <path fill="#dedfde" d="M4 14h1v1H4m1-1h1v1H5m3-5h1v1H8"></path>
    <path
      fill="#f7f7f7"
      d="M5 8h1v1H5m6-2h1v1h-1m1-1h1v1h-1m-1 0h1v1h-1"
    ></path>
    <path
      fill="#efefef"
      d="M2 12h1v1H2m4 0h1v1H6m1-2h1v1H7m0-3h1v1H7m0-6h1v1H7"
    ></path>
    <path fill="#cecfce" d="M4 12h1v1H4m1-1h1v1H5m4-7h1v1H9"></path>
    <path fill="#d6dbd6" d="M8 2h1v1H8m1-2h1v1H9m4-1h1v1h-1m1 0h1v1h-1"></path>
    <path fill="#949e94" d="M13 6h1v1h-1"></path>
    <path
      fill="#5a6952"
      d="M5 9h1v1H5m1 0h1v1H6m0 0h1v1H6m0 0h1v1H6m-2 0h1v1H4m1-1h1v1H5m8-9h1v1h-1m0-3h1v1h-1m0 4h1v1h-1m-4 1h1v1H9m-2 3h1v1H7"
    ></path>
    <path
      fill="#525d4a"
      d="M10 6h1v1h-1m1-1h1v1h-1m1-1h1v1h-1m1-3h1v1h-1m-1-3h1v1h-1m-1-1h1v1h-1m-1-1h1v1h-1M9 3h1v1H9m0 0h1v1H9m0 0h1v1H9M5 7h1v1H5m2-6h1v1H7m0 0h1v1H7m2-4h1v1H9m1-1h1v1h-1m2-1h1v1h-1m2 0h1v1h-1"
    ></path>
    <path fill="#adb6ad" d="M6 6h1v1H6"></path>
  </svg>
);

export default SteamIcon;
