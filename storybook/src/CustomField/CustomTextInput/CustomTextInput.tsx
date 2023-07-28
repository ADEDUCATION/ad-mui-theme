import { InputLabel, TextField, TextFieldProps } from "@mui/material";

import Label from "../Label";
import { MuiOmits } from "../../utils";

const CustomTextInput = ({ ...rest }: Omit<TextFieldProps, MuiOmits>) => {
  const field = {
    label: "Titre(s) RNCP rattaché(s)",
    id: "cfa_rncp",
    type: "multiselect",
    remote: "rncp",
    endpoint: "rncp_exact_title",
    mandatory: true,
  } as IFieldStructure;

  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <TextField {...rest} />
    </>
  );
};

export default CustomTextInput;
