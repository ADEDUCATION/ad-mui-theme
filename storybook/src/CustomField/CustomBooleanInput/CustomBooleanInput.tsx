import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  FormGroupProps,
} from "@mui/material";

import Label from "../Label";
import { useState } from "react";
import { MuiOmits } from "../../utils";

interface MuiCustomBooleanInputProps extends Omit<CheckboxProps, MuiOmits> {
  field: IFieldStructure;
}

const CustomBooleanInput = ({ field, ...rest }: MuiCustomBooleanInputProps) => {
  const [value, setValue] = useState<string | number | boolean>(false);
  return (
    <FormGroup row style={{ paddingTop: 20 }}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => setValue(!value)}
            name={field.id}
            checked={!!value}
            {...rest}
          />
        }
        label={field.label}
        disabled={field.disabled}
      />
    </FormGroup>
  );
};

export default CustomBooleanInput;
