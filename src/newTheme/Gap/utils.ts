import { tokens } from "../theme";

type Gap = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["gap"]]: number;
  };
};

type SubObjectKeysGap = keyof Gap;

type SubObjectGap = keyof Gap[SubObjectKeysGap];

export type { Gap, SubObjectKeysGap, SubObjectGap };
