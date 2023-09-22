import { OverridesStyleRules } from "@mui/material/styles/overrides";

import dataDisplay from "./dataDisplay";
import globals from "./globals";
import inputs from "./inputs";
import { layout } from "./layout";
import { SchoolThemes } from "../types";
import { TypographyMerge } from "../Typography/utils";
import { CombinedPalette } from "../Palette/utils";
import { Space } from "../Space/utils";
import { Radius } from "../Radius/utils";

export type Props = {
  palette: CombinedPalette[SchoolThemes] | undefined;
  typography: TypographyMerge[SchoolThemes] | undefined;
  radius: Radius[SchoolThemes] | undefined;
  space: Space[SchoolThemes] | undefined;
};

const components = ({
  palette,
  typography,
  radius,
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
    ...inputs({ palette, typography, radius, space }),
    ...dataDisplay({ palette, typography, radius, space }),
    ...layout({ palette, typography, radius, space }),
    ...globals({ palette, typography, radius, space }),
  };
};

export default components;
