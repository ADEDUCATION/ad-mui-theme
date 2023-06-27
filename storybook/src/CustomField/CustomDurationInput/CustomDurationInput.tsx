import { NumericFormat, NumericFormatProps } from "react-number-format";

import {
  InputAdornment,
  InputLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";

import Label from "../Label";

const CustomDurationInput = ({ ...rest }: TextFieldProps) => {
  const field = {
    label: "Durée de la formation",
    id: "academic_hours",
    type: "duration",
    suffix: " heures",
    mandatory: true,
    endAdornment: "heures",
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
        variant="outlined"
        // suffix={` ${field.suffix}`}
        name={field.id}
        thousandSeparator=" "
        {...rest}
      />
    </>
  );
};

export default CustomDurationInput;
