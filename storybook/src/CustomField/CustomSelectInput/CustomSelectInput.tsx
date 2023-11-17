import { InputLabel, TextField } from "@mui/material";

import Label from "../Label";
import { CustomTextInputProps, IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";

const CustomSelectInput = ({
  requiredValue,
  helperTextValue,
  ...rest
}: CustomTextInputProps) => {
  const field = {
    label: "Type d'employeur",
    id: "company_type",
    type: "select",
    options: [
      {
        value: 11,
        label:
          "11 - Entreprise inscrite au répertoire des métiers ou au registre des entreprises pour l’Alsace-Moselle",
      },
      {
        value: 12,
        label:
          "12 - Entreprise inscrite uniquement au registre du commerce et des sociétés",
      },
      {
        value: 13,
        label:
          "13 - Entreprises dont les salariés relèvent de la mutualité sociale agricole",
      },
    ],
    fullWidth: true,
    mandatory: requiredValue,
    helperText: helperTextValue,
  } as IFieldStructure;
  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <TextField
        fullWidth
        select
        SelectProps={{
          native: true,
        }}
        {...rest}
      >
        <option value=""></option>
        {field.options?.map((el, index) => {
          return (
            <option key={index} value={index}>
              {el.label}
            </option>
          );
        })}
        {field.options?.map((el) => {
          return (
            <option key={el.label} value={el.value.toString()}>
              {el.label}
            </option>
          );
        })}
      </TextField>
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomSelectInput;
