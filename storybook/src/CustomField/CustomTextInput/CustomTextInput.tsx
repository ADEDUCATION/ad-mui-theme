import { InputLabel, TextField } from "@mui/material";

import Label from "../Label";
import { CustomInputProps, IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";
import { CheckBox } from "@mui/icons-material";

const CustomTextInput = ({
  requiredValue,
  helperTextValue,
  ...rest
}: CustomInputProps) => {
  const field = {
    label: "Titre(s) RNCP rattaché(s)",
    id: "cfa_rncp",
    type: "multiselect",
    remote: "rncp",
    endpoint: "rncp_exact_title",
    mandatory: requiredValue,
    helperText: helperTextValue,
  } as IFieldStructure;

  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <TextField {...rest} placeholder="Value" />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomTextInput;
