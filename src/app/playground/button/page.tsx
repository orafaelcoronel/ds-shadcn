import { Button } from "@/components/ui/button";

export default function ButtonPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Button</h1>
        <p className="text-sm text-muted-foreground">
          Variants, sizes e estados principais do componente.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">XS</Button>
          <Button size="default">Default</Button>
          <Button size="sm">SM</Button>
          <Button size="lg">LG</Button>
          <Button size="icon" aria-label="Icon button">
            ⌘
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">States</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Enabled</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled outline
          </Button>
        </div>
      </section>
    </div>
  );
}