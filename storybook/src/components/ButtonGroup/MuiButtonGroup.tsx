import { Button, ButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from "@mui/material";
import { MuiOmits } from "../../utils";

type ButtonBaseProps = MuiButtonGroupProps;

export interface ButtonGroupProps extends Omit<ButtonBaseProps, MuiOmits> {}

const MuiButtonGroup = ({ ...rest }: ButtonGroupProps) => {
  return (
    <ButtonGroup variant="contained" {...rest}>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
};

export default MuiButtonGroup;
