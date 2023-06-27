import { Button, Tooltip, TooltipProps } from "@mui/material";
import { MuiOmits } from "../../utils";

export interface MuiTooltipProps extends Omit<TooltipProps, MuiOmits> {
  title: string;
}

const MuiTooltip = ({ title, ...rest }: MuiTooltipProps) => {
  return (
    <Tooltip title={title} {...rest}>
      <Button>{title}</Button>
    </Tooltip>
  );
};

export default MuiTooltip;
