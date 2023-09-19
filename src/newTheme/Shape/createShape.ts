import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import { Shape } from "./utils";

const createNewShape = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let shape = {} as Shape[typeof mode];

    const shapeTokens = tokens[mode].shape;

    Object.entries(shapeTokens).map(([key, value]) => {
      shape = {
        ...shape,
        [key]: value.value,
      };
    });

    return shape;
  }
};

export default createNewShape;
