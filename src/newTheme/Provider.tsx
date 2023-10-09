import React from "react";
import { ThemeProvider } from "@mui/material";

import { newTheme } from "./theme";
import { SchoolThemes } from "./types";

type CustomThemeProviderProps = {
  children: JSX.Element;
  mode: SchoolThemes;
};

function CustomThemeProvider({ children, mode }: CustomThemeProviderProps) {
  return <ThemeProvider theme={newTheme(mode)}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
