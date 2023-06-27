import type { Meta } from "@storybook/react";

import CustomAddress from "./CustomAddress";

export default {
  title: "CustomField/CustomAddressAutocomplete",
  component: CustomAddress,
} as Meta<typeof CustomAddress>;

export const Default = (props: any) => <CustomAddress {...props} />;
