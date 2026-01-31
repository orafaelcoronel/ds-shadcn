import { Button } from "@/components/ui/button";

export default function PlaygroundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 bg-background p-8">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </main>
  );
}