import type { Meta } from "@storybook/react";

import CustomDurationInput from "./CustomDurationInput";

export default {
  title: "CustomField/CustomDurationInput",
  component: CustomDurationInput,
} as Meta<typeof CustomDurationInput>;

export const Default = (props: any) => <CustomDurationInput {...props} />;
