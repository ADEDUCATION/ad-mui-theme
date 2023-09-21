import { OverridesStyleRules } from "@mui/material/styles/overrides";

import dataDisplay from "./dataDisplay";
import globals from "./globals";
import inputs from "./inputs";
import { layout } from "./layout";
import { SchoolThemes } from "../types";
import { Shape } from "../Shape/utils";
import { TypographyMerge } from "../Typography/utils";
import { CombinedPalette } from "../Palette/utils";
import { Space } from "../Space/utils";

export type Props = {
  palette: CombinedPalette[SchoolThemes] | undefined;
  typography: TypographyMerge[SchoolThemes] | undefined;
  borderRadius: Shape[SchoolThemes] | undefined;
  space: Space[SchoolThemes] | undefined;
};

const components = ({
  palette,
  typography,
  borderRadius,
  space,
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
    ...inputs({ palette, typography, borderRadius, space }),
    ...dataDisplay({ palette, typography, borderRadius, space }),
    ...layout({ palette, typography, borderRadius, space }),
    ...globals({ palette, typography, borderRadius, space }),
  };
};

export default components;
