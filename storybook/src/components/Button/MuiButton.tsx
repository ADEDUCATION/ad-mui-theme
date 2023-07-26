import { Button, ButtonProps as MuiButtonProps } from "@mui/material";
import { Add, Check, Delete } from "@mui/icons-material";
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
