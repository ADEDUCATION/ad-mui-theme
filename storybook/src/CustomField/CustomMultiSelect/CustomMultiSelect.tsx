import {
  Autocomplete,
  Checkbox,
  Chip,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  TextField,
  Typography,
} from "@mui/material";

import Label from "../Label";
import { IconCactus } from "@tabler/icons-react";

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
    // <>
    //   <InputLabel id={field.id}>
    //     <Label field={field} />
    //   </InputLabel>
    //   <Select
    //     autoWidth={true}
    //     fullWidth
    //     // multiple
    //     renderValue={(selected) => {
    //       return (
    //         <div style={{ margin: 3 }}>
    //           {/* {(selected as unknown as string[]).map((selectedValue) => ( */}
    //           <Chip
    //             key={`${field.id}`}
    //             label={field.list?.find((el) => el.id === selected)?.label}
    //             sx={{ m: 1 }}
    //             color="primary"
    //             onDelete={() => {
    //               console.log("delete");
    //             }}
    //             variant="soft"
    //             icon={<IconCactus />}
    //             size="medium"
    //           />
    //           {/* ))} */}
    //         </div>
    //       );
    //     }}
    //     {...rest}
    //   >
    //     {field.list &&
    //       field.list.map((el) => (
    //         <MenuItem key={`${field.id}-${el.id}`} value={el.id}>
    //           {el.label}
    //         </MenuItem>
    //       ))}
    //   </Select>
    //   {!!field.helperText && (
    //     <FormHelperText>{field.helperText}</FormHelperText>
    //   )}
    // </>
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <Autocomplete
        multiple={true}
        // value={inputValue}
        fullWidth
        disabled={field.disabled}
        // isOptionEqualToValue={(option, value) => option.value === value.value}
        options={field.list || []}
        disableCloseOnSelect
        ChipProps={{
          color: "primary",
          variant: "soft",
          size: "medium",
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="" />
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
              <Checkbox
                style={{ marginRight: 8 }}
                checked={selected}
                color="primary"
              />
              <Typography
                variant="body2"
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
    </>
  );
};

export default CustomMultiselectInput;
