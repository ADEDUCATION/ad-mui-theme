import { Meta } from "@storybook/react";

import MuiFab, { MuiFabProps } from "./MuiFab";

export default {
  title: "Components/Fab",
  component: MuiFab,
  args: {
    icon: "point",
    size: "medium",
    variant: "contained",
    color: "primary",
    disabled: false,
  },
} as Meta<typeof MuiFab>;

export const Default = (props: MuiFabProps) => <MuiFab {...props} />;
