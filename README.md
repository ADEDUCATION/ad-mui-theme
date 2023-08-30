# New theme and design token

This new theme is designed to have different mode (ade, esd, esp, eac...)

## Installation

### With `yarn`

```bash
$ yarn add ad-mui-theme-package @mui/material @emotion/react @emotion/styled
```

### With `npm`

```bash
$ npm install ad-mui-theme-package @mui/material @emotion/react @emotion/styled
```

## How to use it

### Import theme in your app

To use the theme you need to import the provider and wrap your app with it.

```tsx
import { CustomThemeProvider } from "ad-mui-theme-package";

const App = () => {
  return (
    <CustomThemeProvider mode="ade">
      <div>My app</div>
    </CustomThemeProvider>
  );
};
```

### Theme you can use with this package

ADE | ESP

### Use the theme in your component

To use the theme in your component mui component

```tsx
// import mui component
import { Button } from "@mui/material";

const MyComponent = () => {
  // use theme here
  return <Button color="color1">My component</Button>;
};
```

### Use the theme in your component with sx

To use the theme in your component with sx

```tsx
// import mui component
import { Button } from "@mui/material";

const MyComponent = () => {
  return (
    <Button
      sx={{
        // use theme here
        color: "color1",
      }}
    >
      My component
    </Button>
  );
};
```

### Use the theme in sx with `useTheme`

To use the theme in your component you need to import the hook `useTheme` and use it.

```tsx
// import useTheme from mui
import { useTheme } from "@mui/material";

const MyComponent = () => {
  // create theme const for use it
  const theme = useTheme();

  return (
    <Box
      sx={{
        // use theme here
        backgroundColor: theme.palette.primary.main,
      }}
    >
      My component
    </Box>
  );
};
```

### Use the theme in sx with `useTheme` and `callback`

To use the theme in your component you need to import the hook `useTheme` and use it.

```tsx
// import useTheme from mui
import { Theme, useTheme } from "@mui/material";

const MyComponent = () => {
  // create theme const for use it
  const theme = useTheme();

  // use theme here
  // type your theme with mui type
  return (
    <Box
      sx={{
        backgroundColor: (theme: Theme) => theme.palette.primary.main,
      }}
    >
      My component
    </Box>
  );
};
```

## `StyledTabs` & `StyledTab`

Components `StyledTabs` & `StyledTab` doesn't exist now use `Tabs` & `Tab` from `@mui/material` and it's automatically styled with the theme.

## Input phone disabled

If you want to disable the input phone you need to add className `disabled` and disabled properties to the component `PhoneInput`.

```tsx
const CustomInputPhone = ({ ...rest }: PhoneInputProps) => {
  return (
    <>
      <Grid container spacing={2}>
        <InputLabel>
          <Label field={field} />
        </InputLabel>
        <PhoneInput containerClass={"disabled"} disabled={true} {...rest} />
      </Grid>
    </>
  );
};

export default CustomInputPhone;
```

## Custom IconButton

If you want to use custom IconButton you need to import `IconButton` from `@mui/material` and add `className` to the component. You can use `action`, `delete`, `grey`, `error`, `success`, `outlined`, `secondary` and `primary` className.

```tsx
import { IconButton } from "@mui/material";

const MyComponent = () => {
  return (
    <IconButton className="action">
      <Icon />
    </IconButton>
  );
};
```

## Troubleshooting

If you have an error with `string-width` dependency you need to follow this steps:

```bash
# Clean yarn cache
$ yarn cache clean --all
$ cd storybook
# Remove node_modules folder and yarn.lock file
$ rm -rf node_modules
$ rm yarn.lock
# Install dependencies
$ yarn
# Start storybook
$ yarn storybook
```

## Exported Types

| Name                        | Type                                                                                                                                                                                                             |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MergeSubObjects**         | `primary` / `secondary` / `success` / `warning` / `error` / `info`                                                                                                                                               |
| **SubObjectsCustomPalette** | `color1` / `color2` / `color3` / `color4` / `color5` / `color6` / `color7` / `color8` / `color9`                                                                                                                 |
| **AllColor**                | `primary` / `secondary` / `success` / `warning` / `error` / `info` / `color1` / `color2` / `color3` / `color4` / `color5` / `color6` / `color7` / `color8` / `color9` / `grey` / `primaryBase` / `secondaryBase` |
