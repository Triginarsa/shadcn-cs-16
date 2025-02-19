import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Input } from "./ui/input";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 items-start">
        <Slider
          defaultValue={[50]}
          className={cn("w-full", className)}
          startTitle="Start"
          endTitle="End"
          {...props}
        />
        {/* TODO: Disabled slider style */}
        {/* <Slider
          defaultValue={[50]}
          className={cn("w-full", className)}
          startTitle="Start"
          endTitle="End"
          disabled
          {...props}
        /> */}
      </div>
      <p className="text-base mt-6 mb-2">Sliders with Input</p>
      <div className="flex w-full py-2 gap-4 items-start">
        <Slider
          defaultValue={[50]}
          className={cn("w-[60%]", className)}
          startTitle="Start"
          endTitle="End"
          {...props}
        />
        <Input type="number" className="w-11" defaultValue={50} />
      </div>
    </div>
  );
}
