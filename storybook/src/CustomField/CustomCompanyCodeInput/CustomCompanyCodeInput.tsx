import { PatternFormat, PatternFormatProps } from "react-number-format";

import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import Label from "../Label";
import { IFieldStructure } from "../type";

export type CustomCompanyCodeInputProps = {
  requiredValue?: boolean;
};

const CustomCompanyCodeInput = ({ ...rest }) => {
  const field = {
    label: "Numéro Siret",
    id: "cfa_siret",
    type: "siret",
    format: "### ### ### #####",
    mandatory: true,
  } as IFieldStructure;
  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <PatternFormat
        customInput={TextField}
        variant="outlined"
        fullWidth
        format={field.format as string}
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
