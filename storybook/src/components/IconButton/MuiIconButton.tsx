import { IconButton, IconButtonProps, Paper } from "@mui/material";
import { MuiOmits } from "../../utils";
import { ImportContacts } from "@mui/icons-material";
import { IconCactus } from "@tabler/icons-react";

export interface MuiIconButtonProps extends Omit<IconButtonProps, MuiOmits> {
  label: any;
}

export const MuiIconButton = ({ label, ...rest }: MuiIconButtonProps) => (
  <>
    <Paper
      elevation={0}
      sx={{
        width: "fit-content",
        padding: "30px",
      }}
    >
      {/* <IconButton {...rest}>{label}</IconButton> */}
      <IconButton color="primary-contained" size="xlarge" disabled>
        <IconCactus />
      </IconButton>
    </Paper>
  </>
);
