import { Separator } from "@/components/ui/separator";

export default function SeparatorPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Separator</h1>
        <p className="text-sm text-muted-foreground">
          Linha divisória para separar conteúdo visualmente.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Horizontal</h2>
        <div className="max-w-md">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Section Title</h4>
            <p className="text-sm text-muted-foreground">
              Content before separator.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Another Section
            </h4>
            <p className="text-sm text-muted-foreground">
              Content after separator.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Vertical</h2>
        <div className="flex h-20 items-center gap-4 max-w-md">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Left</span>
            <span className="text-sm text-muted-foreground">Content</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Middle</span>
            <span className="text-sm text-muted-foreground">Content</span>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Right</span>
            <span className="text-sm text-muted-foreground">Content</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">In Content</h2>
        <div className="max-w-lg">
          <div className="space-y-4">
            <p className="text-sm">
              The separator component can be used to divide sections within
              cards, dialogs, or any other container.
            </p>
            <Separator />
            <p className="text-sm">
              It helps create visual hierarchy and improves content
              organization.
            </p>
            <Separator />
            <p className="text-sm">
              Use it sparingly to avoid cluttering the interface.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
