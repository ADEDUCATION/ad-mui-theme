import type { Meta } from "@storybook/react";

import CustomInputPhone, { CustomPhoneProps } from "./CustomInputPhone";

export default {
  title: "CustomField/CustomInputPhone",
  component: CustomInputPhone,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
    disabled: false,
    variant: "outlined",
  },
} as Meta<typeof CustomInputPhone>;

export const Default = (props: CustomPhoneProps) => (
  <CustomInputPhone {...props} />
);
