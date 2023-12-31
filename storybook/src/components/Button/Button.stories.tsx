import type { Meta } from "@storybook/react";

import { MuiButton } from "./MuiButton";

export default {
  title: "Components/Button",
  component: MuiButton,
  args: {
    label: "Design token",
    disabled: false,
    fullWidth: false,
    color: "primary",
    size: "medium",
    // variant: "contained",
    disableElevation: false,
  },
} as Meta<typeof MuiButton>;

export const Default = (props: any) => <MuiButton {...props} />;
