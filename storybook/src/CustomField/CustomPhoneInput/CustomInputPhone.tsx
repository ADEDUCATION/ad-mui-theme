import { Grid, InputLabel } from "@mui/material";
import Label from "../Label";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { IFieldStructure } from "../type";
import CustomHelperText from "../CustomHelperText";

export interface CustomPhoneProps extends PhoneInputProps {
  requiredValue?: boolean;
  helperTextValue?: string;
  disabled?: boolean;
  variant?: "filled" | "outlined";
}

const CustomInputPhone = ({
  requiredValue,
  helperTextValue,
  disabled,
  variant,
  ...rest
}: CustomPhoneProps) => {
  const field = {
    label: "Téléphone",
    id: "cfa_tel",
    type: "phone",
    mandatory: requiredValue,
    helperText: helperTextValue,
    disabled: disabled,
  } as IFieldStructure;
  const [value] = useState("");
  return (
    <>
      <Grid container spacing={2}>
        <InputLabel>
          <Label field={field} />
        </InputLabel>
        <PhoneInput
          preferredCountries={["fr"]}
          country="fr"
          localization={fr}
          value={value}
          enableAreaCodes={true}
          enableAreaCodeStretch
          inputProps={{
            name: field.id,
          }}
          inputClass="invalid-number"
          placeholder="ex : +33 6 44 55 66 77"
          inputStyle={{}}
          {...rest}
          disabled={field.disabled}
          containerClass={
            variant === "filled" && field.disabled
              ? "filled disabled"
              : variant === "filled" && !field.disabled
              ? "filled"
              : field.disabled
              ? "disabled"
              : ""
          }
        />
        {field.helperText && field.helperText?.length > 0 && (
          <CustomHelperText helperText={field.helperText} />
        )}
      </Grid>
    </>
  );
};

export default CustomInputPhone;
