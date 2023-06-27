import type { Meta } from "@storybook/react";

import MuiBreadcrumbs from "./MuiBreadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: MuiBreadcrumbs,
} as Meta<typeof MuiBreadcrumbs>;

export const Default = () => <MuiBreadcrumbs />;
