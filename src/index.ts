import { newTheme } from "./newTheme/theme";
import CustomThemeProvider from "./newTheme/Provider";
import type {
  MuiColors,
  AllColor,
  CombinedMuiColors,
  CombinedTonalColors,
} from "./newTheme/Palette/utils";
import type { SchoolThemes } from "./newTheme/types";

export { CustomThemeProvider, newTheme };
export type {
  MuiColors,
  AllColor,
  SchoolThemes,
  CombinedMuiColors,
  CombinedTonalColors,
};
export { AvailableSchoolThemes } from "./newTheme/types";
