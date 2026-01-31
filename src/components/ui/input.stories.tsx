import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./input";

const meta: Meta<typeof UI.Input> = {
  title: "DS/Input",
  component: UI.Input,
  args: {
    placeholder: "Type here...",
  },
};

export default meta;

type Story = StoryObj<typeof UI.Input>;

export const Preview: Story = {
  render: (args) => <UI.Input {...args} style={{ width: 320 }} />,
};

export const Disabled: Story = {
  render: () => (
    <UI.Input placeholder="Disabled input" disabled style={{ width: 320 }} />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}>
      <label htmlFor="email" style={{ fontSize: 14, fontWeight: 500 }}>
        Email
      </label>
      <UI.Input id="email" type="email" placeholder="you@example.com" />
      <p style={{ fontSize: 12, opacity: 0.7, margin: 0 }}>
        Enter your email address
      </p>
    </div>
  ),
};
