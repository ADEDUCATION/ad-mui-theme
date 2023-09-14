import type { Meta } from "@storybook/react";
import Welcome from "./Welcome";

export default {
  title: "Welcome/Design System",
  component: Welcome,
  parameters: {
    controls: {
      disable: true,
      exclude: /.*/g,
    },
  },
} as Meta<typeof Welcome>;

export const Docs = (props: any) => <Welcome {...props} />;
