import type { Meta } from "@storybook/react";

import MuiBadge, { MuiBadgeProps } from "./MuiBadge";

export default {
  title: "Components/Badge",
  component: MuiBadge,
  args: {
    content: "4",
    variant: "standard",
    vertical: "top",
    horizontal: "right",
    max: 99,
    color: "primary",
  },
} as Meta<typeof MuiBadge>;

export const Default = (props: MuiBadgeProps) => <MuiBadge {...props} />;
