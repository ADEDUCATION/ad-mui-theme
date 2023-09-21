import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import { Radius } from "./utils";

const createNewRadius = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let radius = {} as Radius[typeof mode];

    const shapeTokens = tokens[mode].radius;

    Object.entries(shapeTokens).map(([key, value]) => {
      radius = {
        ...radius,
        [key]: value.value,
      };
    });

    return radius;
  }
};

export default createNewRadius;
