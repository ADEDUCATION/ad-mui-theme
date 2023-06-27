import { Grid, InputLabel } from "@mui/material";
import Label from "../Label";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { PHONE_COUNTRIES } from "../utils";

const CustomInputPhone = ({ ...rest }: PhoneInputProps) => {
  const field = {
    label: "Téléphone",
    id: "cfa_tel",
    type: "phone",
    mandatory: true,
  };
  const [value, setValue] = useState("");

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
        />
      </Grid>
    </>
  );
};

export default CustomInputPhone;
