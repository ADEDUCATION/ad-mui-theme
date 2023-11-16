import type { Meta } from "@storybook/react";

import CustomBooleanInput from "./CustomBooleanInput";
import { fields } from "../utils";

export default {
  title: "CustomField/CustomBooleanInput",
  component: CustomBooleanInput,
  args: {
    size: "medium",
    color: "primary",
    disabled: false,
  },
} as Meta<typeof CustomBooleanInput>;

export const Default = (props: any) => (
  <CustomBooleanInput field={fields[4]} {...props} />
);
