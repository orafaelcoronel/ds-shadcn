import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "DS/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "default", "sm", "lg", "icon"],
    },
    disabled: {
      control: "boolean",
    },
    asChild: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} size="xs">
        XS
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="sm">
        SM
      </Button>
      <Button {...args} size="lg">
        LG
      </Button>
      <Button {...args} size="icon" aria-label="Icon button">
        ⌘
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <span aria-hidden>+</span>
      Create
    </Button>
  ),
};