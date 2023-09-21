import { ThemeOptions, createTheme } from "@mui/material";
import { frFR as coreFrFR } from "@mui/material/locale";
import { frFR as gridfrFR } from "@mui/x-data-grid";
import { frFR } from "@mui/x-date-pickers";
import { frFR as pickersfrFR } from "@mui/x-date-pickers";

import themeTokens from "../tokens/tokens.json";
import components from "./Components/components";
import createNewPalette from "./Palette/createPalette";
import { CombinedPalette } from "./Palette/utils";
import createNewTypography from "./Typography/createTypography";
import createNewShape from "./Shape/createShape";
import { Shape } from "./Shape/utils";
import { SchoolThemes } from "./types";
import { Space } from "./Space/utils";
import createNewSpace from "./Space/createGap";

export const tokens = {
  esp: themeTokens.themes.esp,
  ade: themeTokens.themes.ade,
  esd: themeTokens.themes.esd,
};

declare module "@mui/material/styles" {
  interface Theme {
    palette: CombinedPalette[SchoolThemes];
    space: Space[SchoolThemes];
    borderRadius: Shape[SchoolThemes];
  }
}

interface CustomThemeOptions extends ThemeOptions {
  space: Space[SchoolThemes];
  borderRadius: Shape[SchoolThemes];
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    color1: true;
    color3: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitleBold: true;
    subtitleSemiBold: true;
    subtitleMedium: true;
    subtitleRegular: true;
    subtitleLight: true;
    bodyBold: true;
    bodySemiBold: true;
    bodyMedium: true;
    bodyRegular: true;
    bodyLight: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    color1: true;
    color2: true;
    color3: true;
    color4: true;
    color5: true;
    color6: true;
    color7: true;
    color8: true;
    color9: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    color1: true;
    color2: true;
    color3: true;
    color4: true;
    color5: true;
    color6: true;
    color7: true;
    color8: true;
    color9: true;
    actionable: true;
    outlined: true;
    delete: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    error: true;
    warning: true;
    info: true;
    primary: true;
    secondary: true;
  }
}

export const newTheme = (mode: SchoolThemes) => {
  const customPalette = createNewPalette(mode);
  const customTypography = createNewTypography({
    mode,
    palette: customPalette,
  });
  const customShape = createNewShape(mode);
  const customSpace = createNewSpace(mode);

  return createTheme(
    {
      palette: {
        ...customPalette,
        action: {
          disabled: customPalette?.grey[600],
          disabledBackground: customPalette?.grey[900],
        },
      },
      typography: customTypography,
      components: components({
        palette: customPalette,
        typography: customTypography,
        borderRadius: customShape,
        space: customSpace,
      }),
      space: customSpace,
      borderRadius: customShape,
    } as CustomThemeOptions,
    gridfrFR,
    frFR,
    pickersfrFR,
    coreFrFR
  );
};
