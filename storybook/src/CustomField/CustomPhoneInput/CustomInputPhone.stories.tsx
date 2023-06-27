import type { Meta } from "@storybook/react";

import CustomInputPhone from "./CustomInputPhone";
import { PhoneInputProps } from "react-phone-input-2";

export default {
  title: "CustomField/CustomInputPhone",
  component: CustomInputPhone,
} as Meta<typeof CustomInputPhone>;

export const Default = (props: any) => <CustomInputPhone {...props} />;
