import type { Meta, StoryObj } from "@storybook/react";
import LoginCalloutChip from "./LoginCalloutChip";

const setRecentLogin = (value?: string) => {
  if (value) localStorage.setItem("recentLogin", value);
  else localStorage.removeItem("recentLogin");
};

const meta: Meta<typeof LoginCalloutChip> = {
  title: "features/auth/LoginCalloutChip",
  component: LoginCalloutChip,
  parameters: {
    routerPath: "/my",
  },
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

export const WithRecentLogin: Story = {
  parameters: {
    recentLogin: "카카오",
  },
};

export const WithoutRecentLogin: Story = {
  parameters: {
    recentLogin: undefined,
  },
};
