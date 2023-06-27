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

interface MuiCustomBooleanInputProps extends FormControlLabelProps {
  field: IFieldStructure;
}

const CustomBooleanInput = ({ field }: MuiCustomBooleanInputProps) => {
  const [value, setValue] = useState<string | number | boolean>(false);
  return (
    <FormGroup row style={{ paddingTop: 20 }}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => setValue(!value)}
            name={field.id}
            checked={!!value}
          />
        }
        label={<Label field={field} />}
        disabled={field.disabled}
      />
    </FormGroup>
  );
};

export default CustomBooleanInput;
