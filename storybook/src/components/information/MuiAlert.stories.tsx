import type { Meta } from "@storybook/react";

import MuiAlert, { MuiAlertProps } from "./MuiAlert";

export default {
  title: "Components/MuiAlert",
  component: MuiAlert,
} as Meta<typeof MuiAlert>;

export const Default = ({ part, ...props }: MuiAlertProps) => {
  return (
    <MuiAlert
      part={{
        infos: {
          title: "title",
          content: "content",
          link: "link",
        },
      }}
      {...props}
    />
  );
};
