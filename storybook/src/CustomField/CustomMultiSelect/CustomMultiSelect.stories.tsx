import type { Meta } from "@storybook/react";

import CustomMultiSelect from "./CustomMultiSelect";
import { SelectProps } from "@mui/material";

export default {
  title: "CustomField/CustomMultiSelect",
  component: CustomMultiSelect,
} as Meta<typeof CustomMultiSelect>;

export const Default = (props: SelectProps) => <CustomMultiSelect {...props} />;
