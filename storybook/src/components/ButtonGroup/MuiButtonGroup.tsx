import { Button, ButtonGroup, ButtonGroupProps } from "@mui/material";
import { MuiOmits } from "../../utils";

const MuiButtonGroup = ({ ...rest }: Omit<ButtonGroupProps, MuiOmits>) => {
  return (
    <ButtonGroup variant="contained" {...rest}>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
};

export default MuiButtonGroup;
