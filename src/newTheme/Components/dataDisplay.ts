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
    variants: [
      {
        props: { size: 'small' },
        style: {
          '& .MuiAvatar-root': {
            width: "18px",
            height: "18px",
            fontSize: typography?.bodyMedium.fontSize,
            marginLeft: "3px",
          },
          "& .MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
            marginLeft: "3px",
          },
          "& .MuiChip-deleteIcon": {
            width: "18px",
            height: "18px",
            marginRight: "3px",
            marginLeft: "-4px",
          },
        }
      },
      {
        props: { size: 'medium' },
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: "27px",
          '& .MuiChip-label': {
            fontSize: typography?.bodyMedium.fontSize,
            fontWeight: typography?.bodyMedium.fontWeight,
            padding: "0 10px",
          },
          '& .MuiAvatar-root': {
            width: "21px",
            height: "21px",
            fontSize: typography?.bodyMedium.fontSize,
            marginLeft: "3px",
          },
          "& .MuiSvgIcon-root": {
            width: "21px",
            height: "21px",
            marginLeft: "3px",
          },
          "& .MuiChip-deleteIcon": {
            width: "21px",
            height: "21px",
            marginRight: "3px",
            marginLeft: "-4px",
          }
        }
      },
      {
        props: { size: 'large' },
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: "32px",
          '& .MuiChip-label': {
            fontSize: typography?.subtitleMedium.fontSize,
            fontWeight: typography?.subtitleMedium.fontWeight,
            padding: "0 12px",
          }
        }
      },
    ],
  },
});

export default dataDisplay;
