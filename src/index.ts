import { newTheme } from "./newTheme/theme";
import CustomThemeProvider from "./newTheme/Provider";
import type {
  MuiColors,
  CustomColors,
  AllColor,
} from "./newTheme/Palette/utils";
import type { SchoolThemes } from "./newTheme/types";

export { CustomThemeProvider, newTheme };
export type { MuiColors, CustomColors, AllColor, SchoolThemes };
export { AvailableSchoolThemes } from "./newTheme/types";
