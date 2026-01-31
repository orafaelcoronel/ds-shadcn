import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LabelPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Label</h1>
        <p className="text-sm text-muted-foreground">
          Rótulos acessíveis para formulários e controles.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Input</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your name" />
          <p className="text-sm text-muted-foreground">
            This is how you associate a label with an input field.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Checkbox</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="option1" />
            <Label htmlFor="option1" className="font-normal cursor-pointer">
              Enable notifications
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option2" />
            <Label htmlFor="option2" className="font-normal cursor-pointer">
              Subscribe to newsletter
            </Label>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Required Field</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="email">
            Email
            <span className="text-destructive ml-1">*</span>
          </Label>
          <Input id="email" type="email" placeholder="you@example.com" />
          <p className="text-sm text-muted-foreground">
            Use an asterisk to indicate required fields.
          </p>
        </div>
      </section>
    </div>
  );
}
