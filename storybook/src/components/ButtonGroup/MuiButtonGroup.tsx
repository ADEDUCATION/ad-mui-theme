<<<<<<< HEAD
import { Button, ButtonGroup, ButtonGroupProps as MuiButtonGroupProps } from "@mui/material";
import { MuiOmits } from "../../utils";

type ButtonBaseProps = MuiButtonGroupProps;

export interface ButtonGroupProps extends Omit<ButtonBaseProps, MuiOmits> {}
=======
import { Button, ButtonGroup, ButtonGroupProps } from "@mui/material";
import { MuiOmits } from "../../utils";
>>>>>>> 46ad2a765c1280ccc8ab3ddade8b39a62cf84733

const MuiButtonGroup = ({ ...rest }: Omit<ButtonGroupProps, MuiOmits>) => {
  return (
    <ButtonGroup variant="contained" {...rest}>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
};

export default MuiButtonGroup;
