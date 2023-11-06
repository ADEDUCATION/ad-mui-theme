import { newTheme } from "./newTheme/theme";
import CustomThemeProvider from "./newTheme/Provider";
import type {
  MuiColors,
  AllColor,
  CombinedMuiColors,
  CombinedTonalColors,
  ColorStructure,
  TonalOffsetStructure,
} from "./newTheme/Palette/utils";
import type {
  SchoolThemes,
  VariantComponent,
  AllSizes,
  CompactSizes,
  Sizes,
} from "./newTheme/types";

export { CustomThemeProvider, newTheme };
export type {
  MuiColors,
  AllColor,
  SchoolThemes,
  CombinedMuiColors,
  CombinedTonalColors,
  ColorStructure,
  TonalOffsetStructure,
  VariantComponent,
  AllSizes,
  CompactSizes,
  Sizes,
};
export { AvailableSchoolThemes } from "./newTheme/types";
