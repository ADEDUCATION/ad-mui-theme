import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";

type Shape = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["shape"]]: number;
  };
};

// type SubObjectKeysShape = keyof Shape;

type SubObjectShape = keyof Shape[AvailableSchoolTheme];

export type { Shape, SubObjectShape };
