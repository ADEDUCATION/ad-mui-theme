import type { Meta } from "@storybook/react";

import CustomMultiSelect, {
  CustomMultiselectInputProps,
} from "./CustomMultiSelect";

export default {
  title: "CustomField/CustomMultiSelect",
  component: CustomMultiSelect,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
    disabled: false,
    variant: "filled",
  },
} as Meta<typeof CustomMultiSelect>;

export const Default = (props: CustomMultiselectInputProps) => (
  <CustomMultiSelect {...props} />
);
