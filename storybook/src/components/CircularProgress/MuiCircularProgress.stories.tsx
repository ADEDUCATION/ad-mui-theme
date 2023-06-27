import type { Meta } from "@storybook/react";

import { MuiCircularProgress } from "./MuiCircularProgress";

export default {
  title: "Components/CircularProgress",
  component: MuiCircularProgress,
} as Meta<typeof MuiCircularProgress>;

export const Default = () => <MuiCircularProgress />;
