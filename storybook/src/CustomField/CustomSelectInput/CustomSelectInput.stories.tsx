import type { Meta } from "@storybook/react";

import CustomSelectInput from "./CustomSelectInput";
import { excludedControls } from "../utils";
import { CustomTextInputProps } from "../type";

export default {
  title: "CustomField/CustomSelectInput",
  component: CustomSelectInput,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
  },
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomSelectInput>;

export const Default = (props: CustomTextInputProps) => (
  <CustomSelectInput {...props} />
);
