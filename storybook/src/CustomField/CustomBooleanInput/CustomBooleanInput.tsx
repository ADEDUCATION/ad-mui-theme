import { Checkbox, CheckboxProps, FormControlLabel, FormGroup } from "@mui/material";

import { useState } from "react";
import { MuiOmits } from "../../utils";

interface MuiCustomBooleanInputProps extends Omit<CheckboxProps, MuiOmits> {
  field: IFieldStructure;
}

const CustomBooleanInput = ({
  field,
  ...rest
}: Omit<MuiCustomBooleanInputProps, "checked" | "icon">) => {
  const [value, setValue] = useState<string | number | boolean>(false);
  return (
    <FormGroup row style={{ paddingTop: 20 }}>
      <FormControlLabel
        control={
          <Checkbox onChange={() => setValue(!value)} name={field.id} checked={!!value} {...rest} />
        }
        label={field.label}
        disabled={field.disabled}
      />
    </FormGroup>
  );
};

export default CustomBooleanInput;
