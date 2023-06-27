import {
  RadioGroup,
  RadioGroupProps,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { useState } from "react";

export interface MuiRadioButtonProps extends RadioGroupProps {
  label1: string;
  label2: string;
}

export const MuiRadioButton = ({
  label1,
  label2,
  ...rest
}: MuiRadioButtonProps) => {
  const [value, setValue] = useState("1");
  return (
    <FormControl>
      <RadioGroup
        {...rest}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      >
        <FormControlLabel value="1" control={<Radio />} label={label1} />
        <FormControlLabel value="2" control={<Radio />} label={label2} />
      </RadioGroup>
    </FormControl>
  );
};
