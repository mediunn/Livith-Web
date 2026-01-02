import type { Meta, StoryObj } from "@storybook/react";
import LoginCalloutChip from "./LoginCalloutChip";

const setRecentLogin = (value?: string) => {
  if (value) localStorage.setItem("recentLogin", value);
  else localStorage.removeItem("recentLogin");
};

const meta: Meta<typeof LoginCalloutChip> = {
  title: "callout & tooltip/callout_chip",
  component: LoginCalloutChip,
  parameters: {
    routerPath: "/my",
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const recentLogin = context.parameters?.recentLogin as string | undefined;

      setRecentLogin(recentLogin);

      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof LoginCalloutChip>;

export const WithKakaoLogin: Story = {
  parameters: {
    recentLogin: "카카오",
  },
};

export const WithAppleLogin: Story = {
  parameters: {
    recentLogin: "Apple",
  },
};

export const WithoutRecentLogin: Story = {
  parameters: {
    recentLogin: undefined,
  },
};
