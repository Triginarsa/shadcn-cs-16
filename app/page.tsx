"use client";

import { AccordionDemo } from "@/components/accordion-demo";
import { AlertDialogDemo } from "@/components/alert-dialog-demo";
import { BadgeDemo } from "@/components/badge-demo";
import ButtonDemo from "@/components/button-demo";
import { ChartDemo } from "@/components/chart-demo";
import { CheckboxDemo } from "@/components/checkbox-demo";
import { DialogDemo } from "@/components/dialog-demo";
import { InputDemo } from "@/components/input-demo";
import { ProgressDemo } from "@/components/progress-demo";
import { RadioGroupDemo } from "@/components/radio-group-demo";
import { ScrollAreaDemo } from "@/components/scroll-area-demo";
import { ScrollAreaHorizontalDemo } from "@/components/scroll-area-horizontal-demo";
import { SelectDemo } from "@/components/select-demo";
import { SeparatorDemo } from "@/components/separator-demo";
import { SliderDemo } from "@/components/slider-demo";
import { TabsDemo } from "@/components/tabs-demo";
import { TooltipDemo } from "@/components/tooltips-demo";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Badge } from "@/registry/cs16/ui/badge";
import { Button } from "@/registry/cs16/ui/button";
import { Card } from "@/registry/cs16/ui/card";
import Link from "next/link";

export default function Home() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <main className="flex flex-col items-center gap-8 md:gap-12">
          <div className="w-full max-w-2xl">
            <h1 className="text-center text-3xl font-normal tracking-wide md:text-4xl lg:text-5xl">
              CS 1.6 Shadcn Theme
            </h1>
            <p className="text-center text-lg text-muted-foreground">
              An open-source UI component library.{" "}
              <Button variant="link" size="url">
                <Link href="https://github.com/Triginarsa/shadcn-cs-16">
                  Github
                </Link>
              </Button>
            </p>
          </div>

          <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Buttons</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/button.json",
                      "button",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("button") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <ButtonDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Separator</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/separator.json",
                      "separator",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("separator") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <SeparatorDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Checkbox</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/checkbox.json",
                      "checkbox",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("checkbox") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <CheckboxDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Inputs</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/input.json",
                      "input",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("input") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <InputDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">RadioGroup</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/radio-group.json",
                      "radio-group",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("radio-group") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <RadioGroupDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Sliders</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/slider.json",
                      "slider",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("slider") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <SliderDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Dialog</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/dialog.json",
                      "dialog",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("dialog") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <DialogDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Tooltip</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/tooltip.json",
                      "tooltip",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("tooltip") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <TooltipDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Progress</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/progress.json",
                      "progress",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("progress") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <ProgressDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Tabs</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/tabs.json",
                      "tabs",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("tabs") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <TabsDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 flex items-center text-2xl">
                  Accordion
                  <Badge className="ml-2">Tailwind v4</Badge>
                </h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/accordion.json",
                      "accordion",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("accordion") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <AccordionDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Alert Dialog</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/alert-dialog.json",
                      "alert-dialog",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("alert-dialog") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <AlertDialogDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Badge</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/badge.json",
                      "badge",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("badge") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <BadgeDemo />
            </Card>
            <Card className="flex flex-col gap-4 p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Scroll Area</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/scroll-area.json",
                      "scroll-area",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("scroll-area") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <ScrollAreaDemo />
              <ScrollAreaHorizontalDemo />
            </Card>
            <Card className="p-4">
              <div className="flex flex-row justify-between">
                <h2 className="mb-2 text-2xl">Select</h2>
                <Button
                  onClick={() => {
                    copyToClipboard(
                      "https://shadcn-cs16.triginarsa.com/registry/select.json",
                      "select",
                    );
                  }}
                  variant="default"
                  size={"sm"}
                >
                  {isCopied("select") ? "Copied!" : "Copy Component"}
                </Button>
              </div>
              <SelectDemo />
            </Card>
            <Card className="p-4 md:col-span-2 lg:col-span-3">
              <h2 className="mb-2 text-2xl">Charts</h2>
              <ChartDemo />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
