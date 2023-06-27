import type { Meta } from "@storybook/react";

import MuiTooltip, { MuiTooltipProps } from "./MuiTooltip";

export default {
  title: "Components/Tooltip",
  component: MuiTooltip,
  args: {
    title: "Tooltip",
  },
} as Meta<typeof MuiTooltip>;

export const Default = (props: MuiTooltipProps) => <MuiTooltip {...props} />;
