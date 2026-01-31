import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./avatar";

const meta: Meta<typeof UI.Avatar> = {
  title: "DS/Avatar",
  component: UI.Avatar,
};

export default meta;

type Story = StoryObj<typeof UI.Avatar>;

export const Preview: Story = {
  render: () => (
    <UI.Avatar>
      <UI.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <UI.AvatarFallback>SC</UI.AvatarFallback>
    </UI.Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <UI.Avatar size="sm">
        <UI.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <UI.AvatarFallback>SM</UI.AvatarFallback>
      </UI.Avatar>
      <UI.Avatar size="default">
        <UI.AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <UI.AvatarFallback>DF</UI.AvatarFallback>
      </UI.Avatar>
      <UI.Avatar size="lg">
        <UI.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <UI.AvatarFallback>LG</UI.AvatarFallback>
      </UI.Avatar>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <UI.Avatar>
        <UI.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <UI.AvatarFallback>SC</UI.AvatarFallback>
        <UI.AvatarBadge />
      </UI.Avatar>
      <UI.Avatar size="lg">
        <UI.AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <UI.AvatarFallback>VC</UI.AvatarFallback>
        <UI.AvatarBadge />
      </UI.Avatar>
    </div>
  ),
};
