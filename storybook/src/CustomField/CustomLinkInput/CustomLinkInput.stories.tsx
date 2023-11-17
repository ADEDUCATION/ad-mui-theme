import type { Meta } from "@storybook/react";
import CustomLinkInput from "./CustomLinkInput";
import { CustomInputProps } from "../type";
import { excludedControls } from "../utils";

export default {
  title: "CustomField/CustomLinkInput",
  component: CustomLinkInput,
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
} as Meta<typeof CustomLinkInput>;

export const Default = (props: CustomInputProps) => (
  <CustomLinkInput {...props} />
);
