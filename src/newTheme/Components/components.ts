import { OverridesStyleRules } from "@mui/material/styles/overrides";

// import typographyImports from "../Typography/typographyImports";
import dataDisplay from "./dataDisplay";
import globals from "./globals";
import inputs from "./inputs";
import { layout } from "./layout";
import { Gap } from "../Gap/utils";
import { AvailableSchoolTheme } from "../types";
import { Shape } from "../Shape/utils";
import { TypographyMerge } from "../Typography/utils";
import { CombinedPalette } from "../Palette/utils";

export type Props = {
  palette: CombinedPalette[AvailableSchoolTheme] | undefined;
  typography: TypographyMerge[AvailableSchoolTheme] | undefined;
  borderRadius: Shape[AvailableSchoolTheme] | undefined;
  gap: Gap[AvailableSchoolTheme] | undefined;
};

const components = ({
  palette,
  typography,
  borderRadius,
  gap,
}: Props): OverridesStyleRules => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@import":
            'url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap");',
        },
      },
    },
    ...inputs({ palette, typography, borderRadius, gap }),
    ...dataDisplay({ palette, typography, borderRadius, gap }),
    ...layout({ palette, typography, borderRadius, gap }),
    ...globals({ palette, typography, borderRadius, gap }),
  };
};

export default components;
