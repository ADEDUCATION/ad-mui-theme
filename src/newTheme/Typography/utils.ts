import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";

type Typography = {
  [key in AvailableSchoolTheme]: {
    [typo in keyof (typeof tokens)[key]["typography"]]: TypographyStyleOptions;
  };
};

type TypographyMerge = {
  [key in AvailableSchoolTheme]: {
    [typo in keyof (typeof tokens)[key]["typography"]]: TypographyStyleOptions;
  } & {
    fontFamily: string;
  };
};

type FontFamily = {
  [key in AvailableSchoolTheme]: {
    [typo in keyof (typeof tokens)[key]["fontFamily"]]: string;
  };
};

type TypographyVariants = keyof Typography[AvailableSchoolTheme];

export type { Typography, TypographyMerge, FontFamily, TypographyVariants };
