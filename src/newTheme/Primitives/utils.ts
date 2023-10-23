import primitives from "../../tokens/primitives.json";

type Primitives = {
  [key in PrimitivesProperty]: string;
};

type PrimitivesProperty = keyof typeof primitives;

export type { Primitives, PrimitivesProperty };
