import { tokens } from "../theme";
import { Shape, SubObjectShape } from "./utils";

const createNewShape = (mode: keyof typeof tokens) => {
  if (tokens[mode]) {
    let shape = {} as Shape[typeof mode];

    const shapeTokens = tokens[mode].shape;

    Object.entries(shapeTokens).map(([key, value]) => {
      const borderRadius = key as SubObjectShape;

      shape = {
        ...shape,
        [borderRadius]: Number(value.value),
      };
    });

    return shape;
  }
};

export default createNewShape;
