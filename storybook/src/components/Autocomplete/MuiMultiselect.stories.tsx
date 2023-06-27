import type { Meta } from "@storybook/react";

import MuiMultiselect from "./MuiMultiselect";

export default {
  title: "Components/Multiselect",
  component: MuiMultiselect,
} as Meta<typeof MuiMultiselect>;

export const Default = () => <MuiMultiselect />;
