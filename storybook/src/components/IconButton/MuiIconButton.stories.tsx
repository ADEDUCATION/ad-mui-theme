import { Meta } from "@storybook/react";

import { MuiIconButton, MuiIconButtonProps } from "./MuiIconButton";
import { Add } from "@mui/icons-material";

export default {
  title: "Components/IconButton",
  component: MuiIconButton,
  args: {
    icon: "cactus",
    color: "primary-contained",
    size: "medium",
    disabled: false,
  },
} as Meta<typeof MuiIconButton>;

export const Default = (props: MuiIconButtonProps) => (
  <MuiIconButton {...props} />
);
