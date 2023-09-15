import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";

type Gap = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["gap"]]: number;
  };
};

type SubObjectGap = keyof Gap[AvailableSchoolTheme];

export type { Gap, SubObjectGap };
