import type { Meta } from "@storybook/react";

import MuiSwitch, { MuiSwitchProps } from "./MuiSwitch";

export default {
  title: "Components/Switch",
  component: MuiSwitch,
} as Meta<typeof MuiSwitch>;

export const Default = (props: MuiSwitchProps) => {
  return <MuiSwitch {...props} />;
};
