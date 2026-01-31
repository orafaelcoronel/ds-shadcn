import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./radio-group";

const meta: Meta<typeof UI.RadioGroup> = {
  title: "DS/RadioGroup",
  component: UI.RadioGroup,
};

export default meta;

type Story = StoryObj<typeof UI.RadioGroup>;

export const Preview: Story = {
  render: () => {
    const [value, setValue] = React.useState("option1");

    return (
      <UI.RadioGroup value={value} onValueChange={setValue}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UI.RadioGroupItem value="option1" id="r1" />
          <label htmlFor="r1" style={{ cursor: "pointer" }}>
            Option 1
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UI.RadioGroupItem value="option2" id="r2" />
          <label htmlFor="r2" style={{ cursor: "pointer" }}>
            Option 2
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UI.RadioGroupItem value="option3" id="r3" />
          <label htmlFor="r3" style={{ cursor: "pointer" }}>
            Option 3
          </label>
        </div>
      </UI.RadioGroup>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = React.useState("comfortable");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={{ fontSize: 14, fontWeight: 500 }}>Text size</label>
        <UI.RadioGroup value={value} onValueChange={setValue}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <UI.RadioGroupItem value="compact" id="compact" />
            <label htmlFor="compact" style={{ cursor: "pointer" }}>
              Compact
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <UI.RadioGroupItem value="comfortable" id="comfortable" />
            <label htmlFor="comfortable" style={{ cursor: "pointer" }}>
              Comfortable
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <UI.RadioGroupItem value="spacious" id="spacious" />
            <label htmlFor="spacious" style={{ cursor: "pointer" }}>
              Spacious
            </label>
          </div>
        </UI.RadioGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <UI.RadioGroup defaultValue="option1">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <UI.RadioGroupItem value="option1" id="d1" />
        <label htmlFor="d1" style={{ cursor: "pointer" }}>
          Enabled option
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <UI.RadioGroupItem value="option2" id="d2" disabled />
        <label htmlFor="d2" style={{ opacity: 0.5 }}>
          Disabled option
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <UI.RadioGroupItem value="option3" id="d3" />
        <label htmlFor="d3" style={{ cursor: "pointer" }}>
          Another option
        </label>
      </div>
    </UI.RadioGroup>
  ),
};
