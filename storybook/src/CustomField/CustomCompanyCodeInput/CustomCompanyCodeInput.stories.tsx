import type { Meta } from "@storybook/react";

import CustomCompanyCodeInput from "./CustomCompanyCodeInput";
import { excludedControls } from "../utils";
import { PatternFormatProps } from "react-number-format";

export default {
  title: "CustomField/CustomCompanyCodeInput",
  component: CustomCompanyCodeInput,
  parameters: {
    controls: {
      exclude: excludedControls,
    },
  },
} as Meta<typeof CustomCompanyCodeInput>;

export const Default = (props: PatternFormatProps) => (
  <CustomCompanyCodeInput {...props} />
);
