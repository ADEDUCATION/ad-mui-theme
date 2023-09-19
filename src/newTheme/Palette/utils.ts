import { SimplePaletteColorOptions } from "@mui/material";
import { tokens } from "../theme";
import {
  ColorPartial,
  TypeBackground,
} from "@mui/material/styles/createPalette";
import { AvailableSchoolTheme } from "../types";

// Fusion des sous-objets en un seul type
type MuiColors = keyof Palette[AvailableSchoolTheme];

type CustomColors = keyof PaletteCustom[AvailableSchoolTheme];

type TonalColors = keyof PaletteOffset[AvailableSchoolTheme];

type AllColor = MuiColors | CustomColors | TonalColors;

type NewColor = {
  A10?: string;
  A20?: string;
  base?: string;
} & SimplePaletteColorOptions;

type Palette = {
  [key in AvailableSchoolTheme]: {
    [color in keyof (typeof tokens)[key]["palette"]]: NewColor;
  };
};

type PaletteCustom = {
  [key in AvailableSchoolTheme]: {
    [color in keyof (typeof tokens)[key]["customPalette"]]: NewColor;
  };
};

type PaletteOffset = {
  [key in AvailableSchoolTheme]: {
    [color in keyof (typeof tokens)[key]["tonalOffset"]]: ColorPartial;
  };
};

type BackgroundType = {
  surface1?: string;
} & TypeBackground;

type PaletteBackground = {
  [key in AvailableSchoolTheme]: {
    [color in keyof (typeof tokens)[key]["paletteBackground"]]: BackgroundType;
  };
};

type CombinedPalette = {
  [key in AvailableSchoolTheme]: {
    [color in
      | keyof (typeof tokens)[key]["palette"]
      | keyof (typeof tokens)[key]["customPalette"]]: NewColor;
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
  CustomColors,
  MuiColors,
  Palette,
  PaletteCustom,
  PaletteOffset,
  PaletteBackground,
  AllColor,
};
