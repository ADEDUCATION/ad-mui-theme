import type { Meta } from "@storybook/react";

import { MuiButton } from "./MuiButton";

export default {
  title: "Components/Button",
  component: MuiButton,
  args: {
    label: "AD Education",
    color: "primary",
    variant: "contained",
    size: "medium",
    disabled: false,
    startIcon: "none",
    endIcon: "none",
  },
  argTypes: {
    disabled: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
    startIcon: {
      table: {
        defaultValue: { summary: "none" },
      },
    },
    endIcon: {
      table: {
        defaultValue: { summary: "none" },
      },
    },
  },
} as Meta<typeof MuiButton>;

export const Default = (props: any) => <MuiButton {...props} />;
