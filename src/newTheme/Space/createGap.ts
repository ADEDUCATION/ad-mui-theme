import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import { Space } from "./utils";

const createNewSpace = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let gap = {} as Space[typeof mode];

    const GapTokens = tokens[mode].space;

    Object.entries(GapTokens).map(([key, value]) => {
      gap = {
        ...gap,
        [key]: value.value,
      };
    });

    return gap;
  }
};

export default createNewSpace;
