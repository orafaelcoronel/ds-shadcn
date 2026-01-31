import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./tooltip";
import { Button } from "./button";

const meta: Meta<typeof UI.Tooltip> = {
  title: "DS/Tooltip",
  component: UI.Tooltip,
};

export default meta;

type Story = StoryObj<typeof UI.Tooltip>;

export const Preview: Story = {
  render: () => (
    <UI.Tooltip>
      <UI.TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </UI.TooltipTrigger>
      <UI.TooltipContent>
        <p>This is a tooltip</p>
      </UI.TooltipContent>
    </UI.Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
        padding: 48,
      }}
    >
      <UI.Tooltip>
        <UI.TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </UI.TooltipTrigger>
        <UI.TooltipContent side="top">
          <p>Tooltip on top</p>
        </UI.TooltipContent>
      </UI.Tooltip>

      <div style={{ display: "flex", gap: 48 }}>
        <UI.Tooltip>
          <UI.TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </UI.TooltipTrigger>
          <UI.TooltipContent side="left">
            <p>Tooltip on left</p>
          </UI.TooltipContent>
        </UI.Tooltip>

        <UI.Tooltip>
          <UI.TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </UI.TooltipTrigger>
          <UI.TooltipContent side="right">
            <p>Tooltip on right</p>
          </UI.TooltipContent>
        </UI.Tooltip>
      </div>

      <UI.Tooltip>
        <UI.TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </UI.TooltipTrigger>
        <UI.TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </UI.TooltipContent>
      </UI.Tooltip>
    </div>
  ),
};
