import { CheckboxDemo } from "@/components/checkbox-demo";
import { SeparatorDemo } from "@/components/separator-demo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-center">CS 1.6 Shadcn Theme</h1>

        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-4 items-center">
            <Button>Button</Button>
            <Button disabled>Button Disabled</Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="ghost">ghost</Button>
            <Button variant="ghost" disabled>
              Ghost Disabled
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="destructive">Destructive</Button>
            <Button variant="destructive" disabled>
              Destructive Disabled
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="link">link</Button>
            <Button variant="link" disabled>
              Link Disabled
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>
              Secondary Disabled
            </Button>
          </div>
          <SeparatorDemo />
          <CheckboxDemo />
        </div>
      </main>
    </div>
  );
}
