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
          "& .MuiChip-labelSmall": {
            fontSize: typography?.bodyMedium.fontSize,
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
