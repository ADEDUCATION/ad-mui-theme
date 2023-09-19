import { CombinedPalette } from "../Palette/utils";
import { tokens } from "../theme";
import { AvailableSchoolTheme } from "../types";
import { TypographyVariants, TypographyMerge } from "./utils";

export type Props = {
  palette: CombinedPalette[AvailableSchoolTheme] | undefined;
  mode: AvailableSchoolTheme;
};
const createNewTypography = ({ mode, palette }: Props) => {
  if (tokens[mode]) {
    let typography = {} as TypographyMerge[typeof mode];

    const typo = tokens[mode].typography;

    const fontFamily = tokens[mode].fontFamily;

    Object.entries(typo).map(([key, value]) => {
      const variant = key as TypographyVariants;

      typography = {
        ...typography,
        [variant]: {},
        fontFamily: fontFamily.value,
      };

      Object.entries(value.value).map(([key, value]) => {
        typography = {
          ...typography,
          [variant]: {
            ...typography[variant],
            [key]: value,
            color: [
              "subtitleMedium",
              "subtitleRegular",
              "subtitleLight",
              "bodyMedium",
              "bodyRegular",
              "bodyLight",
            ].includes(variant)
              ? palette?.grey[300]
              : palette?.grey[100],
          },
        };
      });
    });

    return typography;
  }
};

export default createNewTypography;
