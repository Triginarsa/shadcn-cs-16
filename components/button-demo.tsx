import React from "react";
import { Button } from "./ui/button";

type ButtonVariant =
  | "default"
  | "ghost"
  | "outline"
  | "destructive"
  | "link"
  | "secondary";

interface ButtonRowProps {
  variant: ButtonVariant;
  label: string;
}

const ButtonRow = ({ variant, label }: ButtonRowProps) => (
  <div className="flex gap-4 items-center">
    <Button variant={variant}>{label}</Button>
    <Button variant={variant} disabled>
      {label} Disabled
    </Button>
  </div>
);

export default function ButtonDemo() {
  const buttonVariants: { variant: ButtonVariant; label: string }[] = [
    { variant: "default", label: "Button" },
    { variant: "ghost", label: "Ghost" },
    { variant: "outline", label: "Outline" },
    { variant: "destructive", label: "Destructive" },
    { variant: "link", label: "Link" },
    { variant: "secondary", label: "Secondary" },
  ];

  return (
    <div className="flex flex-col gap-2">
      {buttonVariants.map((button) => (
        <ButtonRow
          key={button.variant}
          variant={button.variant}
          label={button.label}
        />
      ))}
    </div>
  );
}
