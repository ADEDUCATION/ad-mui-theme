type CustomFieldTypes =
  | "upload"
  | "siren"
  | "siret"
  | "nir"
  | "nda"
  | "number"
  | "phone"
  | "euros"
  | "percent"
  | "duration"
  | "select"
  | "radio"
  | "boolean"
  | "date"
  | "multiselect"
  | "email"
  | "period-button"
  | "subsection"
  | "autocompleteAddress"
  | "text";

type IFieldStructure = {
  // label: string;
  // id: string;
  // type: CustomFieldTypes;
  mandatory: boolean;
  fullWidth?: boolean;
  // disabled?: boolean;
  // helperText?: string;
  // placeholder?: string;
  // endAdornment?: string;
  // suffix?: string;
  // format?: string;
  // options?: SelectOptions;
  // elementToToggle?: string;
  isConditionalTrigger?: boolean;
  // gridWidth?: number;
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  remote?: string;
  fromOrigin?: string;
  format?: string;
  helperText?: string;
  placeholder?: string;
  displayCondition?: "nbr_year" | string;
  displayValue?: number;
  displayConditionValue?: string | number;
  list?: { id: string; label: string }[];
  options?: {
    label: string;
    value: string | number | boolean;
  }[];
  endpoint?: string;
  gridWidth?: number;
  endAdornment?: string;
  isCerfa?: string;
  isConvention?: string;
  suffix?: string;
  multiline?: number;
  pattern?: RegExp;
  // pattern?: ValidationRule<RegExp>;
  errorMessage?: string;
  modifier?: "uppercase" | "first-uppercase" | "first-words-uppercase";
  hideToUser?: boolean;
  isImage?: boolean;
  fullwidth?: boolean;
};
