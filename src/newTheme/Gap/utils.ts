import { tokens } from "../theme";
import { SchoolThemes } from "../types";

type Gap = {
  [key in SchoolThemes]: {
    [gap in keyof (typeof tokens)[key]["gap"]]: number;
  };
};

type GapProperty = keyof Gap[SchoolThemes];

export type { Gap, GapProperty };
