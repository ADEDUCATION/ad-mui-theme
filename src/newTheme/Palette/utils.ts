import { SimplePaletteColorOptions } from "@mui/material";
import { tokens } from "../theme";
import {
  ColorPartial,
  TypeBackground,
} from "@mui/material/styles/createPalette";
import { SchoolThemes } from "../types";

// Fusion des sous-objets en un seul type
type MuiColors = keyof Palette[SchoolThemes];

type TonalColors = keyof PaletteOffset[SchoolThemes];

type AllColor = MuiColors | TonalColors;

type ColorStructure = {
  A05?: string;
  A10?: string;
  A20?: string;
  xlight?: string;
  xdark?: string;
} & SimplePaletteColorOptions;

type TonalOffsetStructure = Omit<
  ColorPartial,
  50 | "A700" | "A600" | "A500" | "A400" | "A300" | "A200" | "A100"
>;

type CombinedMuiColors = `${MuiColors}.${keyof ColorStructure}`;

type CombinedTonalColors = `${TonalColors}.${keyof TonalOffsetStructure}`;

type Palette = {
  [key in SchoolThemes]: {
    [color in keyof (typeof tokens)[key]["palette"]]: ColorStructure;
  };
};

type PaletteOffset = {
  [key in SchoolThemes]: {
    [color in keyof (typeof tokens)[key]["tonalOffset"]]: TonalOffsetStructure;
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
    [color in keyof (typeof tokens)[key]["palette"]]: ColorStructure;
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
  MuiColors,
  Palette,
  PaletteOffset,
  PaletteBackground,
  AllColor,
  CombinedMuiColors,
  CombinedTonalColors,
  ColorStructure,
  TonalOffsetStructure,
};
