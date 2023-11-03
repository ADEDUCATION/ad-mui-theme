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
import { SchoolThemes } from "./types";
import { Space } from "./Space/utils";
import { Radius } from "./Radius/utils";
import createNewRadius from "./Radius/createRadius";
import createNewSpace from "./Space/createSpace";
import createPrimitives from "./Primitives/createPrimitives";
import { Primitives } from "./Primitives/utils";
import { MuiColors } from "./Palette/utils";

export const tokens = {
  esp: themeTokens.themes.esp,
  ade: themeTokens.themes.ade,
  esd: themeTokens.themes.esd,
};

declare module "@mui/material/styles" {
  interface Theme {
    palette: CombinedPalette[SchoolThemes];
    space: Space[SchoolThemes];
    radius: Radius[SchoolThemes];
    primitives: Primitives;
  }
}

interface CustomThemeOptions extends ThemeOptions {
  space: Space[SchoolThemes];
  radius: Radius[SchoolThemes];
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    color1: true;
    color3: true;
  }
  interface ButtonPropsVariantOverrides {
    soft: true;
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
    h6SemiBold: true;
    h6Medium: true;
    h6Regular: true;
    h6Light: true;
    h5SemiBold: true;
    h5Medium: true;
    h5Regular: true;
    h5Light: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    neutralDark: true;
    neutralLight: true;
    color1: true;
    color2: true;
    color3: true;
    color4: true;
    color5: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    primary: false;
    secondary: false;
    error: false;
    warning: false;
    success: false;
    info: false;
    inherit: false;
    default: false;
    "primary-contained": true;
    "primary-soft": true;
    "primary-outlined": true;
    "primary-ghost": true;
    "secondary-contained": true;
    "secondary-soft": true;
    "secondary-outlined": true;
    "secondary-ghost": true;
    "error-contained": true;
    "error-soft": true;
    "error-outlined": true;
    "error-ghost": true;
    "warning-contained": true;
    "warning-soft": true;
    "warning-outlined": true;
    "warning-ghost": true;
    "success-contained": true;
    "success-soft": true;
    "success-outlined": true;
    "success-ghost": true;
    "info-contained": true;
    "info-soft": true;
    "info-outlined": true;
    "info-ghost": true;
    "neutralLight-contained": true;
    "neutralLight-soft": true;
    "neutralLight-outlined": true;
    "neutralLight-ghost": true;
    "neutralDark-contained": true;
    "neutralDark-soft": true;
    "neutralDark-outlined": true;
    "neutralDark-ghost": true;
  }
  interface IconButtonPropsSizeOverrides {
    large: true;
    xlarge: true;
    xsmall: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    neutralDark: true;
    neutralLight: true;
    color1: true;
    color2: true;
    color3: true;
    color4: true;
    color5: true;
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
  const customRadius = createNewRadius(mode);
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
        radius: customRadius,
        space: customSpace,
      }),
      space: customSpace,
      radius: customRadius,
      primitives: createPrimitives(),
    } as CustomThemeOptions,
    gridfrFR,
    frFR,
    pickersfrFR,
    coreFrFR
  );
};
