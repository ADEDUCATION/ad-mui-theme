import { InputLabel } from "@mui/material";
import { DatePicker, LocalizationProvider, frFR } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Label from "../../CustomField/Label";

const frenchLocale =
  frFR.components.MuiLocalizationProvider.defaultProps.localeText;
export default function MuiDatePicker() {
  return (
    <LocalizationProvider
      adapterLocale="fr-FR"
      localeText={frenchLocale}
      dateAdapter={AdapterDayjs}
    >
      <>
        <InputLabel>
          <Label
            field={{ label: "Date", id: "1", type: "date", mandatory: true }}
          />
        </InputLabel>
        <DatePicker format="DD/MM/YYYY" />
      </>
    </LocalizationProvider>
  );
}
