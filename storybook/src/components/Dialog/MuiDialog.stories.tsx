import type { Meta } from "@storybook/react";

import MuiDialog, { MuiDialogProps } from "./MuiDialog";

export default {
  title: "Components/Dialog",
  component: MuiDialog,
  args: {
    titleContent: "Dialog",
    typeContent: "error",
  },
} as Meta<typeof MuiDialog>;

export const Default = (props: MuiDialogProps) => <MuiDialog {...props} />;
