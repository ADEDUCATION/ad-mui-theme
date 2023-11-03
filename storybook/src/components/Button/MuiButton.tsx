import { Button, ButtonProps as MuiButtonProps } from "@mui/material";
import { IconCactus, IconAccessPoint } from "@tabler/icons-react";
import { MuiOmits } from "../../utils";

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends Omit<ButtonBaseProps, MuiOmits> {
  label: string;
  endIcon?: "cactus" | "point";
  startIcon?: "cactus" | "point";
}

export const MuiButton = ({
  label,
  endIcon,
  startIcon,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <Button
        endIcon={endIcon && getIcon(endIcon)}
        startIcon={startIcon && getIcon(startIcon)}
        {...rest}
      >
        {label}
      </Button>
    </>
  );
};

const getIcon = (endIcon: "cactus" | "point") => {
  switch (endIcon) {
    case "cactus":
      return <IconCactus />;
    case "point":
      return <IconAccessPoint />;
  }
};
