import type { Meta } from "@storybook/react";

import CustomDurationInput from "./CustomDurationInput";
import { CustomInputProps } from "../type";
import { excludedControls } from "../utils";

export default {
  title: "CustomField/CustomDurationInput",
  component: CustomDurationInput,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomDurationInput>;

export const Default = (props: CustomInputProps) => (
  <CustomDurationInput {...props} />
);
