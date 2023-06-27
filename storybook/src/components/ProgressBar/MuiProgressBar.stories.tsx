import type { Meta } from "@storybook/react";

import ProgressBar from "./MuiProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

export const Default = () => <ProgressBar />;
