import { Box, Stack, Typography, useTheme } from "@mui/material";

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
    <Stack direction="row" gap={5}>
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
      <Stack>
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
        <Stack gap={2}>
          <Typography variant="h4">Border radius</Typography>
          <Stack>
            {Object.entries(theme.borderRadius).map(([key]) => {
              return (
                <Box
                  my={1}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.grey[500],
                    borderRadius: theme.borderRadius[key] + "px",
                    padding: 2,
                  }}
                >
                  Un borderRadius de type {key} = {theme.borderRadius[key]} px
                </Box>
              );
            })}
          </Stack>
        </Stack>
        <Stack gap={2}>
          <Typography variant="h4">Gap</Typography>
          <Stack gap={theme.gap.md + "px"}>
            {Object.entries(theme.gap).map(([key]) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitleMedium">
                    Un gap de type {key} = {theme.gap[key]} px
                  </Typography>
                  <Stack direction="row" gap={theme.gap[key] + "px"}>
                    {Array.from(Array(3).keys()).map((i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: theme.palette.background.paper,
                          width: 50,
                          height: 50,
                        }}
                      ></Box>
                    ))}
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Welcome;
