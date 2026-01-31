"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SelectPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Select</h1>
        <p className="text-sm text-muted-foreground">
          Componente de seleção com dropdown para escolher opções.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="max-w-md">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Sizes</h2>
        <div className="flex flex-col max-w-md gap-3">
          <div className="flex items-center gap-3">
            <Select>
              <SelectTrigger size="sm">
                <SelectValue placeholder="Small" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm1">Small 1</SelectItem>
                <SelectItem value="sm2">Small 2</SelectItem>
                <SelectItem value="sm3">Small 3</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger size="default">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="df1">Default 1</SelectItem>
                <SelectItem value="df2">Default 2</SelectItem>
                <SelectItem value="df3">Default 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">With Label</h2>
        <div className="grid max-w-md gap-2">
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="br">Brasil</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Select your country from the list.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Disabled</h2>
        <div className="max-w-md">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="disabled1">Option 1</SelectItem>
              <SelectItem value="disabled2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
    </div>
  );
}
