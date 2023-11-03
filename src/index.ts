import { newTheme } from "./newTheme/theme";
import CustomThemeProvider from "./newTheme/Provider";
import type {
  MuiColors,
  AllColor,
  CombinedMuiColors,
  CombinedTonalColors,
  NewColor,
  OmitColorPartial,
} from "./newTheme/Palette/utils";
import type { SchoolThemes } from "./newTheme/types";

export { CustomThemeProvider, newTheme };
export type {
  MuiColors,
  AllColor,
  SchoolThemes,
  CombinedMuiColors,
  CombinedTonalColors,
  NewColor,
  OmitColorPartial,
};
export { AvailableSchoolThemes } from "./newTheme/types";
