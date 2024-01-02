import type { Meta } from "@storybook/react";

import CustomNumberInput from "./CustomNumberInput";
import { CustomInputProps } from "../type";
import { excludedControls } from "../utils";

export default {
  title: "CustomField/CustomNumberInput",
  component: CustomNumberInput,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
    disabled: false,
    variant: "outlined",
  },
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomNumberInput>;

export const Default = (props: CustomInputProps) => (
  <CustomNumberInput {...props} />
);
