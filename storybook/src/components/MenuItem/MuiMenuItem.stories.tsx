import type { Meta } from "@storybook/react";

import MuiMenuItem from "./MuiMenuItem";

export default {
  title: "Components/Menu",
  component: MuiMenuItem,
} as Meta<typeof MuiMenuItem>;

export const Default = (props: any) => <MuiMenuItem {...props} />;
