import { NumericFormat } from "react-number-format";

import { InputAdornment, InputLabel, TextField } from "@mui/material";

import Label from "../Label";
import { CustomInputProps, IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";

const CustomNumberInput = ({
  requiredValue,
  helperTextValue,
  disabled,
}: CustomInputProps) => {
  const field: IFieldStructure = {
    label: "Montant",
    id: "cfa_montant",
    type: "number",
    mandatory: requiredValue as boolean,
    helperText: helperTextValue,
    disabled: disabled as boolean,
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
        disabled={field.disabled}
      />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomNumberInput;
