import { Box, Button, ButtonProps as MuiButtonProps } from "@mui/material";
import { Add, Delete, TramSharp } from "@mui/icons-material";
import { MuiOmits } from "../../utils";

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends Omit<ButtonBaseProps, MuiOmits> {
  label: string;
  endIcon?: "delete" | "add"; // Définition des valeurs possibles pour endIcon
}

// interface Color extends ButtonBasePropsColors

export const MuiButton = ({ label, endIcon, ...rest }: ButtonProps) => {
  return (
    <>
      <Button endIcon={endIcon && getEndIcon(endIcon)} {...rest}>
        {label}
      </Button>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<TramSharp />}
          startIcon={<TramSharp />}
        >
          Test
        </Button>
      </Box>
    </>
  );
};

const getEndIcon = (endIcon: "delete" | "add") => {
  switch (endIcon) {
    case "delete":
      return <Delete />;
    case "add":
      return <Add />;
    default:
      return null;
  }
};
