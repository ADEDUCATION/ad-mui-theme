import { ChipProps } from '@mui/material';

import { MergeSubObjects } from '../Palette/utils';
import { Props } from './components';

const dataDisplay = ({ palette, typography }: Props) => ({
  MuiChip: {
    styleOverrides: {
      root: {
        '& .MuiChip-label': {
          fontWeight: typography?.subtitleMedium.fontWeight,
        },
        '&:focus': {
          boxShadow: 'none',
        },
        '&.MuiChip-colorPrimary': {
          color: palette?.primary.main,
          borderColor: palette?.primary.A20,
          backgroundColor: 'transparent',
          transition: '0.2s',
          '&:hover': {
            backgroundColor: palette?.primaryBase[900],
            transform: 'translateY(-3px)',
          },
          '&.MuiChip-filled': {
            backgroundColor: palette?.primaryBase[900],
            border: '1px solid',
            borderColor: palette?.primary.light,
            color: palette?.primary.main,
          },
        },
        '& .MuiChip-deleteIconColorPrimary': {
          color: palette?.primary.main,
          '&:hover': {
            color: palette?.primary.main,
          },
        },
        '& .MuiChip-labelSmall': {
          fontSize: typography?.bodyMedium.fontSize,
        },
      },
    },
  },
});

export default dataDisplay;
