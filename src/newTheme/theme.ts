import { PaletteOptions, createTheme } from "@mui/material";
import { frFR as coreFrFR } from "@mui/material/locale";
import { frFR as gridfrFR } from "@mui/x-data-grid";
import { frFR } from "@mui/x-date-pickers";
import { frFR as pickersfrFR } from "@mui/x-date-pickers";

import themeTokens from "../tokens/tokens.json";
import components from "./Components/components";
import createNewPalette from "./Palette/createPalette";
import { CombinedPalette } from "./Palette/utils";
import createNewTypography from "./Typography/createTypography";

export const tokens = {
  esp: themeTokens.themes.esp,
  ade: themeTokens.themes.ade,
};

export interface BorderRadius {
  borderRadius: number;
  buttonRadius: number;
  inputRadius: number;
  smallRadius: number;
  mediumRadius: number;
  largeRadius: number;
}

declare module "@mui/material/styles" {
  interface Theme {
    ade: PaletteOptions;
    esd: PaletteOptions;
    adeDark: PaletteOptions;
    palette: CombinedPalette[keyof typeof tokens];
    shape: BorderRadius;
  }
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
    grey: true;
  }
}

const createNewShape = (mode: keyof typeof tokens) => {
  if (tokens[mode]) {
    const borderRadius = tokens[mode].shape.borderRadius;
    const buttonRadius = tokens[mode].shape.buttonRadius;
    const inputRadius = tokens[mode].shape.inputRadius;
    const smallRadius = tokens[mode].shape.largeRadius;
    const mediumRadius = tokens[mode].shape.mediumRadius;
    const largeRadius = tokens[mode].shape.smallRadius;

    return {
      borderRadius,
      buttonRadius,
      inputRadius,
      smallRadius,
      mediumRadius,
      largeRadius,
    };
  }
};

export const newTheme = (mode: keyof typeof tokens) => {
  const customPalette = createNewPalette(mode);
  const customTypography = createNewTypography({
    mode,
    palette: customPalette,
  });
  const customShape = createNewShape(mode);

  return createTheme(
    {
      palette: {
        ...customPalette,
        action: {
          // active: customPalette?.primary.main,
          // hover: customPalette?.primary.main,
          disabled: customPalette?.grey[600],
          disabledBackground: customPalette?.grey[900],
        },
      },
      typography: customTypography,
      components: components({
        palette: customPalette,
        typography: customTypography,
      }),
      shape: customShape,
    },
    gridfrFR,
    frFR,
    pickersfrFR,
    coreFrFR
  );
};
