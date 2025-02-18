"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-2 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-2 top-2 opacity-70transition-opacity hover:opacity-100 bg-primary text-primary-foreground border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] active:border-t-[#292c21] active:border-l-[#292c21] active:border-r-[#8c9284] active:border-b-[#8c9284] ring-offset-background focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight flex items-center gap-2",
      className
    )}
    {...props}
  >
    <SteamIcon />
    {props.children}
  </DialogPrimitive.Title>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
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
