import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./label";

const meta: Meta<typeof UI.Label> = {
  title: "DS/Label",
  component: UI.Label,
  args: {
    children: "Label",
  },
};

export default meta;

type Story = StoryObj<typeof UI.Label>;

export const Preview: Story = {};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}>
      <UI.Label htmlFor="name">Full Name</UI.Label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: 4,
          fontSize: 14,
        }}
      />
    </div>
  ),
};
