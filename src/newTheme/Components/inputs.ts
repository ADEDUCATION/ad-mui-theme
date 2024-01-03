import {
  ButtonProps,
  IconButtonProps,
  FabProps,
  CheckboxProps,
  SwitchProps,
} from "@mui/material";
import { Props } from "./components";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { MuiColors } from "../Palette/utils";

const inputs = ({
  palette,
  typography,
  radius,
  space,
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
      disableelevation: true,
      variant: "contained",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: ButtonProps }) => {
        return {
          boxShadow: "none",
          textTransform: "inherit",
          borderRadius: radius?.button,
          maxWidth: "100%",
          color:
            ownerState.variant === "contained"
              ? palette && palette[ownerState.color as MuiColors].contrastText
              : ownerState.variant === "soft"
              ? palette && palette[ownerState.color as MuiColors].xdark
              : ownerState.variant === "text" &&
                ownerState.color === "neutralLight"
              ? palette && palette[ownerState.color as MuiColors].dark
              : palette && palette[ownerState.color as MuiColors].main,
          backgroundColor:
            ownerState.variant === "contained"
              ? palette && palette[ownerState.color as MuiColors].main
              : ownerState.variant === "soft"
              ? palette && palette[ownerState.color as MuiColors].xlight
              : "transparent",
          "&:hover": {
            backgroundColor:
              ownerState.variant === "contained"
                ? palette && palette[ownerState.color as MuiColors].dark
                : ownerState.variant === "soft"
                ? palette && palette[ownerState.color as MuiColors].light
                : ownerState.variant === "text"
                ? "transparent"
                : palette && palette[ownerState.color as MuiColors].xlight,
            color:
              (ownerState.variant === "text" ||
                ownerState.variant === "outlined") &&
              palette &&
              palette[ownerState.color as MuiColors].xdark,
            boxShadow: "none",
          },

          "& .MuiButton-startIcon": {
            margin: 0,
          },

          "& .MuiButton-endIcon": {
            margin: 0,
          },
          "& .MuiSvgIcon-root": {
            width: space?.xl,
            height: space?.xl,
            margin: 0,
          },
          "& .tabler-icon": {
            width: space?.xl,
            height: space?.xl,
            margin: 0,
          },
        };
      },
      sizeSmall: ({ ownerState }: { ownerState: ButtonProps }) => {
        return {
          padding:
            ownerState.variant === "text"
              ? `${space?.xs} 0`
              : ownerState.variant === "outlined"
              ? `calc(${space?.xs} - 1px) calc(${space?.md} - 1px)`
              : `${space?.xs} ${space?.md}`,
          minWidth: ownerState.variant === "text" ? 0 : "80px",
          minHeight: space?.["4xl"],
          fontSize: typography?.buttonSmall.fontSize,
          fontWeight: typography?.buttonSmall.fontWeight,
          lineHeight: typography?.buttonSmall.lineHeight,
          gap: space?.xs,
        };
      },
      sizeMedium: ({ ownerState }: { ownerState: ButtonProps }) => {
        return {
          padding:
            ownerState.variant === "text"
              ? `${space?.sm} 0`
              : ownerState.variant === "outlined"
              ? `calc(${space?.sm} - 1px) calc(${space?.lg} - 1px)`
              : `${space?.sm} ${space?.lg}`,
          minWidth: ownerState.variant === "text" ? 0 : "100px",
          minHeight: space?.["5xl"],
          fontSize: typography?.buttonMedium.fontSize,
          fontWeight: typography?.buttonMedium.fontWeight,
          lineHeight: typography?.buttonMedium.lineHeight,
          gap: space?.xs,
        };
      },
      sizeLarge: ({ ownerState }: { ownerState: ButtonProps }) => {
        return {
          padding:
            ownerState.variant === "text"
              ? 0
              : ownerState.variant === "outlined"
              ? `calc(${space?.md} - 1px) calc(${space?.xl} - 1px)`
              : `${space?.md} ${space?.xl}`,
          minWidth: ownerState.variant === "text" ? 0 : "120px",
          minHeight: space?.["7xl"],
          fontSize: typography?.buttonLarge.fontSize,
          fontWeight: typography?.buttonLarge.fontWeight,
          lineHeight: typography?.buttonLarge.lineHeight,
          gap: space?.xs,
        };
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            input: { padding: space?.md + " !important" },
          },
        },
      },
    },
  },
  MuiIconButton: {
    defaultProps: {
      disableelevation: true,
      color: "primary-ghost",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: IconButtonProps }) => {
        const [color, variant] = ownerState.color?.split("-") as string[];
        return {
          border: "none",
          boxShadow:
            variant === "outlined"
              ? `inset 0 0 0 1px ${palette && palette[color as MuiColors].main}`
              : "none",
          backgroundColor:
            variant === "contained"
              ? palette && palette[color as MuiColors].main
              : variant === "soft"
              ? palette && palette[color as MuiColors].xlight
              : "transparent",
          "& .MuiSvgIcon-root": {
            color:
              variant === "contained"
                ? palette && palette[color as MuiColors].contrastText
                : variant === "outlined"
                ? palette && palette[color as MuiColors].main
                : variant === "soft"
                ? palette && palette[color as MuiColors].xdark
                : "inherit"
                ? "inherit"
                : palette && palette[color as MuiColors].main,
          },
          "& .tabler-icon": {
            color:
              variant === "contained"
                ? palette && palette[color as MuiColors].contrastText
                : variant === "outlined"
                ? palette && palette[color as MuiColors].main
                : variant === "soft"
                ? palette && palette[color as MuiColors].xdark
                : "inherit"
                ? "inherit"
                : palette && palette[color as MuiColors].main,
          },
          "&.Mui-disabled": {
            border:
              variant === "outlined"
                ? `1px solid ${palette?.grey[700]}`
                : "none",
            backgroundColor:
              variant === "outlined" || variant === "ghost"
                ? "transparent"
                : palette?.grey[900],
            "& .MuiSvgIcon-root": {
              color: palette?.grey[700],
            },
            "& .tabler-icon": {
              color: palette?.grey[700],
            },
          },
          "&:hover": {
            boxShadow:
              variant === "outlined"
                ? `inset 0 0 0 1px ${
                    palette && palette[color as MuiColors].xdark
                  }`
                : "none",
            backgroundColor:
              variant === "contained"
                ? palette && palette[color as MuiColors].dark
                : variant === "soft"
                ? palette && palette[color as MuiColors].light
                : variant === "ghost" || variant === "outlined"
                ? palette && palette[color as MuiColors].xlight
                : "inherit",
            "& .MuiSvgIcon-root": {
              color:
                variant === "contained"
                  ? palette && palette[color as MuiColors].contrastText
                  : variant === "soft" ||
                    variant === "ghost" ||
                    variant === "outlined"
                  ? palette && palette[color as MuiColors].xdark
                  : "inherit"
                  ? "inherit"
                  : palette && palette[color as MuiColors].main,
            },
            "& .tabler-icon": {
              color:
                variant === "contained"
                  ? palette && palette[color as MuiColors].contrastText
                  : variant === "soft" ||
                    variant === "ghost" ||
                    variant === "outlined"
                  ? palette && palette[color as MuiColors].xdark
                  : "inherit"
                  ? "inherit"
                  : palette && palette[color as MuiColors].main,
            },
          },
        };
      },
      sizeXsmall: {
        padding: space?.xs,
        "& .MuiSvgIcon-root": {
          width: space?.md,
          height: space?.md,
        },
        "& .tabler-icon": {
          width: space?.md,
          height: space?.md,
        },
      },
      sizeSmall: {
        padding: space?.sm,
        "& .MuiSvgIcon-root": {
          width: space?.md,
          height: space?.md,
        },
        "& .tabler-icon": {
          width: space?.md,
          height: space?.md,
        },
      },
      sizeMedium: {
        padding: space?.sm,
        "& .MuiSvgIcon-root": {
          width: space?.lg,
          height: space?.lg,
        },
        "& .tabler-icon": {
          width: space?.lg,
          height: space?.lg,
        },
      },
      sizeLarge: {
        padding: space?.sm,
        "& .MuiSvgIcon-root": {
          width: space?.xl,
          height: space?.xl,
        },
        "& .tabler-icon": {
          width: space?.xl,
          height: space?.xl,
        },
      },
      sizeXlarge: {
        padding: space?.sm,
        "& .MuiSvgIcon-root": {
          width: space?.["2xl"],
          height: space?.["2xl"],
        },
        "& .tabler-icon": {
          width: space?.["2xl"],
          height: space?.["2xl"],
        },
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: ({ ownerState }: { ownerState: FabProps }) => {
        return {
          position: "fixed",
          bottom: space?.lg,
          right: space?.lg,
          textTransform: "inherit",
          width: "inherit",
          height: "inherit",

          "& .MuiSvgIcon-root": {
            width: space?.["3xl"],
            height: space?.["3xl"],
          },

          "& .tabler-icon": {
            width: space?.["3xl"],
            height: space?.["3xl"],
          },
          borderRadius: radius?.floatingButton,
          border: "none",
          boxShadow:
            ownerState.variant === "outlined"
              ? `inset 0 0 0 1px ${
                  palette && palette[ownerState.color as MuiColors].main
                }`
              : "none",
          color:
            ownerState.variant === "contained"
              ? palette && palette[ownerState.color as MuiColors].contrastText
              : ownerState.variant === "soft"
              ? palette && palette[ownerState.color as MuiColors].xdark
              : palette && palette[ownerState.color as MuiColors].main,
          backgroundColor:
            ownerState.variant === "contained"
              ? palette && palette[ownerState.color as MuiColors].main
              : ownerState.variant === "soft"
              ? palette && palette[ownerState.color as MuiColors].xlight
              : "transparent",

          "&.Mui-disabled": {
            border:
              ownerState.variant === "outlined"
                ? `1px solid ${palette?.grey[700]}`
                : "none",
            backgroundColor:
              ownerState.variant === "outlined" ||
              ownerState.variant === "ghost"
                ? "transparent"
                : palette?.grey[900],
            color: palette?.grey[700],
          },
          "&:hover": {
            borderColor:
              ownerState.variant === "outlined" &&
              palette &&
              palette[ownerState.color as MuiColors].dark,
            backgroundColor:
              ownerState.variant === "contained"
                ? palette && palette[ownerState.color as MuiColors].dark
                : ownerState.variant === "soft"
                ? palette && palette[ownerState.color as MuiColors].light
                : palette && palette[ownerState.color as MuiColors].xlight,
            color:
              (ownerState.variant === "outlined" ||
                ownerState.variant === "ghost") &&
              palette &&
              palette[ownerState.color as MuiColors].xdark,
            boxShadow: "none",
          },
        };
      },

      sizeSmall: {
        padding: `${space?.xs}`,
      },
      sizeMedium: {
        padding: `${space?.sm}`,
      },
      sizeLarge: {
        padding: `${space?.md}`,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: palette && palette.grey[300],
        fontWeight: typography?.subtitleMedium.fontWeight,
        height: space?.["8xl"],
        "&.MuiOutlinedInput-root": {
          paddingRight: 0,
          border: palette?.grey[700] + " 1px solid !important",
          "&:hover": {
            borderColor: palette?.grey[600] + " !important",
          },
          "&.Mui-disabled": {
            borderColor: palette?.grey[700] + "!important",
            "&:hover": {
              borderColor: palette?.grey[700] + "!important",
            },
          },
          "&.Mui-focused": {
            borderColor: palette?.color5.main + " !important",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "unset !important",
            },
          },
        },
        "& .MuiNativeSelect-select": {
          marginBottom: space?.["2xs"],
        },
        "&.MuiFilledInput-root": {
          "&.MuiAutocomplete-inputRoot": {
            padding: 0,
            "&.Mui-disabled": {
              backgroundColor: palette?.background.default,
            },
          },
          "&.Mui-disabled": {
            backgroundColor: palette?.background.default,
          },
          paddingRight: 0,
          backgroundColor: palette?.background.default,
          borderRadius: radius?.shapeXs,
          border: "1px solid transparent",
          "&:hover": {
            border: `1px solid ${palette?.grey[800]}`,
            backgroundColor: palette?.background.default,
          },
          "&.Mui-focused": {
            backgroundColor: palette?.background.default,
            border: `1px solid ${palette?.color5.main}`,
            "&:hover": {
              border: `1px solid ${palette?.color5.main}`,
            },
          },
          "& .MuiInputAdornment-root": {
            marginTop: 0 + " !important",
          },
          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
        },
        "& input": {
          fontSize: typography?.subtitleMedium.fontSize,
          padding: space?.md + " !important",
          "&::placeholder": {
            opacity: 1,
            transition: "unset !important",
          },
        },
        "& select": {
          fontSize: typography?.subtitleMedium.fontSize,
          "&.MuiFilledInput-input": {
            padding: space?.md + " !important",
            backgroundColor: "transparent",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none !important",
        },
        "&:hover": {
          // "& .MuiOutlinedInput-notchedOutline": {
          //   borderColor: palette?.grey[600] + " !important",
          // },
          "&.Mui-disabled": {
            "&.MuiFilledInput-root": {
              borderColor: "transparent !important",
            },
            "&.MuiOutlinedInput-root": {
              boderColor: palette?.grey[800] + "!important",
            },
          },
        },
        "&.Mui-disabled input": {
          WebkitTextFillColor: palette?.grey[600] + " !important",
          "&::placeholder": {
            WebkitTextFillColor: palette?.grey[600] + " !important",
            opacity: 1,
          },
        },
        "&.Mui-disabled select": {
          WebkitTextFillColor: palette?.grey[700],
        },
        "&.Mui-disabled": {
          // "& .MuiOutlinedInput-notchedOutline": {
          //   borderColor: palette?.grey[800] + "!important",
          // },
          // "&:hover": {
          //   boderColor: palette?.grey[700] + "!important",
          // },
          "& .MuiInputAdornment-root": {
            "& .MuiTypography-root": {
              color: palette?.grey[700],
            },
            "& .MuiButtonBase-root": {
              padding: space?.sm,
              "& .MuiSvgIcon-root": {
                color: palette?.grey[700],
                marginRight: "-1px",
              },
              "& .tabler-icon": {
                color: palette?.grey[700],
                marginRight: "-1px",
              },
            },
          },
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid !important",
            borderColor: palette?.color5.main + " !important",
          },
        },
        "& .MuiInputAdornment-root": {
          "& .MuiTypography-root": {
            fontSize: typography?.subtitleMedium.fontSize,
            fontWeight: typography?.subtitleMedium.fontWeight,
            lineHeight: typography?.subtitleMedium.lineHeight,
          },
          "& .MuiButtonBase-root": {
            padding: space?.sm,
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
            borderRadius: radius?.shapeFull,
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
      root: ({ ownerState }: { ownerState: CheckboxProps }) => {
        return {
          marginRight: space?.["3xs"],
          color:
            ownerState.color === "neutralLight"
              ? palette?.neutralLight.main
              : palette?.neutralDark.main,
          transition: "all 0.2s ease-in-out",
          "& + .MuiTypography-root": {
            color:
              ownerState.color === "neutralLight"
                ? palette?.neutralLight.main
                : palette?.neutralDark.main,
            fontSize: typography?.subtitleMedium.fontSize,
            fontWeight: typography?.subtitleMedium.fontWeight,
            lineHeight: typography?.subtitleMedium.lineHeight,
          },
          "&.Mui-checked": {
            color: palette && palette[ownerState.color as MuiColors].main,
          },
          "&:hover": {
            color: palette && palette[ownerState.color as MuiColors].main,
            backgroundColor:
              palette && palette[ownerState.color as MuiColors].A10,
          },
          "&.Mui-disabled": {
            color: palette?.grey[700],
            "& + .MuiTypography-root": {
              color: palette?.grey[700],
            },
          },
        };
      },
      sizeSmall: {
        padding: space?.md,
        maxWidth: space?.["5xl"],
        maxHeight: space?.["5xl"],
        "& .MuiSvgIcon-root": {
          width: space?.lg,
          height: space?.lg,
        },
      },
      sizeMedium: {
        padding: space?.md,
        maxWidth: space?.["6xl"],
        maxHeight: space?.["6xl"],
        "& .MuiSvgIcon-root": {
          width: space?.xl,
          height: space?.xl,
        },
      },
      sizeLarge: {
        padding: space?.lg,
        maxWidth: space?.["7xl"],
        maxHeight: space?.["7xl"],
        "& .MuiSvgIcon-root": {
          width: space?.["2xl"],
          height: space?.["2xl"],
        },
      },
    },
  },
  // MuiSelect: {
  //   styleOverrides: {
  //     root: {
  //       // minHeight: 60,
  //       "& .MuiSelect-root": {
  //         color: palette?.grey[500],
  //       },
  //       "& .MuiSvgIcon-root": {
  //         color: palette?.grey[500] + " !important",
  //       },
  //       "& .tabler-icon": {
  //         color: palette?.grey[500] + " !important",
  //       },
  //       "& .MuiSelect-icon": {
  //         color: palette?.grey[200],
  //       },
  //       "& .MuiInputBase-root": {
  //         color: palette?.grey[500],
  //       },
  //       "& .MuiOutlinedInput-notchedOutline": {
  //         borderColor: palette?.grey[500],
  //       },
  //       // "&.Mui-disabled": {
  //       //   "& .MuiOutlinedInput-notchedOutline": {
  //       //     borderColor: palette?.grey[800] + "!important",
  //       //   },
  //       // },
  //     },
  //   },
  // },
  MuiRadio: {
    styleOverrides: {
      root: ({ ownerState }: { ownerState: CheckboxProps }) => {
        return {
          padding: space?.md,
          maxWidth: space?.["6xl"],
          maxHeight: space?.["6xl"],
          "& .MuiSvgIcon-root": {
            width: space?.xl,
            height: space?.xl,
          },
          marginRight: space?.["3xs"],
          color:
            ownerState.color === "neutralLight"
              ? palette?.neutralLight.main
              : palette?.neutralDark.main,
          transition: "all 0.2s ease-in-out",
          "& + .MuiTypography-root": {
            color:
              ownerState.color === "neutralLight"
                ? palette?.neutralLight.main
                : palette?.neutralDark.main,
            fontSize: typography?.subtitleMedium.fontSize,
            fontWeight: typography?.subtitleMedium.fontWeight,
            lineHeight: typography?.subtitleMedium.lineHeight,
          },
          "&.Mui-checked": {
            color: palette && palette[ownerState.color as MuiColors].main,
          },
          "&:hover": {
            color: palette && palette[ownerState.color as MuiColors].main,
            backgroundColor:
              palette && palette[ownerState.color as MuiColors].A10,
          },
          "&.Mui-disabled": {
            color: palette?.grey[700],
            "& + .MuiTypography-root": {
              color: palette?.grey[700],
            },
          },
        };
      },
      sizeSmall: {
        padding: space?.md,
        maxWidth: space?.["5xl"],
        maxHeight: space?.["5xl"],
        "& .MuiSvgIcon-root": {
          width: space?.lg,
          height: space?.lg,
        },
      },
      sizeLarge: {
        padding: space?.lg,
        maxWidth: space?.["7xl"],
        maxHeight: space?.["7xl"],
        "& .MuiSvgIcon-root": {
          width: space?.["2xl"],
          height: space?.["2xl"],
        },
      },
    },
  },
  // MuiFormControlLabel: {
  //   styleOverrides: {
  //     root: {
  //       color: palette?.grey[500],
  //       "& .MuiRadio-root": {
  //         color: palette?.grey[500],
  //         "&.Mui-disabled": {
  //           "& + .MuiTypography-root": {
  //             color: palette?.grey[600],
  //           },
  //         },
  //         "&.Mui-checked": {
  //           color: palette?.primary.main,
  //           "& + .MuiTypography-root": {
  //             color: palette?.primary.main,
  //           },
  //         },
  //       },
  //       "& .MuiTypography-root": {
  //         fontWeight: typography?.subtitleBold.fontWeight,
  //       },
  //     },
  //   },
  // },
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
        "& [type='search']::-webkit-search-cancel-button": {
          // WebkitAppearance: "none",
          color: palette?.grey[500] + " !important",
          backgroundColor: "transparent",
        },
        "& .MuiInputBase-root": {
          paddingLeft: space?.md + " !important",
          "& input": {
            padding: 0 + " !important",
          },
        },
        "&.MuiAutocomplete-hasPopupIcon": {
          "& .MuiFormControl-root": {
            "& .MuiInputBase-root": {
              minHeight: space?.["8xl"],
              height: "auto",
            },
          },
          "& .MuiAutocomplete-endAdornment": {
            "& .MuiIconButton-root": {
              "&.MuiAutocomplete-popupIndicator": {
                "&:hover": {
                  backgroundColor: "transparent",
                  "& .MuiSvgIcon-root": {
                    color: palette?.grey[400],
                  },
                },
              },

              "&.MuiAutocomplete-clearIndicator": {
                "&:hover": {
                  backgroundColor: "transparent",
                  "& .MuiSvgIcon-root": {
                    color: palette?.primary.main,
                  },
                },
              },

              padding: 0,
              width: space?.xl,
              height: space?.xl,
              "& .MuiSvgIcon-root": {
                width: space?.xl,
                height: space?.xl,
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
        // "&:hover .MuiInputBase-root .MuiAutocomplete-endAdornment .MuiIconButton-root svg":
        //   {
        //     color: palette?.primary.main,
        //   },
        // "&:active .MuiInputBase-root .MuiAutocomplete-endAdornment .MuiIconButton-root svg":
        //   {
        //     color: palette?.primary.main,
        //   },
        // "&:hover .MuiFormLabel-root": {
        //   color: palette?.primary.main,
        // },
        // "& .MuiInputBase-root .MuiAutocomplete-endAdornment .MuiIconButton-root svg":
        //   {
        //     color: palette?.grey[400],
        //     "&:hover": {
        //       color: palette?.primary.main,
        //     },
        //   },
        // "& .MuiAutocomplete-popupIndicator": {
        //   color: palette?.primary.main,
        // },
        // "& .MuiAutocomplete-clearIndicator": {
        //   color: palette?.primary.main,
        // },
        "& .MuiChip-root": {
          "& .MuiChip-deleteIcon": {
            color: palette?.primary.xdark,
            "&:hover": {
              color: palette?.primary.xdark,
            },
          },
        },
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      disableelevation: true,
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ ownerState }: { ownerState: SwitchProps }) => {
        return {
          "& .Mui-checked": {
            "& .MuiSwitch-thumb": {
              boxShadow: `0px 1.5px 2px 0px ${
                palette && palette[ownerState.color as MuiColors].main
              }60;`,
            },
          },
        };
      },
    },
  },
});

export default inputs;
