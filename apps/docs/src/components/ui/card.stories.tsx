import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import * as UI from "./card";

const meta: Meta<typeof UI.Card> = {
  title: "DS/Card",
  component: UI.Card,
};

export default meta;

type Story = StoryObj<typeof UI.Card>;

export const Preview: Story = {
  render: () => (
    <UI.Card style={{ width: 360 }}>
      <UI.CardHeader>
        <UI.CardTitle>Card Title</UI.CardTitle>
        <UI.CardDescription>Card description goes here</UI.CardDescription>
      </UI.CardHeader>
      <UI.CardContent>
        <p>This is the main content of the card.</p>
      </UI.CardContent>
    </UI.Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <UI.Card style={{ width: 360 }}>
      <UI.CardHeader>
        <UI.CardTitle>Complete Card</UI.CardTitle>
        <UI.CardDescription>With header, content and footer</UI.CardDescription>
      </UI.CardHeader>
      <UI.CardContent>
        <p>Card content with all sections displayed.</p>
      </UI.CardContent>
      <UI.CardFooter>
        <button style={{ padding: "6px 12px", borderRadius: 4, border: "1px solid #ccc" }}>
          Action
        </button>
      </UI.CardFooter>
    </UI.Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <UI.Card style={{ width: 360 }}>
      <UI.CardHeader>
        <UI.CardTitle>Card with Action</UI.CardTitle>
        <UI.CardDescription>Action button in header</UI.CardDescription>
        <UI.CardAction>
          <button style={{ padding: "4px 8px", fontSize: 14 }}>Edit</button>
        </UI.CardAction>
      </UI.CardHeader>
      <UI.CardContent>
        <p>The action appears in the top right corner.</p>
      </UI.CardContent>
    </UI.Card>
  ),
};
