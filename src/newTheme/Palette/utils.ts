import { SimplePaletteColorOptions } from "@mui/material";
import { tokens } from "../theme";
import {
  ColorPartial,
  TypeBackground,
} from "@mui/material/styles/createPalette";
import { SchoolThemes } from "../types";

// Fusion des sous-objets en un seul type
type MuiColors = keyof Palette[SchoolThemes];

// type CustomColors = keyof PaletteCustom[SchoolThemes];

type TonalColors = keyof PaletteOffset[SchoolThemes];

type AllColor = MuiColors | TonalColors;

type NewColor = {
  A10?: string;
  A20?: string;
  base?: string;
  xlight?: string;
  xdark?: string;
} & SimplePaletteColorOptions;

type Palette = {
  [key in SchoolThemes]: {
    [color in keyof (typeof tokens)[key]["palette"]]: NewColor;
  };
};

// type PaletteCustom = {
//   [key in SchoolThemes]: {
//     [color in keyof (typeof tokens)[key]["customPalette"]]: NewColor;
//   };
// };

type PaletteOffset = {
  [key in SchoolThemes]: {
    [color in keyof (typeof tokens)[key]["tonalOffset"]]: ColorPartial;
  };
};

type BackgroundType = {
  surface1?: string;
} & TypeBackground;

type PaletteBackground = {
  [key in SchoolThemes]: {
    [color in keyof (typeof tokens)[key]["paletteBackground"]]: BackgroundType;
  };
};

type CombinedPalette = {
  [key in SchoolThemes]: {
    [color in keyof (typeof tokens)[key]["palette"]]: NewColor;
  } & {
    [color in keyof (typeof tokens)[key]["tonalOffset"]]: ColorPartial;
  } & {
    [color in keyof (typeof tokens)[key]["paletteBackground"]]: BackgroundType;
  } & {
    action: {
      active?: string;
      hover?: string;
      selected?: string;
      disabled?: string;
    };
  };
};

export type {
  CombinedPalette,
  TonalColors,
  // CustomColors,
  MuiColors,
  Palette,
  // PaletteCustom,
  PaletteOffset,
  PaletteBackground,
  AllColor,
};
