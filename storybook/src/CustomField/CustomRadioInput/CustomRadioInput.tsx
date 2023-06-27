import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";

import Label from "../Label";

const CustomRadioInput = ({ ...rest }: RadioGroupProps) => {
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
      <RadioGroup {...rest}>
        {field.options?.map((el) => {
          return (
            <FormControlLabel
              key={`${field.id}-${el.label}`}
              value={el.value}
              control={<Radio size="small" />}
              label={el.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioInput;
