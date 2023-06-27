import type { Meta } from "@storybook/react";

import CustomNumberInput from "./CustomNumberInput";

export default {
  title: "CustomField/CustomNumberInput",
  component: CustomNumberInput,
} as Meta<typeof CustomNumberInput>;

export const Default = (props: any) => <CustomNumberInput {...props} />;
