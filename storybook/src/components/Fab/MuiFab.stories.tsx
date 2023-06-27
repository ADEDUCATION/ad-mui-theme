import { Meta } from "@storybook/react";

import MuiFab, { MuiFabProps } from "./MuiFab";
import { Add } from "@mui/icons-material";

export default {
  title: "Components/Fab",
  component: MuiFab,
  args: {
    label: <Add />,
  },
} as Meta<typeof MuiFab>;

export const Default = (props: MuiFabProps) => <MuiFab {...props} />;
