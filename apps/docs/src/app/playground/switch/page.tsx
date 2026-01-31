"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchPlaygroundPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Switch</h1>
        <p className="text-sm text-muted-foreground">
          Alternador de estado on/off com diferentes tamanhos.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="flex items-center gap-3">
          <Switch
            checked={checked1}
            onCheckedChange={setChecked1}
            aria-label="Toggle feature"
          />
          <span className="text-sm">
            Status: {checked1 ? "On" : "Off"}
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Sizes</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Switch size="sm" aria-label="Small switch" />
            <span className="text-sm">Small</span>
          </div>
          <div className="flex items-center gap-3">
            <Switch size="default" aria-label="Default switch" />
            <span className="text-sm">Default</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Label</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="airplane-mode" className="font-normal">
              Airplane Mode
            </Label>
            <Switch
              id="airplane-mode"
              checked={checked2}
              onCheckedChange={setChecked2}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="font-normal">
              Enable Notifications
            </Label>
            <Switch id="notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="font-normal">
              Dark Mode
            </Label>
            <Switch id="dark-mode" defaultChecked />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Disabled</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Switch disabled aria-label="Disabled unchecked" />
            <span className="text-sm text-muted-foreground">
              Disabled unchecked
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Switch disabled checked aria-label="Disabled checked" />
            <span className="text-sm text-muted-foreground">
              Disabled checked
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
