import { OverridesStyleRules } from "@mui/material/styles/overrides";

import { CombinedPalette, SubObjectKeys } from "../Palette/utils";
// import typographyImports from "../Typography/typographyImports";
import { SubObjectKeysTypography, TypographyMerge } from "../Typography/utils";
import dataDisplay from "./dataDisplay";
import globals from "./globals";
import inputs from "./inputs";
import { layout } from "./layout";
import { Shape, SubObjectKeysShape } from "../Shape/utils";
import { Gap, SubObjectKeysGap } from "../Gap/utils";

export type Props = {
  palette: CombinedPalette[SubObjectKeys] | undefined;
  typography: TypographyMerge[SubObjectKeysTypography] | undefined;
  borderRadius: Shape[SubObjectKeysShape] | undefined;
  gap: Gap[SubObjectKeysGap] | undefined;
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
