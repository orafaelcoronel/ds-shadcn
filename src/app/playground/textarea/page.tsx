import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Textarea</h1>
        <p className="text-sm text-muted-foreground">
          Campo de texto multilinha para entradas maiores.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Helper</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself"
            rows={4}
          />
          <p className="text-sm text-muted-foreground">
            You can include up to 500 characters in your bio.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Disabled</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="disabled">Disabled</Label>
          <Textarea
            id="disabled"
            placeholder="Disabled textarea"
            disabled
            value="This textarea is disabled and cannot be edited."
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Value</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea
            id="feedback"
            defaultValue="This is a textarea with a default value. You can edit this text."
            rows={3}
          />
        </div>
      </section>
    </div>
  );
}
