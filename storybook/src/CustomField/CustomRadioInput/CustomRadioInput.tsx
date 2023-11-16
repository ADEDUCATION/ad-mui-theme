import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioProps,
} from "@mui/material";

import { MuiOmits } from "../../utils";
import Label from "../Label";

const CustomRadioInput = ({ ...rest }: Omit<RadioProps, MuiOmits | "checked" | "icon">) => {
  const field = {
    label: "Statut de l'employeur",
    id: "company_statut",
    type: "radio",
    mandatory: true,
    options: [
      { label: "Employeur privé", value: 1 },
      { label: "Employeur public", value: 2 },
    ],
    fullWidth: true,
    isConditionalTrigger: true,
  };

  return (
    <FormControl>
      <FormLabel id="radio-buttons-group-label">
        <Label field={field} />
      </FormLabel>
      <RadioGroup>
        {field.options?.map((el) => {
          return (
            <FormControlLabel
              key={`${field.id}-${el.label}`}
              value={el.value}
              control={<Radio {...rest} />}
              label={el.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioInput;
