import type { Meta } from "@storybook/react";

import CustomRadioInput from "./CustomRadioInput";

export default {
  title: "CustomField/CustomRadioInput",
  component: CustomRadioInput,
} as Meta<typeof CustomRadioInput>;

export const Default = (props: any) => <CustomRadioInput {...props} />;
