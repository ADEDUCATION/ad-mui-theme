import { ChipProps } from "@mui/material";
import { Props } from "./components";
import { MuiColors } from "../Palette/utils";

const dataDisplay = ({ palette, typography, radius, space }: Props) => ({
  MuiChip: {
    styleOverrides: {
      root: ({ ownerState }: { ownerState: ChipProps }) => {
        return {
          borderRadius: radius?.chip,
          color:
            ownerState.variant === "filled"
              ? palette && palette[ownerState.color as MuiColors].contrastText
              : ownerState.variant === "soft"
              ? palette && palette[ownerState.color as MuiColors].xdark
              : palette && palette[ownerState.color as MuiColors].main,
          backgroundColor:
            ownerState.variant === "filled"
              ? palette && palette[ownerState.color as MuiColors].main
              : ownerState.variant === "soft"
              ? palette && palette[ownerState.color as MuiColors].xlight
              : "transparent",
          "&:hover": {
            backgroundColor:
              ownerState.variant === "filled" && ownerState.avatar
                ? palette && palette[ownerState.color as MuiColors]
                : ownerState.variant === "filled"
                ? palette && palette[ownerState.color as MuiColors].dark
                : ownerState.variant === "soft" && ownerState.avatar
                ? palette && palette[ownerState.color as MuiColors].xlight
                : ownerState.variant === "soft"
                ? palette && palette[ownerState.color as MuiColors].light
                : palette && palette[ownerState.color as MuiColors].xlight,
          },
        };
      },
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          height: "unset",
          padding: `${space?.["3xs"]} ${space?.["2xs"]}`,
          minHeight: space?.xl,
          "& .MuiAvatar-root": {
            width: space?.lg,
            height: space?.lg,
            fontSize: typography?.bodyMedium.fontSize,
            margin: 0,
          },
          "& .MuiChip-icon": {
            width: space?.lg,
            height: space?.lg,
            margin: 0,
          },
          "& .MuiChip-deleteIcon": {
            width: space?.lg,
            height: space?.lg,
            margin: 0,
          },
          "& .MuiChip-labelSmall": {
            fontSize: typography?.bodyMedium.fontSize,
            fontWeight: typography?.bodyMedium.fontWeight,
            lineHeight: typography?.bodyMedium.lineHeight,
            letterSpacing: typography?.bodyMedium.letterSpacing,
            paddingLeft: space?.["3xs"],
            paddingRight: space?.["3xs"],
          },
        },
      },
      {
        props: { size: "medium" },
        style: {
          height: "unset",
          minHeight: space?.["2xl"],
          padding: `${space?.["2xs"]} ${space?.xs}`,
          "& .MuiAvatar-root": {
            width: space?.lg,
            height: space?.lg,
            fontSize: typography?.bodyMedium.fontSize,
            margin: 0,
          },
          "& .MuiChip-icon": {
            width: space?.lg,
            height: space?.lg,
            margin: 0,
          },
          "& .MuiChip-deleteIcon": {
            width: space?.lg,
            height: space?.lg,
            margin: 0,
          },
          "& .MuiChip-labelMedium": {
            fontSize: typography?.bodyMedium.fontSize,
            fontWeight: typography?.bodyMedium.fontWeight,
            lineHeight: typography?.bodyMedium.lineHeight,
            letterSpacing: typography?.bodyMedium.letterSpacing,
            paddingLeft: space?.["2xs"],
            paddingRight: space?.["2xs"],
          },
        },
      },
      {
        props: { size: "large" },
        style: {
          height: "unset",
          minHeight: space?.["3xl"],
          padding: `${space?.["2xs"]} ${space?.xs}`,
          "& .MuiAvatar-root": {
            width: space?.xl,
            height: space?.xl,
            fontSize: typography?.bodyMedium.fontSize,
            margin: 0,
          },
          "& .MuiChip-icon": {
            width: space?.xl,
            height: space?.xl,
            margin: 0,
          },
          "& .MuiChip-deleteIcon": {
            width: space?.xl,
            height: space?.xl,
            margin: 0,
          },
          "& .MuiChip-labelMedium": {
            fontSize: typography?.subtitleMedium.fontSize,
            fontWeight: typography?.subtitleMedium.fontWeight,
            lineHeight: typography?.subtitleMedium.lineHeight,
            letterSpacing: typography?.subtitleMedium.letterSpacing,
            paddingLeft: space?.["2xs"],
            paddingRight: space?.["2xs"],
          },
        },
      },
    ],
  },
  MuiBadge: {
    defaultProps: {
      color: "primary",
    },
    styleOverrides: {
      root: {
        "& .MuiBadge-badge": {
          borderRadius: radius?.badgeLg,
          fontSize: typography?.bodySemiBold.fontSize,
          fontWeight: typography?.bodySemiBold.fontWeight,
          lineHeight: typography?.bodySemiBold.lineHeight,
          padding: space?.["3xs"],
        },
      },
    },
  },
});

export default dataDisplay;
