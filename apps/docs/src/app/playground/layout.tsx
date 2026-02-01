import Link from "next/link";

const items = [
  { href: "/playground", label: "Overview" },
  { href: "/playground/button", label: "Button" },
  { href: "/playground/badge", label: "Badge" },
  { href: "/playground/card", label: "Card" },
  { href: "/playground/input", label: "Input" },
  { href: "/playground/checkbox", label: "Checkbox" },
  { href: "/playground/switch", label: "Switch" },
  { href: "/playground/textarea", label: "Textarea" },
  { href: "/playground/select", label: "Select" },
  { href: "/playground/radio-group", label: "Radio Group" },
  { href: "/playground/tooltip", label: "Tooltip" },
  { href: "/playground/avatar", label: "Avatar" },
  { href: "/playground/separator", label: "Separator" },
  { href: "/playground/label", label: "Label" },
];

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-[240px_1fr]">
        <aside className="rounded-lg border bg-card p-4">
          <div className="mb-3 text-sm font-semibold">Playground</div>
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="rounded-lg border bg-card p-6">{children}</main>
      </div>
    </div>
  );
}
