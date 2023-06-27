import type { Meta } from "@storybook/react";

import { MuiRadioButton, MuiRadioButtonProps } from "./MuiRadioButton";

export default {
  title: "Components/RadioButton",
  component: MuiRadioButton,
  args: {
    label1: "Radio1",
    label2: "Radio2",
  },
} as Meta<typeof MuiRadioButton>;

export const Default = (props: MuiRadioButtonProps) => (
  <MuiRadioButton {...props} />
);
