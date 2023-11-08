import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from "@mui/material";

import Label from "../Label";
import { MuiOmits } from "../../utils";

const CustomRadioInput = ({ ...rest }: Omit<RadioProps, MuiOmits>) => {
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
      {/* <FormLabel id="radio-buttons-group-label">
        <Label field={field} />
      </FormLabel> */}
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
