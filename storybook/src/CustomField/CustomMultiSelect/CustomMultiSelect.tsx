import { Autocomplete, InputLabel, TextField, Typography } from "@mui/material";

import Label from "../Label";
import { IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";

export interface CustomMultiselectInputProps {
  requiredValue?: boolean;
  helperTextValue?: string;
  disabled?: boolean;
  variant?: "filled" | "outlined";
}

const CustomMultiselectInput = ({
  requiredValue,
  helperTextValue,
  disabled,
  variant,
}: CustomMultiselectInputProps) => {
  const field = {
    label: "Titre(s) RNCP rattaché(s)",
    id: "cfa_rncp",
    type: "multiselect",
    remote: "rncp",
    endpoint: "rncp_exact_title",
    mandatory: requiredValue,
    helperText: helperTextValue,
    disabled: disabled,
    list: [
      { id: "1", label: "Titre 1" },
      { id: "2", label: "Titre 2" },
      { id: "3", label: "Titre 3" },
    ],
  } as IFieldStructure;

  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <Autocomplete
        multiple={true}
        fullWidth
        disabled={field.disabled}
        options={field.list || []}
        disableCloseOnSelect
        ChipProps={{
          color: "primary",
          variant: "soft",
          size: "medium",
        }}
        renderInput={(params) => (
          <TextField {...params} variant={variant} label="" />
        )}
        renderOption={(props, option, { selected }) => {
          return (
            <li
              {...props}
              key={`${field.id}` as string}
              style={{
                backgroundColor: selected ? "primary.main" : "white",
              }}
            >
              {selected ? <IconSquareCheckFilled /> : <IconSquare />}
              <Typography
                variant="subtitleMedium"
                component="span"
                sx={{
                  color: selected ? "primary.main" : "grey.500",
                }}
              >
                {option.label || "Information manquante"}
              </Typography>
            </li>
          );
        }}
        sx={{
          "& .MuiInputBase-root": {
            py: 0.5,
          },
          "& .MuiFormLabel-root": {
            marginTop: "-3px",
          },
        }}
      />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomMultiselectInput;
