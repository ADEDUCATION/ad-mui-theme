import React from "react";
import { ThemeProvider } from "@mui/material";

// import useTheme from '@/store/theme';

import { newTheme, tokens } from "./theme";

type CustomThemeProviderProps = {
  children: JSX.Element;
  mode: keyof typeof tokens;
};
// declare module "@mui/material/styles" {
//   interface Theme {
//     palette: defaultTheme("ade");
// }

function CustomThemeProvider({ children, mode }: CustomThemeProviderProps) {
  // const [theme] = useTheme();

  return <ThemeProvider theme={newTheme(mode)}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
