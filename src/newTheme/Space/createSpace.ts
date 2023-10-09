import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import { convertPxToRem } from "../utils";
import { Space } from "./utils";

const createNewSpace = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let space = {} as Space[typeof mode];

    const GapTokens = tokens[mode].space;

    Object.entries(GapTokens).map(([key, value]) => {
      space = {
        ...space,
        [key]: convertPxToRem(value.value as string),
      };
    });

    return space;
  }
};

export default createNewSpace;
