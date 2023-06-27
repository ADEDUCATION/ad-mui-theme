// .storybook/preview.js

import { CssBaseline, ThemeProvider } from "@mui/material";

import { useMemo, useState } from "react";
import CustomThemeProvider from "../../src/newTheme/Provider";

const Theme = {
  ADE: "ade",
  ESP: "esp",
  ADEDARK: "adeDark",
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => Theme[themeKey] || Theme["ade"], [themeKey]);

  return (
    <CustomThemeProvider mode={theme}>
      <CssBaseline />
      <Story />
    </CustomThemeProvider>
  );
};

export const withPhoneInput = (Story, context) => {
  return (
    <>
      <CssBaseline />
      <Story />
    </>
  );
};

export const decorators = [withMuiTheme, withPhoneInput];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "ade",
    toolbar: {
      icon: "globe",
      dynamicTitle: true,
      items: [
        { value: "ADE", left: "☀️", title: "ADE" },
        { value: "ESP", left: "🌙", title: "ESP" },
        { value: "ADEDARK", left: "🌙", title: "ADE Dark" },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
