import { Button, ButtonGroup, ButtonGroupProps } from "@mui/material";

const MuiButtonGroup = ({ ...rest }: ButtonGroupProps) => {
  return (
    <ButtonGroup variant="contained" {...rest}>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
};

export default MuiButtonGroup;
