import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";

type Typography = {
  [key in keyof typeof tokens]: {
    [typo in keyof (typeof tokens)[key]["typography"]]: TypographyStyleOptions;
  };
};

type TypographyMerge = {
  [key in keyof typeof tokens]: {
    [typo in keyof (typeof tokens)[key]["typography"]]: TypographyStyleOptions;
  } & {
    fontFamily: string;
  };
};

type FontFamily = {
  [key in keyof typeof tokens]: {
    [typo in keyof (typeof tokens)[key]["fontFamily"]]: string;
  };
};

// type SubObjectKeysTypography = keyof Typography;

type SubObjectTypography = keyof Typography[AvailableSchoolTheme];

export type {
  Typography,
  TypographyMerge,
  FontFamily,
  // SubObjectKeysTypography,
  SubObjectTypography,
};
