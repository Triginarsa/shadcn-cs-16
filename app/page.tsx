import { AccordionDemo } from "@/components/accordion-demo";
import { AlertDialogDemo } from "@/components/alert-dialog-demo";
import ButtonDemo from "@/components/button-demo";
import { ChartDemo } from "@/components/chart-demo";
import { CheckboxDemo } from "@/components/checkbox-demo";
import { DialogDemo } from "@/components/dialog-demo";
import { InputDemo } from "@/components/input-demo";
import { ProgressDemo } from "@/components/progress-demo";
import { RadioGroupDemo } from "@/components/radio-group-demo";
import { SeparatorDemo } from "@/components/separator-demo";
import { SliderDemo } from "@/components/slider-demo";
import { TabsDemo } from "@/components/tabs-demo";
import { TooltipDemo } from "@/components/tooltips-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <main className="flex flex-col items-center gap-8 md:gap-12">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-center tracking-wide">
              CS 1.6 Shadcn Theme
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              An open-source UI component library.{" "}
              <Button variant="link" size="url">
                <Link href="https://github.com/Triginarsa/shadcn-cs-16">
                  Github
                </Link>
              </Button>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Buttons</h2>
              <ButtonDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Separator</h2>
              <SeparatorDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Checkbox</h2>
              <CheckboxDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Inputs</h2>
              <InputDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">RadioGroup</h2>
              <RadioGroupDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Sliders</h2>
              <SliderDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Dialog</h2>
              <DialogDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Tooltip</h2>
              <TooltipDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Progress</h2>
              <ProgressDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Tabs</h2>
              <TabsDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">
                Accordion
                <span className="ml-2 bg-accent-foreground text-primary p-[1px] text-xs">
                  {" "}
                  Tailwind v4
                </span>
              </h2>

              <AccordionDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21]">
              <h2 className="text-2xl mb-2">Alert Dialog</h2>

              <AlertDialogDemo />
            </div>
            <div className="p-4 border border-t-[#8c9284] border-l-[#8c9284] border-r-[#292c21] border-b-[#292c21] md:col-span-2 lg:col-span-3">
              <h2 className="text-2xl mb-2">Charts</h2>
              <ChartDemo />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
