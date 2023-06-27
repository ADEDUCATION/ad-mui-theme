import type { Meta } from "@storybook/react";

import CustomTextInput from "./CustomTextInput";
import { TextField, TextFieldProps } from "@mui/material";

export default {
  title: "CustomField/CustomTextInput",
  component: CustomTextInput,
} as Meta<typeof CustomTextInput>;

export const Default = (props: any) => <CustomTextInput {...props} />;
