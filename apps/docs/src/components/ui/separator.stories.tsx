import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./separator";

const meta: Meta<typeof UI.Separator> = {
  title: "DS/Separator",
  component: UI.Separator,
};

export default meta;

type Story = StoryObj<typeof UI.Separator>;

export const Preview: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <div style={{ padding: "8px 0" }}>Content above</div>
      <UI.Separator />
      <div style={{ padding: "8px 0" }}>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 60 }}>
      <div style={{ padding: "0 16px" }}>Left</div>
      <UI.Separator orientation="vertical" />
      <div style={{ padding: "0 16px" }}>Middle</div>
      <UI.Separator orientation="vertical" />
      <div style={{ padding: "0 16px" }}>Right</div>
    </div>
  ),
};
