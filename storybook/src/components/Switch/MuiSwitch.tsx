import { Switch } from "@mui/material";
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase";

const MuiSwitch = ({ ...rest }: SwitchBaseProps) => {
  return <Switch {...rest} />;
};

export default MuiSwitch;
