import { Badge } from "@/components/ui/badge";

export default function BadgePlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Badge</h1>
        <p className="text-sm text-muted-foreground">
          Variantes e estados do componente de badge.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Icons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">
            <span>✓</span>
            Verified
          </Badge>
          <Badge variant="secondary">
            <span>★</span>
            Featured
          </Badge>
          <Badge variant="outline">
            <span>⚠</span>
            Warning
          </Badge>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Usage Examples</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">Status:</span>
            <Badge variant="default">Active</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Role:</span>
            <Badge variant="secondary">Admin</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Alert:</span>
            <Badge variant="destructive">Critical</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
