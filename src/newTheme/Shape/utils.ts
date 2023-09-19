import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";

type Shape = {
  [key in AvailableSchoolTheme]: {
    [shape in keyof (typeof tokens)[key]["shape"]]: number;
  };
};

type ShapeProperty = keyof Shape[AvailableSchoolTheme];

export type { Shape, ShapeProperty };
