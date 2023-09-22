import { tokens } from "../theme";
import { SchoolThemes } from "../types";

type Radius = {
  [key in SchoolThemes]: {
    [radius in keyof (typeof tokens)[key]["radius"]]: string;
  };
};

type RadiusProperty = keyof Radius[SchoolThemes];

export type { Radius, RadiusProperty };
