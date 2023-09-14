import { Stack, Typography, useTheme } from "@mui/material";

const Welcome = () => {
  const theme = useTheme();

  const omitsKeys = [
    "common",
    "contrastThreshold",
    "tonalOffset",
    "mode",
    "augmentColor",
    "getContrastText",
    "augmentColor",
    "darken",
    "lighten",
    "emphasize",
    "fade",
    "getContrastRatio",
    "isLight",
    "isDark",
    "createPalette",
    "createMuiTheme",
    "createStyles",
    "createGenerateClassName",
    "createTheme",
    "divider",
    "text",
    "action",
    "body1",
    "body2",
    "button",
    "caption",
    "fontFamily",
    "fontSize",
    "fontWeightBold",
    "fontWeightLight",
    "fontWeightMedium",
    "fontWeightRegular",
    "htmlFontSize",
    "inherit",
    "overline",
    "pxToRem",
    "subtitle1",
    "subtitle2",
  ];

  return (
    <Stack direction="row">
      <Stack gap={2}>
        <Typography variant="h4">Couleurs</Typography>
        <Stack gap={2}>
          {Object.entries(theme.palette).map(([key, value]) => {
            const colorName = key;
            if (omitsKeys.includes(colorName)) return null;
            return (
              <>
                <Stack key={colorName} gap={1}>
                  <Typography variant="subtitleSemiBold">
                    {colorName}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" columnGap={3}>
                    {Object.entries(value).map(([key, value]) => {
                      const omitsKeysGrey = [
                        "50",
                        "A100",
                        "A200",
                        "A400",
                        "A700",
                      ];
                      if (colorName === "grey" && omitsKeysGrey.includes(key))
                        return null;
                      return (
                        <Stack
                          sx={{
                            width: 40,
                          }}
                          alignItems="center"
                          direction="column"
                        >
                          <Stack
                            key={key}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: 50,
                              border:
                                (colorName === "grey" && key === "900") ||
                                (colorName === "background" &&
                                  key === "default")
                                  ? "1px solid"
                                  : "none",
                              borderColor: theme.palette.grey[700],
                              backgroundColor: value as string,
                            }}
                          />
                          <Typography variant="bodyLight">{key}</Typography>
                        </Stack>
                      );
                    })}
                  </Stack>
                </Stack>
              </>
            );
          })}
        </Stack>
      </Stack>
      <Stack gap={2}>
        <Typography variant="h4">Typographies</Typography>
        <Stack>
          {Object.entries(theme.typography).map(([key]) => {
            if (omitsKeys.includes(key)) return null;
            return (
              <Typography variant={key as any} my={1}>
                Ceci est un texte en {key}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Welcome;
