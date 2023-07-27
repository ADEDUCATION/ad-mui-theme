import type { Meta } from "@storybook/react";

import Information, { MuiAlertProps } from "./MuiAlert";

export default {
  title: "Components/Information",
  component: Information,
  args: {
    type: "color1",
  },
} as Meta<typeof Information>;

export const Default = ({ part, ...props }: MuiAlertProps) => {
  return (
    <Information
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
