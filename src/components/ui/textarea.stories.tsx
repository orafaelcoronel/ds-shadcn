import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./textarea";

const meta: Meta<typeof UI.Textarea> = {
  title: "DS/Textarea",
  component: UI.Textarea,
  args: {
    placeholder: "Type your message...",
  },
};

export default meta;

type Story = StoryObj<typeof UI.Textarea>;

export const Preview: Story = {
  render: (args) => <UI.Textarea {...args} style={{ width: 320 }} />,
};

export const Disabled: Story = {
  render: () => (
    <UI.Textarea
      placeholder="Disabled textarea"
      disabled
      style={{ width: 320 }}
      defaultValue="This textarea is disabled."
    />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}>
      <label htmlFor="message" style={{ fontSize: 14, fontWeight: 500 }}>
        Message
      </label>
      <UI.Textarea id="message" placeholder="Enter your message" rows={4} />
      <p style={{ fontSize: 12, opacity: 0.7, margin: 0 }}>
        Your message will be sent to the support team.
      </p>
    </div>
  ),
};
