import { Autocomplete, InputLabel, TextField } from "@mui/material";
import Label from "../Label";
import { CustomInputProps, IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";

const CustomAddress = ({
  disabled,
  requiredValue,
  helperTextValue,
}: CustomInputProps) => {
  const field = {
    label: "Adresse",
    id: "address",
    type: "address",
    mandatory: requiredValue as boolean,
    helperText: helperTextValue,
    disabled: disabled as boolean,
  } as IFieldStructure;
  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <Autocomplete
        freeSolo
        disableClearable
        filterOptions={(x) => x}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              // type: "search",
              size: "small",
            }}
          />
        )}
        options={[]}
        disabled={field.disabled}
      />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomAddress;
