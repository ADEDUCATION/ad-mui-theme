import { useContext, useEffect, useState } from "react";

import {
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

import Label from "../Label";

const CustomMultiselectInput = ({ ...rest }: SelectProps) => {
  const field = {
    label: "Titre(s) RNCP rattaché(s)",
    id: "cfa_rncp",
    type: "multiselect",
    remote: "rncp",
    endpoint: "rncp_exact_title",
    mandatory: true,
    list: [
      { id: "1", label: "Titre 1" },
      { id: "2", label: "Titre 2" },
      { id: "3", label: "Titre 3" },
    ],
  } as IFieldStructure;

  return (
    <>
      <InputLabel id={field.id}>
        <Label field={field} />
      </InputLabel>
      <Select
        autoWidth={true}
        fullWidth
        // multiple
        renderValue={(selected) => {
          return (
            <div style={{ margin: 3 }}>
              {/* {(selected as unknown as string[]).map((selectedValue) => ( */}
              <Chip
                key={`${field.id}`}
                label={field.list?.find((el) => el.id === selected)?.label}
                sx={{ m: 1 }}
              />
              {/* ))} */}
            </div>
          );
        }}
        {...rest}
      >
        {field.list &&
          field.list.map((el) => (
            <MenuItem key={`${field.id}-${el.id}`} value={el.id}>
              {el.label}
            </MenuItem>
          ))}
      </Select>
      {!!field.helperText && (
        <FormHelperText>{field.helperText}</FormHelperText>
      )}
    </>
  );
};

export default CustomMultiselectInput;
