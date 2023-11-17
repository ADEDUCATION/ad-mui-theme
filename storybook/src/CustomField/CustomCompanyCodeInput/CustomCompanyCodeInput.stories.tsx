import type { Meta } from "@storybook/react";

import CustomCompanyCodeInput from "./CustomCompanyCodeInput";
import { excludedControls } from "../utils";
import { CustomInputProps } from "../type";

export default {
  title: "CustomField/CustomCompanyCodeInput",
  component: CustomCompanyCodeInput,
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
} as Meta<typeof CustomCompanyCodeInput>;

export const Default = (props: CustomInputProps) => (
  <CustomCompanyCodeInput {...props} />
);
