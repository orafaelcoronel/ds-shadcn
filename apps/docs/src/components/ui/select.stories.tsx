import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./select";

const meta: Meta<typeof UI.Select> = {
  title: "DS/Select",
  component: UI.Select,
};

export default meta;

type Story = StoryObj<typeof UI.Select>;

export const Preview: Story = {
  render: () => (
    <UI.Select>
      <UI.SelectTrigger style={{ width: 200 }}>
        <UI.SelectValue placeholder="Select an option" />
      </UI.SelectTrigger>
      <UI.SelectContent>
        <UI.SelectItem value="option1">Option 1</UI.SelectItem>
        <UI.SelectItem value="option2">Option 2</UI.SelectItem>
        <UI.SelectItem value="option3">Option 3</UI.SelectItem>
      </UI.SelectContent>
    </UI.Select>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <UI.Select>
        <UI.SelectTrigger size="sm">
          <UI.SelectValue placeholder="Small" />
        </UI.SelectTrigger>
        <UI.SelectContent>
          <UI.SelectItem value="sm1">Small 1</UI.SelectItem>
          <UI.SelectItem value="sm2">Small 2</UI.SelectItem>
          <UI.SelectItem value="sm3">Small 3</UI.SelectItem>
        </UI.SelectContent>
      </UI.Select>

      <UI.Select>
        <UI.SelectTrigger size="default">
          <UI.SelectValue placeholder="Default" />
        </UI.SelectTrigger>
        <UI.SelectContent>
          <UI.SelectItem value="df1">Default 1</UI.SelectItem>
          <UI.SelectItem value="df2">Default 2</UI.SelectItem>
          <UI.SelectItem value="df3">Default 3</UI.SelectItem>
        </UI.SelectContent>
      </UI.Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <UI.Select disabled>
      <UI.SelectTrigger style={{ width: 200 }}>
        <UI.SelectValue placeholder="Disabled select" />
      </UI.SelectTrigger>
      <UI.SelectContent>
        <UI.SelectItem value="option1">Option 1</UI.SelectItem>
        <UI.SelectItem value="option2">Option 2</UI.SelectItem>
      </UI.SelectContent>
    </UI.Select>
  ),
};
