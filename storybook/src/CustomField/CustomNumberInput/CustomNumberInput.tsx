import { NumericFormat, NumericFormatProps } from "react-number-format";

import { InputAdornment, InputLabel, TextField } from "@mui/material";

import Label from "../Label";
import { MuiOmits } from "../../utils";

const CustomNumberInput = ({ ...rest }: Omit<NumericFormatProps, MuiOmits>) => {
  const field: IFieldStructure = {
    label: "Montant",
    id: "cfa_montant",
    type: "number",
    mandatory: true,
    endAdornment: "€",
  };

  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <NumericFormat
        decimalSeparator=","
        customInput={TextField}
        InputProps={
          field.endAdornment
            ? {
                endAdornment: (
                  <InputAdornment position="start">
                    {field.endAdornment}
                  </InputAdornment>
                ),
              }
            : undefined
        }
        variant="outlined"
        thousandSeparator=" "
        {...rest}
      />
    </>
  );
};

export default CustomNumberInput;
