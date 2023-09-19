import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";

type Gap = {
  [key in AvailableSchoolTheme]: {
    [gap in keyof (typeof tokens)[key]["gap"]]: number;
  };
};

type GapProperty = keyof Gap[AvailableSchoolTheme];

export type { Gap, GapProperty };
