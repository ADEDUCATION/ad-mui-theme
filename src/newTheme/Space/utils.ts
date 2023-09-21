import { tokens } from "../theme";
import { SchoolThemes } from "../types";

type Space = {
  [key in SchoolThemes]: {
    [gap in keyof (typeof tokens)[key]["space"]]: string;
  };
};

type SpaceProperty = keyof Space[SchoolThemes];

export type { Space, SpaceProperty };
