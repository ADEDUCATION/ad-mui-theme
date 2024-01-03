import { NumericFormat } from "react-number-format";

import { InputAdornment, InputLabel, TextField } from "@mui/material";

import Label from "../Label";
import { CustomInputProps, IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";

const CustomDurationInput = ({
  disabled,
  requiredValue,
  helperTextValue,
  variant,
}: CustomInputProps) => {
  const field = {
    label: "Durée de la formation",
    id: "academic_hours",
    type: "duration",
    suffix: " heures",
    mandatory: requiredValue as boolean,
    endAdornment: "heures",
    helperText: helperTextValue,
    disabled: disabled as boolean,
  } as IFieldStructure;

  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <NumericFormat
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
        variant={variant}
        // suffix={` ${field.suffix}`}
        name={field.id}
        thousandSeparator=" "
        disabled={field.disabled}
      />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomDurationInput;
