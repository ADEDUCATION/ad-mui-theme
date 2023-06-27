import { Add } from "@mui/icons-material";
import { Fab, FabProps } from "@mui/material";

export interface MuiFabProps extends FabProps {
  label: any;
}

const MuiFab = ({ label, ...rest }: MuiFabProps) => {
  return <Fab {...rest}>{label}</Fab>;
};

export default MuiFab;
