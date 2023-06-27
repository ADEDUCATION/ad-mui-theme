import type { Meta } from "@storybook/react";

import MuiSkeleton from "./MuiSkeleton";
import { SkeletonProps } from "@mui/material";

export default {
  title: "Components/Skeleton",
  component: MuiSkeleton,
} as Meta<typeof MuiSkeleton>;

export const Default = (props: SkeletonProps) => <MuiSkeleton {...props} />;
