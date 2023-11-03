import { Fab, FabProps } from "@mui/material";
import { MuiOmits } from "../../utils";

import { IconCactus, IconAccessPoint } from "@tabler/icons-react";

export interface MuiFabProps extends Omit<FabProps, MuiOmits> {
  icon: "cactus" | "point";
}

const MuiFab = ({ icon, ...rest }: MuiFabProps) => {
  return <Fab {...rest}>{getIcon(icon)}</Fab>;
};

export default MuiFab;

const getIcon = (endIcon: "cactus" | "point") => {
  switch (endIcon) {
    case "cactus":
      return <IconCactus />;
    case "point":
      return <IconAccessPoint />;
  }
};
