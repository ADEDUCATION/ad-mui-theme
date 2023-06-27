import {
  Autocomplete,
  AutocompleteProps,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useState } from "react";
import Label from "../../CustomField/Label";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MuiMultiselect = () => {
  const [selectedCities, setSelectedCities] = useState<any>([]);
  const [list] = useState([
    { id: 1, label: "Bordeaux" },
    { id: 2, label: "Paris" },
    { id: 3, label: "Lyon" },
    { id: 4, label: "Marseille" },
  ]);

  return (
    <>
      <InputLabel>
        <Label
          field={{ id: "1", type: "text", label: "Villes", mandatory: true }}
        />
      </InputLabel>
      <Autocomplete
        multiple
        value={selectedCities ?? undefined}
        options={list}
        getOptionLabel={(option) => `${option.label}`}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        onChange={(e, value) => {
          setSelectedCities(value);
        }}
        disableCloseOnSelect
        renderOption={(props, option, { selected }) => {
          return (
            <li
              {...props}
              key={option.id}
              style={{
                backgroundColor: selected ? "primary.main" : "white",
              }}
            >
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
                color="primary"
                sx={{
                  "& .MuiCheckbox-root": {
                    color: "primary.main",
                  },
                  "& .MuiSvgIcon-root": {
                    color: selected ? "primary.main" : "grey.500",
                  },
                  "& .Mui-checked": {
                    color: "primary.main",
                  },
                }}
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
      />
    </>
  );
};

export default MuiMultiselect;
