import { SimplePaletteColorOptions } from "@mui/material";
import { tokens } from "../theme";
import { ColorPartial, TypeBackground } from '@mui/material/styles/createPalette';


type SubObjectKeys = keyof Palette;

// Fusion des sous-objets en un seul type
type MergeSubObjects = keyof Palette[SubObjectKeys];

type SubObjectsCustomPalette = keyof PaletteCustom[SubObjectKeys];

type SubObjectsTonalOffset = keyof PaletteOffset[SubObjectKeys];

type AllColor = MergeSubObjects | SubObjectsCustomPalette | SubObjectsTonalOffset;

type NewColor = {
  A10?: string;
  A20?: string;
} & SimplePaletteColorOptions;

type Palette = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["palette"]]: NewColor;
  };
};

type PaletteCustom = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["customPalette"]]: NewColor;
  };
};

type PaletteOffset = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["tonalOffset"]]: ColorPartial;
  };
};

type BackgroundType = {
  surface1?: string;
} & TypeBackground;

type PaletteBackground = {
  [key in keyof typeof tokens]: {
    [color in keyof (typeof tokens)[key]["paletteBackground"]]: BackgroundType;
  };
};

type CombinedPalette = {
  [key in keyof typeof tokens]: {
    [color in
      | keyof (typeof tokens)[key]["palette"]
      | keyof (typeof tokens)[key]["customPalette"]]: NewColor;
  } & {
    [color in keyof (typeof tokens)[key]["tonalOffset"]]: ColorPartial;
  } & {
    [color in keyof (typeof tokens)[key]["paletteBackground"]]: BackgroundType;
  }
  & {
    action: {
      active?: string;
      hover?: string;
      selected?: string;
      disabled?: string;
    };
  }
  ;
};

export type {
  CombinedPalette,
  SubObjectKeys,
  SubObjectsTonalOffset,
  SubObjectsCustomPalette,
  MergeSubObjects,
  Palette,
  PaletteCustom,
  PaletteOffset,
  PaletteBackground,
  AllColor,
};
