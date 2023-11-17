import type { Meta } from "@storybook/react";
import CustomLinkInput from "./CustomLinkInput";
import { CustomInputProps } from "../type";

export default {
  title: "CustomField/CustomLinkInput",
  component: CustomLinkInput,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
    disabled: false,
  },
} as Meta<typeof CustomLinkInput>;

export const Default = (props: CustomInputProps) => (
  <CustomLinkInput {...props} />
);
