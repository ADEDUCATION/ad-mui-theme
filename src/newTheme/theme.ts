import { PaletteOptions, createTheme } from '@mui/material';
import { frFR as coreFrFR } from '@mui/material/locale';
import { frFR as gridfrFR } from '@mui/x-data-grid';
import { frFR } from '@mui/x-date-pickers';
import { frFR as pickersfrFR } from '@mui/x-date-pickers';

import themeTokens from '../tokens/tokens.json';
import components from './Components/components';
import createNewPalette from './Palette/createPalette';
import { CombinedPalette } from './Palette/utils';
import createNewTypography from './Typography/createTypography';

export const tokens = {
  esp: themeTokens.themes.esp,
  ade: themeTokens.themes.ade,
};

declare module '@mui/material/styles' {
  interface Theme {
    ade: PaletteOptions;
    esd: PaletteOptions;
    adeDark: PaletteOptions;
    palette: CombinedPalette[keyof typeof tokens];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    color1: true;
    color3: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitleBold: true;
    subtitleMedium: true;
    subtitleLight: true;
    bodyBold: true;
    bodyMedium: true;
    bodyLight: true;
  }
}

declare module '@mui/material/Chip' {
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
}

declare module '@mui/material/IconButton' {
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

export const newTheme = (mode: keyof typeof tokens) => {
  const customPalette = createNewPalette(mode);
  const customTypography = createNewTypography({ mode, palette: customPalette });

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
    },
    gridfrFR,
    frFR,
    pickersfrFR,
    coreFrFR,
  );
};
