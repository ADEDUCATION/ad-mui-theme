import type { Meta } from "@storybook/react";
import Welcome from "./Welcome";

export default {
  title: "Welcome",
  component: Welcome,
} as Meta<typeof Welcome>;

export const Docs = (props: any) => <Welcome {...props} />;