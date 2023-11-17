import { Box, useTheme } from "@mui/material";

import { ColorStructure, TonalOffsetStructure } from "ad-mui-theme-package";

import { StyledIconProps } from "./types";

const iconSize = {
  xs: "md",
  sm: "lg",
  md: "xl",
  lg: "2xl",
  xl: "3xl",
} as const;

const StyledIcon = ({ icon, size = "md", color }: StyledIconProps) => {
  const theme = useTheme();
  const [palette, variant] = color.split(".");
  return (
    <Box
      sx={{
        display: "flex",
        "& svg.tabler-icon": {
          width: theme.space[iconSize[size]],
          height: theme.space[iconSize[size]],
          color:
            palette === "grey" || palette === "white"
              ? (theme.palette[palette][variant] as ColorStructure)
              : (theme.palette[palette][variant] as TonalOffsetStructure),
        },
      }}
    >
      {icon}
    </Box>
  );
};

export default StyledIcon;
