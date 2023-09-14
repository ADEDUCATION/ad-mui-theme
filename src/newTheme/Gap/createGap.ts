import { tokens } from "../theme";
import { Gap, SubObjectGap } from "./utils";

const createNewGap = (mode: keyof typeof tokens) => {
  if (tokens[mode]) {
    let gap = {} as Gap[typeof mode];

    const GapTokens = tokens[mode].gap;

    Object.entries(GapTokens).map(([key, value]) => {
      const borderRadius = key as SubObjectGap;

      gap = {
        ...gap,
        [borderRadius]: Number(value.value),
      };
    });

    return gap;
  }
};

export default createNewGap;
