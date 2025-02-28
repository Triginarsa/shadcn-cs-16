import { cn } from "@/lib/utils";
import { Input } from "@/registry/cs16/ui/input";
import { Slider } from "@/registry/cs16/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start gap-4">
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
      <p className="mt-6 mb-2 text-base">Sliders with Input</p>
      <div className="flex w-full items-start gap-4 py-2">
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
