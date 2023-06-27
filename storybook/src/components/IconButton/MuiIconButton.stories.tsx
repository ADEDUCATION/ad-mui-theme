import { Meta } from "@storybook/react";

import { MuiIconButton, MuiIconButtonProps } from "./MuiIconButton";
import { Add } from "@mui/icons-material";

export default {
  title: "Components/IconButton",
  component: MuiIconButton,
  args: {
    label: <Add />,
  },
} as Meta<typeof MuiIconButton>;

export const Default = (props: MuiIconButtonProps) => (
  <MuiIconButton {...props} />
);
