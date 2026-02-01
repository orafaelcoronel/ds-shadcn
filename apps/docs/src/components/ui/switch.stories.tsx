import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./switch";

const meta: Meta<typeof UI.Switch> = {
  title: "DS/Switch",
  component: UI.Switch,
};

export default meta;

type Story = StoryObj<typeof UI.Switch>;

export const Preview: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <UI.Switch checked={checked} onCheckedChange={setChecked} />
        <span>Status: {checked ? "On" : "Off"}</span>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <UI.Switch size="sm" />
        <span>Small</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <UI.Switch size="default" />
        <span>Default</span>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <UI.Switch disabled />
        <span style={{ opacity: 0.5 }}>Disabled off</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <UI.Switch disabled checked />
        <span style={{ opacity: 0.5 }}>Disabled on</span>
      </div>
    </div>
  ),
};
