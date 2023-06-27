import type { Meta } from "@storybook/react";

import MuiDatePicker from "./MuiDatePicker";

export default {
  title: "components/DatePicker",
  component: MuiDatePicker,
} as Meta<typeof MuiDatePicker>;

export const Default = () => <MuiDatePicker />;
