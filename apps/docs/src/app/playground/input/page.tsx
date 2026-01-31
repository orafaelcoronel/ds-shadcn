import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Input</h1>
        <p className="text-sm text-muted-foreground">
          Campo de texto padrão com estados comuns.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Type your name" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With helper</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@company.com" />
          <p className="text-sm text-muted-foreground">
            We’ll only use this for account communication.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Disabled</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="disabled">Disabled</Label>
          <Input id="disabled" placeholder="Disabled input" disabled />
        </div>
      </section>
    </div>
  );
}