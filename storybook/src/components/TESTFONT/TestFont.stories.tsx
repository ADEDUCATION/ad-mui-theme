import { Meta } from "@storybook/react";

import TestFont from "./TestFont";

export default {
  title: "Components/TestFont",
  component: TestFont,
} as Meta<typeof TestFont>;

export const Default = () => <TestFont />;
