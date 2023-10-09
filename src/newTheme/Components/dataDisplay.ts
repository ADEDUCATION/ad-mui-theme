import { Props } from "./components";

const dataDisplay = ({ palette, typography, radius, space }: Props) => ({
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: radius?.chip,
        "& .MuiChip-label": {
          fontWeight: typography?.subtitleMedium.fontWeight,
        },
        "&:focus": {
          boxShadow: "none",
        },
        "&.MuiChip-colorPrimary": {
          color: palette?.primary.main,
          borderColor: palette?.primary.A20,
          backgroundColor: "transparent",
          transition: "0.2s",
          "&:hover": {
            backgroundColor: palette?.primaryBase[900],
            transform: "translateY(-3px)",
          },
          "&.MuiChip-filled": {
            backgroundColor: palette?.primaryBase[900],
            border: "1px solid",
            borderColor: palette?.primary.light,
            color: palette?.primary.main,
          },
        },
        "& .MuiChip-deleteIconColorPrimary": {
          color: palette?.primary.main,
          "&:hover": {
            color: palette?.primary.main,
          },
        },
        "& .MuiChip-labelSmall": {
          fontSize: typography?.bodyMedium.fontSize,
        },
      },
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          "& .MuiAvatar-root": {
            width: "18px",
            height: "18px",
            fontSize: typography?.bodyMedium.fontSize,
            marginLeft: space?.["2xs"],
          },
          "& .MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
            marginLeft: space?.["2xs"],
          },
          "& .tabler-icon": {
            width: "18px",
            height: "18px",
            marginLeft: space?.["2xs"],
          },
          "& .MuiChip-deleteIcon": {
            width: "18px",
            height: "18px",
            marginRight: space?.["2xs"],
            marginLeft: `-${space?.["2xs"]}`,
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "27px",
          "& .MuiChip-label": {
            fontSize: typography?.bodyMedium.fontSize,
            fontWeight: typography?.bodyMedium.fontWeight,
            padding: `0 ${space?.sm}`,
          },
          "& .MuiAvatar-root": {
            width: "21px",
            height: "21px",
            fontSize: typography?.bodyMedium.fontSize,
            marginLeft: space?.["2xs"],
          },
          "& .MuiSvgIcon-root": {
            width: "21px",
            height: "21px",
            marginLeft: space?.["2xs"],
          },
          "& .tabler-icon": {
            width: "21px",
            height: "21px",
            marginLeft: space?.["2xs"],
          },
          "& .MuiChip-deleteIcon": {
            width: "21px",
            height: "21px",
            marginRight: space?.["2xs"],
            marginLeft: `-${space?.["2xs"]}`,
          },
        },
      },
      {
        props: { size: "large" },
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "32px",
          "& .MuiChip-label": {
            fontSize: typography?.subtitleMedium.fontSize,
            fontWeight: typography?.subtitleMedium.fontWeight,
            padding: `0 ${space?.md}`,
          },
        },
      },
    ],
  },
});

export default dataDisplay;
