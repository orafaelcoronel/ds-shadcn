"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function TooltipPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Tooltip</h1>
        <p className="text-sm text-muted-foreground">
          Dicas contextuais que aparecem ao passar o mouse.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Default</h2>
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">On Button Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default">Default</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Default button tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Secondary</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Secondary button tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Outline</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Outline button tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Different Positions</h2>
        <div className="flex flex-col items-center gap-8 py-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top (default)</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>

          <div className="flex items-center gap-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">On Text</h2>
        <div className="max-w-md">
          <p className="text-sm">
            You can add tooltips to{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="underline decoration-dotted cursor-help">
                  any element
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Including inline text!</p>
              </TooltipContent>
            </Tooltip>{" "}
            in your content for additional context.
          </p>
        </div>
      </section>
    </div>
  );
}
