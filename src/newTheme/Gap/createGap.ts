import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import { Gap } from "./utils";

const createNewGap = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let gap = {} as Gap[typeof mode];

    const GapTokens = tokens[mode].gap;

    Object.entries(GapTokens).map(([key, value]) => {
      gap = {
        ...gap,
        [key]: Number(value.value),
      };
    });

    return gap;
  }
};

export default createNewGap;
