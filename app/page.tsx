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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Buttons</h2>
              <ButtonDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Separator</h2>
              <SeparatorDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Checkbox</h2>
              <CheckboxDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Inputs</h2>
              <InputDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">RadioGroup</h2>
              <RadioGroupDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Sliders</h2>
              <SliderDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Dialog</h2>
              <DialogDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Tooltip</h2>
              <TooltipDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Progress</h2>
              <ProgressDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Tabs</h2>
              <TabsDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 flex items-center text-2xl">
                Accordion
                <Badge className="ml-2">Tailwind v4</Badge>
              </h2>
              <AccordionDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Alert Dialog</h2>
              <AlertDialogDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Badge</h2>
              <BadgeDemo />
            </div>
            <div className="flex flex-col gap-4 border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Scroll Area</h2>
              <ScrollAreaDemo />
              <ScrollAreaHorizontalDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4">
              <h2 className="mb-2 text-2xl">Select</h2>
              <SelectDemo />
            </div>
            <div className="border border-t-[#8c9284] border-r-[#292c21] border-b-[#292c21] border-l-[#8c9284] p-4 md:col-span-2 lg:col-span-3">
              <h2 className="mb-2 text-2xl">Charts</h2>
              <ChartDemo />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
