import { Box, InputLabel, TextField, Typography } from "@mui/material";

import Label from "../Label";
import { useState } from "react";

const CustomLinkInput = () => {
  const [value, setValue] = useState("");
  const field = {
    startUrl: "https://",
    id: "cfa_website",
    label: "Site web",
    type: "text",
    mandatory: true,
    disabled: false,
  };
  const parseUrl = (url: string | undefined) => {
    if (!field.startUrl || !url) return url;
    const urlParts = url.split(field.startUrl);
    const lastPart = urlParts[urlParts.length - 1];
    return lastPart;
  };
  return (
    <>
      <InputLabel>
        <Label field={field} />
      </InputLabel>
      <TextField
        autoComplete="none"
        value={parseUrl(value as string)}
        onChange={(e) => {
          const val = e.target.value;
          const capitalize = (s: string) =>
            s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
          // ? This regexp targets spaces ' ' and '-' to handle compound names
          const capitalizeWords = (s: string) =>
            s
              .split(/([\s-]+)/)
              .map((word, index) => (index % 2 === 0 ? capitalize(word) : word))
              .join("");
          // if (field.modifier && val) {
          //   switch (field.modifier) {
          //     case "uppercase":
          //       e.target.value = val.toUpperCase();
          //       break;
          //     case "first-uppercase":
          //       e.target.value = capitalize(val);
          //       break;
          //     case "first-words-uppercase":
          //       e.target.value = capitalizeWords(val);
          //       break;

          //     default:
          //       break;
          //   }
          // }

          setValue(field.startUrl + e.target.value);
        }}
        fullWidth
        name={field.id}
        disabled={field.disabled}
        size="small"
        type="text"
        InputProps={
          field.startUrl
            ? {
                startAdornment: (
                  <Box
                    sx={{
                      background: "#EFEFF1",
                      height: "100%",
                      padding: "0 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                    }}
                  >
                    <Typography color="#817F94">{field.startUrl}</Typography>
                  </Box>
                ),
              }
            : {}
        }
        sx={{
          p: 0,
          "& .MuiInputBase-root": {
            p: 0,
            overflow: "hidden",
          },
        }}
      />
    </>
  );
};

export default CustomLinkInput;
