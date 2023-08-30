import type { Meta } from "@storybook/react";

import { MuiChip, MuiChipProps } from "./MuiChip";
import { Avatar } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export default {
  title: "Components/Chip",
  component: MuiChip,
  args: {
    label: "AD Education",
    color: "primary",
    variant: "filled",
    size: "medium",
    disabled: false,
    clickable: false,
    skipFocusWhenDisabled: false,
    onDelete: undefined,
  },
  parameters: {
    controls: {
<<<<<<< HEAD
      exclude: ["onDelete", "skipFocusWhenDisabled", "icon", "avatar"],
=======
      exclude: ["onDelete", "avatar", "icon"],
>>>>>>> 46ad2a765c1280ccc8ab3ddade8b39a62cf84733
    },
  },
} as Meta<typeof MuiChip>;

export const Default = (props: MuiChipProps) => <MuiChip {...props} />;

export const Deletable = (props: MuiChipProps) => <MuiChip {...props} onDelete={() => {}} />;

export const StartIcon = (props: MuiChipProps) => <MuiChip {...props} icon={<CheckCircle />} />;

export const AvatarChip = (props: MuiChipProps) => (
  <MuiChip {...props} avatar={<Avatar>L</Avatar>} />
);
