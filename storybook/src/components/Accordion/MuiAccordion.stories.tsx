import type { Meta } from "@storybook/react";

import MuiAccordion, { MuiAccordionProps } from "./MuiAccordion";

export default {
  title: "Components/Accordion",
  component: MuiAccordion,
  args: {
    disabled: false,
    expanded: false,
  },
} as Meta<typeof MuiAccordion>;

export const Default = (props: MuiAccordionProps) => (
  <MuiAccordion {...props} />
);
