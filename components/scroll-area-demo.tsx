import { ScrollArea } from "@/registry/cs16/ui/scroll-area";
import { Separator } from "@/registry/cs16/ui/separator";
import * as React from "react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 border border-r-[#8c9284] border-b-[#8c9284] border-l-[#292c21] bg-accent">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
