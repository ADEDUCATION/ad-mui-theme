import { Stack, Typography, useTheme } from "@mui/material";

const CustomHelperText = ({ helperText }: { helperText: string }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      px={theme.space.md}
      pt={theme.space.xs}
    >
      <Typography variant="bodyMedium" color="error.main">
        {helperText}
      </Typography>
    </Stack>
  );
};

export default CustomHelperText;
