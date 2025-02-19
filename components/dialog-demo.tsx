import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
              className="col-span-3 order-last"
            />
            <Label htmlFor="name" className="text-right order-first">
              Name
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              defaultValue="@triginarsa"
              className="col-span-3 order-last"
            />
            <Label htmlFor="username" className="text-right order-first">
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
