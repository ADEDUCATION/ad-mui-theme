import type { Meta } from "@storybook/react";
import CustomLinkInput from "./CustomLinkInput";

export default {
  title: "CustomField/CustomLinkInput",
  component: CustomLinkInput,
} as Meta<typeof CustomLinkInput>;

export const Default = (props: any) => <CustomLinkInput {...props} />;
