import type { Meta } from "@storybook/react";

import MuiAccordion from "./MuiAccordion";

export default {
  title: "Components/Accordion",
  component: MuiAccordion,
} as Meta<typeof MuiAccordion>;

export const Default = (props: any) => <MuiAccordion {...props} />;
