import type { Meta } from "@storybook/react";

import { MuiLinearProgress } from "./MuiLinearProgress";
import { LinearProgressProps } from "@mui/material";

export default {
  title: "Components/LinearProgress",
  component: MuiLinearProgress,
} as Meta<typeof MuiLinearProgress>;

export const Default = (props: LinearProgressProps) => (
  <MuiLinearProgress {...props} />
);
