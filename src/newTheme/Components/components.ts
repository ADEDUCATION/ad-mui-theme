import { OverridesStyleRules } from "@mui/material/styles/overrides";

import dataDisplay from "./dataDisplay";
import globals from "./globals";
import inputs from "./inputs";
import { layout } from "./layout";
import { Gap } from "../Gap/utils";
import { SchoolThemes } from "../types";
import { Shape } from "../Shape/utils";
import { TypographyMerge } from "../Typography/utils";
import { CombinedPalette } from "../Palette/utils";

export type Props = {
  palette: CombinedPalette[SchoolThemes] | undefined;
  typography: TypographyMerge[SchoolThemes] | undefined;
  borderRadius: Shape[SchoolThemes] | undefined;
  gap: Gap[SchoolThemes] | undefined;
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
