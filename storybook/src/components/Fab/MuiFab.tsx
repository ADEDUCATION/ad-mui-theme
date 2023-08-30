import { Fab, FabProps } from "@mui/material";
import { MuiOmits } from "../../utils";

export interface MuiFabProps extends Omit<FabProps, MuiOmits> {
  label: any;
}

const MuiFab = ({ label, ...rest }: MuiFabProps) => {
  return <Fab {...rest}>{label}</Fab>;
};

export default MuiFab;
