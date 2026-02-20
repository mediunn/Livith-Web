import { Meta, StoryObj } from "@storybook/react-vite";
import Filter from "./Filter";
import SortDownIcon from "../../../../shared/assets/SortDown.svg";

const meta: Meta<typeof Filter> = {
  title: "Chip & dropdown & filter/filter",
  component: Filter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#000000", padding: "50px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    label: "최신순",
    icon: SortDownIcon,
  },
};
