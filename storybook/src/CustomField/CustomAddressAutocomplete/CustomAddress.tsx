import {
  Autocomplete,
  AutocompleteProps,
  InputLabel,
  TextField,
} from "@mui/material";
import Label from "../Label";

const CustomAddress = ({ ...rest }: AutocompleteProps) => {
  const field = {
    label: "Adresse",
    id: "address",
    type: "address",
    mandatory: true,
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
              type: "search",
              size: "small",
            }}
          />
        )}
        options={[]}
        {...rest}
      />
    </>
  );
};

export default CustomAddress;
