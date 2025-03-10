import { Button } from "@/registry/cs16/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/cs16/ui/dialog";
import { Input } from "@/registry/cs16/ui/input";
import { Label } from "@/registry/cs16/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Input
              id="name"
              defaultValue="Adi Triginarsa"
              className="order-last col-span-3"
            />
            <Label htmlFor="name" className="order-first text-right">
              Name
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              defaultValue="@triginarsa"
              className="order-last col-span-3"
            />
            <Label htmlFor="username" className="order-first text-right">
              Username
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
