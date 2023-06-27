import type { Meta } from "@storybook/react";

import MuiTabs from "./MuiTabs";

export default {
  title: "Components/MuiTabs",
  component: MuiTabs,
} as Meta<typeof MuiTabs>;

export const Default = ({ ...props }: any) => <MuiTabs {...props} />;
