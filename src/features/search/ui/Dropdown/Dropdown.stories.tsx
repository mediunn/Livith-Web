import { Meta, StoryObj } from "@storybook/react-vite";
import MicIcon from "../../../../shared/assets/MicIcon";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Chip & dropdown & filter/dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["on", "off"],
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const On: Story = {
  args: {
    variant: "on",
    icon: <MicIcon color="black" />,
    label: "전체장르",
  },
};

export const Off: Story = {
  args: {
    variant: "off",
    icon: <MicIcon />,
    label: "전체장르",
  },
};
