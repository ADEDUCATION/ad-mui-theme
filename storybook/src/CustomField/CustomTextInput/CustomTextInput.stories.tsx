import type { Meta } from "@storybook/react";

import CustomTextInput from "./CustomTextInput";
import { TextField, TextFieldProps } from "@mui/material";
import { excludedControls } from "../utils";

export default {
  title: "CustomField/CustomTextInput",
  component: CustomTextInput,
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomTextInput>;

export const Default = (props: any) => <CustomTextInput {...props} />;
