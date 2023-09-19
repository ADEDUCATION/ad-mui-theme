import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

import { tokens } from "../theme";
import { SchoolThemes } from "../types";

type Typography = {
  [key in SchoolThemes]: {
    [typo in keyof (typeof tokens)[key]["typography"]]: TypographyStyleOptions;
  };
};

type TypographyMerge = {
  [key in SchoolThemes]: {
    [typo in keyof (typeof tokens)[key]["typography"]]: TypographyStyleOptions;
  } & {
    fontFamily: string;
  };
};

type FontFamily = {
  [key in SchoolThemes]: {
    [typo in keyof (typeof tokens)[key]["fontFamily"]]: string;
  };
};

type TypographyVariants = keyof Typography[SchoolThemes];

export type { Typography, TypographyMerge, FontFamily, TypographyVariants };
