# New theme and design token

This new theme is designed to have different mode (ade, esd, esp, eac...)

### Installation

- [Installation](#installation)

### How to start the project

- [How to start](#how-to-start)

### How to use it

- [Import theme in your app](#import-theme-in-your-app)
- [Theme you can use with this package](#theme-you-can-use-with-this-package)

### How to deploy package to npm

- [How to deploy](#how-to-deploy)

## Installation

### With `yarn`

```bash
$ yarn add ad-mui-theme-package @mui/material @emotion/react @emotion/styled
```

### With `npm`

```bash
$ npm install ad-mui-theme-package @mui/material @emotion/react @emotion/styled
```

## How to start

```bash
$ make start-storybook
```

This command build package and install dependencies for storybook. Then it launch storybook on port 6006.

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
  return <Button color="primary">My component</Button>;
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
        color: "primary",
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

If you want to use custom IconButton you need to import `IconButton` from `@mui/material` and add `variant` props.
You can use all color from the theme but you need to add `-contained`, `-outlined`, `-soft` or `-ghost` at the end of the color.

```tsx
import { IconButton } from "@mui/material";

const MyComponent = () => {
  return (
    <IconButton variant="primary-contained">
      <Icon />
    </IconButton>
  );
};
```

## How to deploy

Run the following commands to deploy the package to npm.

These commands trigger a workflow that will build the package, publish it to npm, and create a new Github version.

⚠️ The new version takes the version of the tag so be careful, the tag of the new version must be greater than the last published version. Otherwise, the workflow will fail. ⚠️

```bash
$ git add <files>
$ git commit -m "<message>"
$ git push
$ git tag <newVersion>
$ git push --tags
```
