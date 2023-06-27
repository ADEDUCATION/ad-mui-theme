import type { Meta } from "@storybook/react";

import MuiSwitch from "./MuiSwitch";
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase";

export default {
  title: "Components/Switch",
  component: MuiSwitch,
} as Meta<typeof MuiSwitch>;

export const Default = (props: SwitchBaseProps) => {
  return <MuiSwitch {...props} />;
};
