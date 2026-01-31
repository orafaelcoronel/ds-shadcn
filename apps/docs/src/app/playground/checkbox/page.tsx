"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPlaygroundPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Checkbox</h1>
        <p className="text-sm text-muted-foreground">
          Caixas de seleção com estados e labels.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="basic" />
            <span className="text-sm">Basic checkbox</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Label</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={checked1}
              onCheckedChange={(checked) => setChecked1(checked as boolean)}
            />
            <Label htmlFor="terms" className="font-normal cursor-pointer">
              Accept terms and conditions
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="marketing"
              checked={checked2}
              onCheckedChange={(checked) => setChecked2(checked as boolean)}
            />
            <Label htmlFor="marketing" className="font-normal cursor-pointer">
              Send me marketing emails
            </Label>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Disabled</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-unchecked" disabled />
            <Label
              htmlFor="disabled-unchecked"
              className="font-normal text-muted-foreground"
            >
              Disabled unchecked
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled checked />
            <Label
              htmlFor="disabled-checked"
              className="font-normal text-muted-foreground"
            >
              Disabled checked
            </Label>
          </div>
        </div>
      </section>
    </div>
  );
}
