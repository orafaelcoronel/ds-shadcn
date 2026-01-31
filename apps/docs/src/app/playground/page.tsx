import { Button } from "@/components/ui/button";

export default function PlaygroundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 bg-background p-8">
      <Button size="xs">Primary</Button>
      <Button variant="secondary" size="xs">Secondary</Button>
      <Button variant="outline" size="xs">Outline</Button>
      <Button variant="ghost" size="xs">Ghost</Button>
    </main>
  );
}