import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";
import { Shape } from "./utils";

const createNewShape = (mode: AvailableSchoolTheme) => {
  if (tokens[mode]) {
    let shape = {} as Shape[typeof mode];

    const shapeTokens = tokens[mode].shape;

    Object.entries(shapeTokens).map(([key, value]) => {
      shape = {
        ...shape,
        [key]: Number(value.value),
      };
    });

    return shape;
  }
};

export default createNewShape;
