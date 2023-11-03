import { IconButton, IconButtonProps, Paper } from "@mui/material";
import { MuiOmits } from "../../utils";

import { IconCactus, IconAccessPoint } from "@tabler/icons-react";

export interface MuiIconButtonProps extends Omit<IconButtonProps, MuiOmits> {
  icon: "cactus" | "point";
}

export const MuiIconButton = ({ icon, ...rest }: MuiIconButtonProps) => (
  <>
    <Paper
      elevation={0}
      sx={{
        width: "fit-content",
        padding: "30px",
      }}
    >
      <IconButton {...rest}>{getIcon(icon)}</IconButton>
    </Paper>
  </>
);

const getIcon = (endIcon: "cactus" | "point") => {
  switch (endIcon) {
    case "cactus":
      return <IconCactus />;
    case "point":
      return <IconAccessPoint />;
    default:
      return null;
  }
};
