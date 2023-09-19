import { tokens } from "../theme";
import { SchoolThemes } from "../types";

type Shape = {
  [key in SchoolThemes]: {
    [shape in keyof (typeof tokens)[key]["shape"]]: string;
  };
};

type ShapeProperty = keyof Shape[SchoolThemes];

export type { Shape, ShapeProperty };
