import type { Meta } from "@storybook/react";

import CustomSelectInput from "./CustomSelectInput";

export default {
  title: "CustomField/CustomSelectInput",
  component: CustomSelectInput,
} as Meta<typeof CustomSelectInput>;

export const Default = (props: any) => <CustomSelectInput {...props} />;
