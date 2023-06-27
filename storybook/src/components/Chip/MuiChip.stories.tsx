import type { Meta } from "@storybook/react";

import { MuiChip, MuiChipProps } from "./MuiChip";
import { ChipProps, Avatar } from "@mui/material";
import { Check, CheckCircle } from "@mui/icons-material";

export default {
  title: "Components/Chip",
  component: MuiChip,
  args: {
    label: "Chip",
    color: "primary",
    disabled: false,
    variant: "filled",
    onDelete: undefined,
  },
} as Meta<typeof MuiChip>;

export const Default = (props: MuiChipProps) => <MuiChip {...props} />;

export const Deletable = (props: MuiChipProps) => <MuiChip {...props} onDelete={() => {}} />;

export const StartIcon = (props: MuiChipProps) => <MuiChip {...props} icon={<CheckCircle />} />;

export const AvatarChip = (props: MuiChipProps) => (
  <MuiChip {...props} avatar={<Avatar>L</Avatar>} />
);
