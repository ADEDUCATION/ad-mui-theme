import { Meta } from "@storybook/react";

import AlertMui, { MuiAlertProps } from "./MuiAlert";

export default {
  title: "Components/Alert",
  component: AlertMui,
  args: {
    type: "error",
  },
} as Meta<typeof AlertMui>;

export const Default = (props: MuiAlertProps) => <AlertMui {...props} />;
