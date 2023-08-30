import { Button, ButtonProps as MuiButtonProps } from "@mui/material";
<<<<<<< HEAD
import { Add, Check, Delete } from "@mui/icons-material";
=======
import { Add, Delete } from "@mui/icons-material";
>>>>>>> 46ad2a765c1280ccc8ab3ddade8b39a62cf84733
import { MuiOmits } from "../../utils";

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends Omit<ButtonBaseProps, MuiOmits> {
  label: string;
  startIcon?: "none" | "check" | "add";
  endIcon?: "none" | "delete" | "add";
}

export const MuiButton = ({ label, endIcon, startIcon, ...rest }: ButtonProps) => {
  return (
    <Button
      endIcon={endIcon && getIcon(endIcon)}
      startIcon={startIcon && getIcon(startIcon)}
      {...rest}
    >
      {label}
    </Button>
  );
};

const getIcon = (icon: "delete" | "add" | "check" | "none") => {
  switch (icon) {
    case "delete":
      return <Delete />;
    case "add":
      return <Add />;
    case "check":
      return <Check />;
    case "none":
      return null;
    default:
      return null;
  }
};
