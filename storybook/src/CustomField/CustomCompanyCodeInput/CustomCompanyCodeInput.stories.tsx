import type { Meta } from "@storybook/react";

import CustomCompanyCodeInput from "./CustomCompanyCodeInput";

export default {
  title: "CustomField/CustomCompanyCodeInput",
  component: CustomCompanyCodeInput,
} as Meta<typeof CustomCompanyCodeInput>;

export const Default = (props: any) => <CustomCompanyCodeInput {...props} />;
