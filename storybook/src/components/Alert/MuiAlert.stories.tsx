import { Meta } from "@storybook/react";

import { MuiAlertProps, AlertMui } from "./MuiAlert";

export default {
  title: "Components/Alert",
  component: AlertMui,
  args: {
    title: "This is an error alert — check it out!",
    content: "This is an error alert — check it out!",
  },
} as Meta<typeof AlertMui>;

export const Default = (props: MuiAlertProps) => <AlertMui {...props} />;
