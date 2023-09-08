import { OverridesStyleRules } from "@mui/material/styles/overrides";

import { CombinedPalette, SubObjectKeys } from "../Palette/utils";
// import typographyImports from "../Typography/typographyImports";
import { SubObjectKeysTypography, TypographyMerge } from "../Typography/utils";
import dataDisplay from "./dataDisplay";
import globals from "./globals";
import inputs from "./inputs";
import { layout } from "./layout";

export type Props = {
  palette: CombinedPalette[SubObjectKeys] | undefined;
  typography: TypographyMerge[SubObjectKeysTypography] | undefined;
};

const components = ({ palette, typography }: Props): OverridesStyleRules => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@import":
            'url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap");',
        },
      },
    },
    ...inputs({ palette, typography }),
    ...dataDisplay({ palette, typography }),
    ...layout({ palette, typography }),
    ...globals({ palette, typography }),
  };
};

export default components;
