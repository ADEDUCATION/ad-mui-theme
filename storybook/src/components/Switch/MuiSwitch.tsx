import { Switch, SwitchProps } from "@mui/material";
import { MuiOmits } from "../../utils";
import { useState } from "react";

export type MuiSwitchProps = Omit<SwitchProps, MuiOmits | "icon">;

const MuiSwitch = ({ ...rest }: MuiSwitchProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      {...rest}
      onChange={() => {
        setChecked(!checked);
      }}
      checked={checked}
    />
  );
};

export default MuiSwitch;
