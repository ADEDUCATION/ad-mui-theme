import type { Meta } from "@storybook/react";

import MuiButtonGroup from "./MuiButtonGroup";
import { ButtonGroupProps } from "@mui/material";

export default {
  title: "Components/ButtonGroup",
  component: MuiButtonGroup,
} as Meta<typeof MuiButtonGroup>;

export const Default = (props: ButtonGroupProps) => (
  <MuiButtonGroup {...props} />
);
