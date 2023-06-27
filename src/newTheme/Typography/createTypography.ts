import { CombinedPalette, SubObjectKeys } from '../Palette/utils';
import { tokens } from '../theme';
import { SubObjectTypography, TypographyMerge } from './utils';

export type Props = {
  palette: CombinedPalette[SubObjectKeys] | undefined;
  mode: keyof typeof tokens;
};
const createNewTypography = ({ mode, palette }: Props) => {
  if (tokens[mode]) {
    let typography = {} as TypographyMerge[typeof mode];

    const typo = tokens[mode].typography;

    const fontFamily = tokens[mode].fontFamily;

    Object.entries(typo).map(([key, value]) => {
      const variant = key as SubObjectTypography;

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
            color: ['subtitleMedium', 'subtitleLight', 'bodyMedium', 'bodyLight'].includes(variant)
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
