import type { Meta } from "@storybook/react";

import MuiSlider from "./MuiSlider";

export default {
  title: "Components/MuiSlider",
  component: MuiSlider,
} as Meta<typeof MuiSlider>;

export const Default = () => <MuiSlider />;
