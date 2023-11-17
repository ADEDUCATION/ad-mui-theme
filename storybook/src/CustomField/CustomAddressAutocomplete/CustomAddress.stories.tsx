import type { Meta } from "@storybook/react";

import CustomAddress from "./CustomAddress";
import { excludedControls } from "../utils";

export default {
  title: "CustomField/CustomAddressAutocomplete",
  component: CustomAddress,
  args: {
    requiredValue: true,
    helperTextValue: "HelperText",
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomAddress>;

export const Default = (props: any) => <CustomAddress {...props} />;
