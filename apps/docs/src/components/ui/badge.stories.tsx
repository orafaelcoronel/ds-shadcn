import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./badge";

const meta: Meta<typeof UI.Badge> = {
  title: "DS/Badge",
  component: UI.Badge,
  args: {
    children: "Badge",
  },
};

export default meta;

type Story = StoryObj<typeof UI.Badge>;

export const Preview: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <UI.Badge variant="default">Default</UI.Badge>
      <UI.Badge variant="secondary">Secondary</UI.Badge>
      <UI.Badge variant="destructive">Destructive</UI.Badge>
      <UI.Badge variant="outline">Outline</UI.Badge>
      <UI.Badge variant="ghost">Ghost</UI.Badge>
      <UI.Badge variant="link">Link</UI.Badge>
    </div>
  ),
};
