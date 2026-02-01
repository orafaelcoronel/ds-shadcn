"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioGroupPlaygroundPage() {
  const [value, setValue] = useState("option1");
  const [value2, setValue2] = useState("comfortable");

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Radio Group</h1>
        <p className="text-sm text-muted-foreground">
          Grupos de botões de rádio para seleção única.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="max-w-md">
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1" className="font-normal cursor-pointer">
                Option 1
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2" className="font-normal cursor-pointer">
                Option 2
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="option3" />
              <Label htmlFor="option3" className="font-normal cursor-pointer">
                Option 3
              </Label>
            </div>
          </RadioGroup>
          <p className="text-sm text-muted-foreground mt-2">
            Selected: {value}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Labels</h2>
        <div className="max-w-md">
          <Label className="mb-3">Select text size</Label>
          <RadioGroup value={value2} onValueChange={setValue2}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="compact" />
              <Label htmlFor="compact" className="font-normal cursor-pointer">
                Compact
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="comfortable" />
              <Label
                htmlFor="comfortable"
                className="font-normal cursor-pointer"
              >
                Comfortable
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="spacious" id="spacious" />
              <Label htmlFor="spacious" className="font-normal cursor-pointer">
                Spacious
              </Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Disabled Option</h2>
        <div className="max-w-md">
          <RadioGroup defaultValue="enabled">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="enabled" id="enabled" />
              <Label htmlFor="enabled" className="font-normal cursor-pointer">
                Enabled option
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="disabled" id="disabled" disabled />
              <Label
                htmlFor="disabled"
                className="font-normal text-muted-foreground"
              >
                Disabled option
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="another" id="another" />
              <Label htmlFor="another" className="font-normal cursor-pointer">
                Another option
              </Label>
            </div>
          </RadioGroup>
        </div>
      </section>
    </div>
  );
}
