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
}

const CustomInputPhone = ({
  requiredValue,
  helperTextValue,
  disabled,
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
  const [value, setValue] = useState("");

  const inputVariant = "filled";
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
            inputVariant === "filled" && field.disabled
              ? "filled disabled"
              : inputVariant === "filled"
              ? "filled"
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
