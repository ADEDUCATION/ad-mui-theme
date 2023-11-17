import { Box, Stack, Typography, useTheme } from "@mui/material";
import { IFieldStructure } from "./type";

const Label = ({ field }: { field: IFieldStructure }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={theme.space.xs}
      mb={theme.space.xs}
    >
      <Typography variant="bodyBold" color="grey.300">
        {field.label}
      </Typography>
      {field.mandatory && (
        <Box
          sx={{
            width: theme.space["2xs"],
            height: theme.space["2xs"],
            backgroundColor: "warning.main",
            borderRadius: theme.radius.shapeFull,
          }}
        ></Box>
      )}
    </Stack>
  );
};

export default Label;
