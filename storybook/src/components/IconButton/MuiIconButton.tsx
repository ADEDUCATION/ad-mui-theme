import { IconButton, IconButtonProps, Paper } from "@mui/material";
import { MuiOmits } from "../../utils";

export interface MuiIconButtonProps extends Omit<IconButtonProps, MuiOmits> {
  label: any;
  cssClass:
    | "primary"
    | "grey"
    | "action"
    | "outlined"
    | "error"
    | "success"
    | "secondary"
    | "delete";
}

export const MuiIconButton = ({
  label,
  cssClass,
  ...rest
}: MuiIconButtonProps) => (
  <>
    <Paper
      elevation={0}
      sx={{
        width: "fit-content",
        padding: "30px",
      }}
    >
      <IconButton className={cssClass} {...rest}>
        {label}
      </IconButton>
    </Paper>
  </>
);
