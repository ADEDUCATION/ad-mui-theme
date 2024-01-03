import {
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import Label from "../Label";
import { useState } from "react";
import StyledIcon from "../../components/StyledIcon";
import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import { CustomInputProps } from "../type";
import CustomHelperText from "../CustomHelperText";

const CustomLinkInput = ({
  requiredValue,
  helperTextValue,
  disabled,
  variant,
}: CustomInputProps) => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const field = {
    startUrl: "https://",
    id: "cfa_website",
    label: "Site web",
    type: "text",
    mandatory: requiredValue as boolean,
    disabled: disabled as boolean,
    helperText: helperTextValue,
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
          setValue(field.startUrl + e.target.value);
        }}
        fullWidth
        name={field.id}
        disabled={field.disabled}
        size="small"
        type="text"
        variant={variant}
        InputProps={{
          endAdornment: (
            <Stack
              direction="row"
              gap={theme.space.xs}
              sx={{
                marginRight: theme.space.md,
              }}
            >
              <IconButton
                color="neutralDark-ghost"
                size="medium"
                disabled={field.disabled}
              >
                <StyledIcon icon={<IconCopy />} size="md" color="neutralDark" />
              </IconButton>
              <IconButton
                color="neutralDark-ghost"
                size="medium"
                disabled={field.disabled}
              >
                <StyledIcon
                  icon={<IconExternalLink />}
                  size="md"
                  color="neutralDark"
                />
              </IconButton>
            </Stack>
          ),
          startAdornment: field.startUrl && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                background: theme.palette.grey[900],
                height: "100%",
                padding: `0 ${theme.space.md}`,
                borderRight:
                  variant !== "filled"
                    ? `1px solid ${theme.palette.grey[800]}`
                    : "none",
              }}
            >
              <Typography color="grey.500">{field.startUrl}</Typography>
            </Stack>
          ),
        }}
        sx={{
          p: 0,
          "& .MuiInputBase-root": {
            p: 0,
            overflow: "hidden",
          },
        }}
      />
      {field.helperText && field.helperText?.length > 0 && (
        <CustomHelperText helperText={field.helperText} />
      )}
    </>
  );
};

export default CustomLinkInput;
