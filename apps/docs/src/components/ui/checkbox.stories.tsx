import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./checkbox";

const meta: Meta<typeof UI.Checkbox> = {
  title: "DS/Checkbox",
  component: UI.Checkbox,
};

export default meta;

type Story = StoryObj<typeof UI.Checkbox>;

export const Preview: Story = {
  render: () => <UI.Checkbox id="preview" />,
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UI.Checkbox
            id="terms"
            checked={checked}
            onCheckedChange={(value) => setChecked(value as boolean)}
          />
          <label htmlFor="terms" style={{ cursor: "pointer" }}>
            Accept terms and conditions
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UI.Checkbox id="marketing" defaultChecked />
          <label htmlFor="marketing" style={{ cursor: "pointer" }}>
            Receive marketing emails
          </label>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <UI.Checkbox id="disabled-unchecked" disabled />
        <label htmlFor="disabled-unchecked" style={{ opacity: 0.5 }}>
          Disabled unchecked
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <UI.Checkbox id="disabled-checked" disabled checked />
        <label htmlFor="disabled-checked" style={{ opacity: 0.5 }}>
          Disabled checked
        </label>
      </div>
    </div>
  ),
};
