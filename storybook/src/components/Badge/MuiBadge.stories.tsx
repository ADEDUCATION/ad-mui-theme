import type { Meta } from "@storybook/react";

import MuiBadge from "./MuiBadge";
import { BadgeProps } from "@mui/material";

export default {
  title: "Components/Badge",
  component: MuiBadge,
} as Meta<typeof MuiBadge>;

export const Default = (props: BadgeProps) => <MuiBadge {...props} />;
