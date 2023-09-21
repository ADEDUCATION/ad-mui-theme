import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import { Space } from "./utils";

const createNewSpace = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let space = {} as Space[typeof mode];

    const GapTokens = tokens[mode].space;

    Object.entries(GapTokens).map(([key, value]) => {
      space = {
        ...space,
        [key]: value.value,
      };
    });

    return space;
  }
};

export default createNewSpace;
