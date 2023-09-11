import { tokens } from "../theme";

type Shape = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["shape"]]: number;
  };
};

type SubObjectKeysShape = keyof Shape;

type SubObjectShape = keyof Shape[SubObjectKeysShape];

export type { Shape, SubObjectKeysShape, SubObjectShape };
