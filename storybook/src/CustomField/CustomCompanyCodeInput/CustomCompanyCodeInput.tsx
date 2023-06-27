import { PatternFormat, PatternFormatProps } from "react-number-format";

import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import Label from "../Label";

const CustomCompanyCodeInput = ({ ...rest }: PatternFormatProps) => {
  const field = {
    label: "Numéro Siret",
    id: "cfa_siret",
    type: "siret",
    format: "### ### ### #####",
    mandatory: true,
  };
  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <PatternFormat
        customInput={TextField}
        variant="outlined"
        fullWidth
        format={field.format}
        type="text"
        name={field.id}
        valueIsNumericString
        mask="_"
        // helperText={
        //   typeof error === "object" && "message" in error
        //     ? error.message
        //     : error && error.ref?.name === field.id && error.type === "required"
        //     ? "Ce champs est obligatoire"
        //     : error && error.ref?.name === field.id && field?.errorMessage
        // }
        // onValueChange={({ value: v }) => onChange({ target: { value: v } })}
        {...rest}
      />
    </>
  );
};

export default CustomCompanyCodeInput;
