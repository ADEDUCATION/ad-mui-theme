import type { Meta } from "@storybook/react";

import Completion from "./Completion";

export default {
  title: "Components/Completion",
  component: Completion,
} as Meta<typeof Completion>;

export const Default = () => {
  return (
    <div>
      <Completion value={10} />
    </div>
  );
};

export const Zero = () => <Completion value={0} />;

export const Incomplete = () => <Completion value={16} />;
