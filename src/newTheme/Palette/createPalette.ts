import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";
import {
  CombinedPalette,
  MuiColors,
  PaletteBackground,
  CustomColors,
  TonalColors,
} from "./utils";

const createNewPalette = (mode: AvailableSchoolTheme) => {
  if (tokens[mode]) {
    let mainPalette = {} as CombinedPalette[typeof mode];

    const palette = tokens[mode].palette;
    const customPalette = tokens[mode].customPalette;
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

    Object.entries(customPalette).map(([keyColor, color]) => {
      const customColor = keyColor as CustomColors;

      mainPalette = {
        ...mainPalette,
        [customColor]: {},
      };

      Object.entries(color).map(([keyHue, hue]) => {
        mainPalette = {
          ...mainPalette,
          [customColor]: {
            ...mainPalette[customColor],
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
