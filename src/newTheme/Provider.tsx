import React from "react";
import { ThemeProvider } from "@mui/material";

import { newTheme, tokens } from "./theme";

type CustomThemeProviderProps = {
  children: JSX.Element;
  mode: keyof typeof tokens;
};

function CustomThemeProvider({ children, mode }: CustomThemeProviderProps) {
  return <ThemeProvider theme={newTheme(mode)}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
