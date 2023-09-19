import { ButtonProps } from "@mui/material";
import { Props } from "./components";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { MuiColors } from "../Palette/utils";

const inputs = ({
  palette,
  typography,
  borderRadius,
}: Props): OverridesStyleRules => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: palette?.grey[500],
        "&.user-modify": {
          fontSize: typography?.bodyBold.fontSize,
          fontWeight: typography?.bodyBold.fontWeight,
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: ButtonProps }) => {
        return {
          padding: "0.5rem 1.2rem",
          boxShadow: "none",
          textTransform: "inherit",
          "&:hover": {
            backgroundColor:
              ownerState.variant === "contained"
                ? palette && palette[ownerState.color as MuiColors].light
                : ownerState.variant === "text" &&
                  palette &&
                  palette[ownerState.color as MuiColors].A20,
            color:
              ownerState.variant === "text" &&
              palette &&
              palette[ownerState.color as MuiColors].light,

            boxShadow: "none",
          },
        };
      },
      sizeSmall: {
        padding: "0.625rem 0.875rem",
        fontSize: typography?.bodyBold.fontSize,
        fontWeight: typography?.bodyBold.fontWeight,
      },
      sizeMedium: {
        padding: "0.625rem 1rem",
        fontSize: typography?.subtitleBold.fontSize,
        fontWeight: typography?.subtitleBold.fontWeight,
      },
      sizeLarge: {
        padding: "0.75rem 1.125rem",
        fontSize: typography?.h6.fontSize,
        fontWeight: typography?.subtitleBold.fontWeight,
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            input: { padding: "10px !important" },
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        "&.MuiIconButton-sizeSmall": {
          padding: "6px",
          "& .MuiSvgIcon-root": {
            width: "16px",
            height: "16px",
          },
        },
        "&.MuiIconButton-sizeMedium": {
          padding: "8px",
          "& .MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
          },
        },
      },
    },
    variants: [
      {
        props: { color: "primary" },
        style: {
          backgroundColor: palette?.grey[900] + " !important",
          "& .MuiSvgIcon-root": {
            color: palette?.grey[500] + " !important",
          },
          "& .tabler-icon": {
            color: palette?.grey[500] + " !important",
          },
          "&:hover": {
            backgroundColor: palette?.primary.light + " !important",
            "& .MuiSvgIcon-root": {
              color: palette?.primary.contrastText + " !important",
            },
            "& .MuiCircularProgress-root": {
              color: palette?.primary.contrastText + " !important",
            },
            "& .tabler-icon": {
              color: palette?.primary.contrastText + " !important",
            },
          },
        },
      },
      {
        props: { color: "secondary" },
        style: {
          backgroundColor: palette?.secondaryBase[900] + " !important",
          "& .MuiSvgIcon-root": {
            color: palette?.secondaryBase[300] + " !important",
          },
          "& .tabler-icon": {
            color: palette?.secondaryBase[300] + " !important",
          },
          "&:hover": {
            backgroundColor: palette?.primary.light + " !important",
            "& .MuiSvgIcon-root": {
              color: palette?.background.default + " !important",
            },
            "& .tabler-icon": {
              color: palette?.background.default + " !important",
            },
          },
        },
      },
      {
        props: { color: "default" },
        style: {
          "& .MuiSvgIcon-root": {
            color: palette?.grey[300] + " !important",
          },
          "& .tabler-icon": {
            color: palette?.grey[300] + " !important",
          },
          "&:hover": {
            backgroundColor: palette?.grey[800] + " !important",
          },
        },
      },
      {
        props: { color: "actionable" },
        style: {
          "& .MuiSvgIcon-root": {
            color: palette?.grey[300] + " !important",
          },
          "& .tabler-icon": {
            color: palette?.grey[300] + " !important",
          },
          "&:hover": {
            backgroundColor: palette?.primary.A10 + " !important",
            "& .MuiSvgIcon-root": {
              color: palette?.primary.light + " !important",
            },
            "& .tabler-icon": {
              color: palette?.primary.light + " !important",
            },
          },
        },
      },
      {
        props: { color: "outlined" },
        style: {
          border: "1px solid " + palette?.background.paper + " !important",
          "& .MuiSvgIcon-root": {
            color: palette?.background.paper + " !important",
          },
          "& .tabler-icon": {
            color: palette?.background.paper + " !important",
          },
          "&:hover": {
            backgroundColor: palette?.background.paper + " !important",
            "& .MuiSvgIcon-root": {
              color: palette?.color1.contrastText + " !important",
            },
            "& .tabler-icon": {
              color: palette?.color1.contrastText + " !important",
            },
          },
        },
      },
      {
        props: { color: "error" },
        style: {
          backgroundColor: palette?.error.main + " !important",
          "& .MuiSvgIcon-root": {
            color: palette?.error.contrastText + " !important",
          },
          "& .tabler-icon": {
            color: palette?.error.contrastText + " !important",
          },
        },
      },
      {
        props: { color: "success" },
        style: {
          backgroundColor: palette?.success.main + " !important",
          "& .MuiSvgIcon-root": {
            color: palette?.success.contrastText + " !important",
          },
          "& .tabler-icon": {
            color: palette?.success.contrastText + " !important",
          },
        },
      },
      {
        props: { color: "delete" },
        style: {
          "&:hover": {
            backgroundColor: palette?.error.A10 + " !important",
            "& .MuiSvgIcon-root": {
              color: palette?.error.main + " !important",
            },
            "& .tabler-icon": {
              color: palette?.error.main + " !important",
            },
          },
        },
      },
    ],
  },
  MuiFab: {
    styleOverrides: {
      root: {
        position: "fixed",
        bottom: 16,
        right: 16,
        boxShadow: "none",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: palette && palette.grey[300],
        fontWeight: typography?.subtitleMedium.fontWeight,
        height: 44,
        "& input": {
          fontSize: typography?.subtitleMedium.fontSize,
        },
        "& select": {
          fontSize: typography?.subtitleMedium.fontSize,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette?.grey[700] + " !important",
        },
        "&:hover": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette?.primary.main + " !important",
          },
        },
        "&.Mui-disabled input": {
          WebkitTextFillColor: palette?.grey[700],
        },
        "&.Mui-disabled select": {
          WebkitTextFillColor: palette?.grey[700],
        },
        "&.Mui-disabled": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette?.grey[800] + "!important",
          },
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette?.primary.main + " !important",
          },
          "& .MuiSvgIcon-root": {
            color: palette?.primary.main + " !important",
          },
          "& .tabler-icon": {
            color: palette?.primary.main + " !important",
          },
        },
        "& .MuiInputAdornment-root": {
          "& .MuiButtonBase-root": {
            padding: "10px",
            "& .MuiSvgIcon-root": {
              color: palette?.grey[500],
              marginRight: "-1px",
            },
            "& .tabler-icon": {
              color: palette?.grey[500],
              marginRight: "-1px",
            },
          },
          "&.info": {
            color: palette?.color1.main,
            borderRadius: 50,
            backgroundColor: palette?.color1.contrastText,
            width: 18,
            height: 18,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "& .MuiSvgIcon-root": {
              color: palette?.color1.main + " !important",
              marginRight: "-1px",
            },
            "& .tabler-icon": {
              color: palette?.color1.main + " !important",
              marginRight: "-1px",
            },
          },
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: palette?.grey[500],
        "& + .MuiTypography-root": {
          color: palette?.grey[500],
        },
        "&.Mui-checked": {
          color: palette?.primary.main,
          "& + .MuiTypography-root": {
            color: palette?.primary.main,
          },
        },
        "&:hover": {
          color: palette?.primary.main,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        color: palette?.grey[500],
        "& .MuiRadio-root": {
          color: palette?.grey[500],
          "&.Mui-disabled": {
            "& + .MuiTypography-root": {
              color: palette?.grey[600],
            },
          },
          "&.Mui-checked": {
            color: palette?.primary.main,
            "& + .MuiTypography-root": {
              color: palette?.primary.main,
            },
          },
        },
        "& .MuiTypography-root": {
          fontWeight: typography?.subtitleBold.fontWeight,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        // minHeight: 60,
        "& .MuiSelect-root": {
          color: palette?.grey[500],
        },
        "& .MuiSvgIcon-root": {
          color: palette?.grey[500] + " !important",
        },
        "& .tabler-icon": {
          color: palette?.grey[500] + " !important",
        },
        "& .MuiSelect-icon": {
          color: palette?.grey[200],
        },
        "& .MuiInputBase-root": {
          color: palette?.grey[500],
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette?.grey[500],
        },
        // "&.Mui-disabled": {
        //   "& .MuiOutlinedInput-notchedOutline": {
        //     borderColor: palette?.grey[800] + "!important",
        //   },
        // },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        "&.MuiAutocomplete-hasPopupIcon": {
          "& .MuiFormControl-root": {
            "& .MuiInputBase-root": {
              minHeight: 52,
              height: "auto",
            },
          },
          "& .MuiAutocomplete-endAdornment": {
            "& .MuiIconButton-root": {
              padding: 0,
              width: 24,
              height: 24,
              "& .MuiSvgIcon-root": {
                width: 24,
                height: 24,
              },
            },
          },
        },
        "&:hover": {
          "& .MuiFormControl-root": {
            "& .MuiInputBase-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: palette?.primary.main,
              },
            },
          },
        },
        "&:hover .MuiInputBase-root .MuiAutocomplete-endAdornment .MuiIconButton-root svg":
          {
            color: palette?.primary.main,
          },
        "&:active .MuiInputBase-root .MuiAutocomplete-endAdornment .MuiIconButton-root svg":
          {
            color: palette?.primary.main,
          },
        // "&:hover .MuiFormLabel-root": {
        //   color: palette?.primary.main,
        // },
        "& .MuiInputBase-root .MuiAutocomplete-endAdornment .MuiIconButton-root svg":
          {
            color: palette?.grey[400],
          },
        "& .MuiAutocomplete-popupIndicatorOpen": {
          color: palette?.primary.main,
        },
        "& .MuiAutocomplete-clearIndicator": {
          color: palette?.primary.main,
        },
        "& .MuiAutocomplete-tag": {
          backgroundColor: palette?.primaryBase[900],
          color: palette?.primary.main,
          "& .MuiChip-deleteIcon": {
            color: palette?.primary.main,
            transition: "color 0.2s ease-in-out",
            "&:hover": {
              color: palette?.primary.light + " !important",
            },
          },
        },
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      disableElevation: true,
    },
  },
});

export default inputs;
