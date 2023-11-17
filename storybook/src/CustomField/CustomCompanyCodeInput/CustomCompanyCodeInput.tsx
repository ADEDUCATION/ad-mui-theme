import { PatternFormat } from "react-number-format";

import { InputLabel, TextField } from "@mui/material";
import Label from "../Label";
import { CustomInputProps, IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";

const CustomCompanyCodeInput = ({
  disabled,
  requiredValue,
  helperTextValue,
}: CustomInputProps) => {
  const field = {
    label: "Numéro Siret",
    id: "cfa_siret",
    type: "siret",
    format: "### ### ### #####",
    mandatory: requiredValue as boolean,
    helperText: helperTextValue,
    disabled: disabled as boolean,
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
        disabled={field.disabled}
      />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomCompanyCodeInput;
