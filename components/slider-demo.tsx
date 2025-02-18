import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Input } from "./ui/input";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="flex w-full py-2 gap-4 items-start">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        startTitle="Start"
        endTitle="End"
        {...props}
      />
      <Input type="number" className="w-11" defaultValue={50} />
    </div>
  );
}
