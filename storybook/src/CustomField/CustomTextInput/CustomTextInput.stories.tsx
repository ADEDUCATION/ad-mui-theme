import type { Meta } from "@storybook/react";

import CustomTextInput from "./CustomTextInput";
// import { TextField, TextFieldProps } from "@mui/material";
import { excludedControls } from "../utils";
import { CustomInputProps } from "../type";

export default {
  title: "CustomField/CustomTextInput",
  component: CustomTextInput,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
  },
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomTextInput>;

export const Default = (props: CustomInputProps) => (
  <CustomTextInput {...props} />
);
