import { tokens } from "../theme";
import { SchoolThemes } from "../types";
import {
  CombinedPalette,
  MuiColors,
  PaletteBackground,
  TonalColors,
} from "./utils";

const createNewPalette = (mode: SchoolThemes) => {
  if (tokens[mode]) {
    let mainPalette = {} as CombinedPalette[typeof mode];

    const palette = tokens[mode].palette;
    const tonalOffset = tokens[mode].tonalOffset;
    const paletteBackground = tokens[mode].paletteBackground;

    Object.entries(palette).map(([keyColor, color]) => {
      const muiColor = keyColor as MuiColors;

      mainPalette = {
        ...mainPalette,
        [muiColor]: {
          main: "",
        },
      };

      Object.entries(color).map(([keyHue, hue]) => {
        mainPalette = {
          ...mainPalette,
          [muiColor]: {
            ...mainPalette[muiColor],
            [keyHue]: hue.value,
          },
        };
      });
    });

    Object.entries(tonalOffset).map(([key, value]) => {
      const tonalColor = key as TonalColors;

      mainPalette = {
        ...mainPalette,
        [tonalColor]: {},
      };

      Object.entries(value).map(([keyHue, hue]) => {
        mainPalette = {
          ...mainPalette,
          [tonalColor]: {
            ...mainPalette[tonalColor],
            [keyHue]: hue.value,
          },
        };
      });
    });

    Object.entries(paletteBackground).map(([key, value]) => {
      const background = key as keyof PaletteBackground[typeof mode];

      mainPalette = {
        ...mainPalette,
        [background]: {
          default: value.default.value,
          paper: value.paper.value,
          surface1: value.surface1.value,
        },
      };
    });

    return mainPalette;
  }
};

export default createNewPalette;
