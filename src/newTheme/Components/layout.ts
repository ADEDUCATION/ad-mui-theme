import { OverridesStyleRules } from "@mui/material/styles/overrides";

import { Props } from "./components";
import { alpha } from "@mui/material";

export const layout = ({
  palette,
  typography,
  radius,
  space,
}: Props): OverridesStyleRules => ({
  MuiDataGrid: {
    defaultProps: {
      disableColumnFilter: true,
      disableVirtualization: true,
      pagination: true,
    },
    styleOverrides: {
      root: {
        cursor: "pointer",
        height: 700,
        width: "100%",
        border: "none",
        "& .MuiDataGrid-cell--editing": {
          backgroundColor: "rgb(255,215,115, 0.19)",
          color: "#1a3e72",
          "& .MuiInputBase-root": {
            height: "100%",
          },
        },
        "& .MuiDataGrid-columnHeaders": {
          border: "none",
          color: palette?.grey[500],
          fontSize: typography?.bodyLight.fontSize,
        },
        "& .MuiDataGrid-iconButtonContainer": {
          "& .MuiButtonBase-root": {
            "&:hover": {
              backgroundColor: palette?.grey[900] + "!important",
            },
            "&:focus": {
              "& .MuiSvgIcon-root": {
                color: palette?.primary.main,
              },
            },
          },
        },
        "& .MuiDataGrid-footerContainer": {
          border: "none",
          fontSize: typography?.bodyLight.fontSize,
          "& .MuiTablePagination-root": {
            color: palette?.grey[400],
            fontSize: typography?.bodyLight.fontSize,

            "& .MuiSvgIcon-root": {
              color: palette?.grey[400],
            },
            "& .MuiTablePagination-actions": {
              "& .Mui-disabled": {
                "& .MuiSvgIcon-root": {
                  color: palette?.grey[600] + "!important",
                },
              },
            },
          },
        },
        "& .MuiDataGrid-row": {
          backgroundColor: palette?.background.paper,
          "&:hover": {
            backgroundColor: palette?.grey[800],
          },
        },
        "& .MuiDataGrid-cell": {
          borderColor: palette?.grey[800],
          color: palette?.grey[200],
          "& .MuiButtonBase-root": {
            "&:hover": {
              backgroundColor: palette?.primary.light,
              color: palette?.primary.light,
              "& .MuiSvgIcon-root": {
                color: palette?.primary.light,
              },
            },
          },
        },
        "& .MuiInputBase-root": {
          height: "100%",
          m: 0,
          position: "relative",
          "&.MuiInput-underline": {
            "& .MuiSvgIcon-root": {
              color: palette?.grey[300] + " !important",
            },
          },
          "& .MuiButtonBase-root": {
            "&:hover": {
              backgroundColor: palette?.primary.A10 + " !important",
              "& .MuiSvgIcon-root": {
                color: palette?.primary.light + " !important",
              },
            },
          },
          "&:hover": {
            "&:not(.Mui-disabled, .Mui-error)": {
              "&:before": {
                borderBottom: `2px solid ${palette?.primary.main} !important`,
              },
            },
          },
        },
        "& .Mui-error": {
          // backgroundColor: `rgb(126,10,15, ${
          //   palette?.mode === "dark" ? 0 : 0.1
          // })`,
          color: palette?.error.main,
        },
        "& .MuiDataGrid-overlay": {
          color: palette?.grey[400],
        },
        "& .MuiDataGrid-columnHeader": {
          "&:hover": {
            "& .MuiDataGrid-columnHeaderDraggableContainer": {
              "& .MuiDataGrid-menuIcon": {
                "& .MuiButtonBase-root": {
                  "&:hover": {
                    backgroundColor: palette?.grey[900] + "!important",
                  },
                  "& .MuiSvgIcon-root": {
                    color: palette?.grey[400] + " !important",
                  },
                },
              },
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                "& .MuiDataGrid-iconButtonContainer": {
                  "& .MuiButtonBase-root": {
                    "& .MuiSvgIcon-root": {
                      color: palette?.grey[400] + " !important",
                    },
                  },
                },
              },
            },
            "& .MuiDataGrid-columnSeparator": {
              "& .MuiSvgIcon-root": {
                color: palette?.grey[500],
              },
            },
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            "& .MuiDataGrid-iconButtonContainer": {
              "& .MuiButtonBase-root": {
                "& .MuiSvgIcon-root": {
                  color: palette?.grey[400] + " !important",
                },
              },
            },
          },
        },
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        transition: "0.2s",
        fontSize: "15px",
        color: palette?.grey[300],
        zIndex: 9,
        flexDirection: "row",
        gap: space?.sm,
        fontWeight: "800",
        minWidth: "100px",
        padding: `0 ${space?.xl}`,
        "&:hover": {
          background: palette?.primary.xlight,
          color: palette?.primary.main,
          borderBottom: "2px solid",
          borderColor: palette?.primary.light,
          "& .MuiSvgIcon-root": {
            color: palette?.primary.main,
          },
        },
        "&.Mui-selected": {
          color: palette?.primary.main,
          background: palette?.primary.xlight,
          outline: "none",
        },
        "& .MuiSvgIcon-root": {
          margin: 0,
          color: palette?.primary.main,
        },
      },
    },
  },
  MuiTabs: {
    defaultProps: {
      variant: "scrollable",
      scrollButtons: "auto",
      allowScrollButtonsMobile: true,
    },
    styleOverrides: {
      root: {
        borderBottom: "1px solid",
        borderColor: palette?.grey[800],
        backgroundColor: palette?.background.paper,
        // "& button": {
        //   paddingLeft: 20,
        //   paddingRight: 20,
        // },
        "& .MuiTabScrollButton-root": {
          transition: "0.2s",
          color: palette?.primary.main,
          "&:hover": {
            color: palette?.primary.light,
          },
        },
        "& .MuiTabScrollButton-root.Mui-disabled": {
          opacity: 1,
          color: palette?.grey[700],
        },
        "& .MuiTabs-indicator": {
          display: "flex",
          justifyContent: "center",
          backgroundColor: palette?.primary.light,
          zIndex: 10,
          bottom: -1,
          height: 3,
        },
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        "& .react-tel-input": {
          border: "1px solid",
          borderColor: palette?.grey[700],
          borderRadius: radius?.input,
          margin: "1px",
          "&.disabled": {
            borderColor: palette?.grey[800],
            "&:hover": {
              borderColor: palette?.grey[800],
            },
          },
          "&:hover:not(.disabled)": {
            borderColor: palette?.grey[600] + " !important",
          },
          "&:focus-within": {
            margin: 0,
            border: "2px solid",
            borderColor: palette?.color5.main + " !important",
          },

          "&.filled": {
            border: "none",
            margin: "2px",
            "&:hover": {
              border: "1px solid",
              margin: "1px",
              borderColor: palette?.grey[600] + " !important",
            },
            "&:focus-within": {
              margin: 0,
              border: "2px solid",
              borderColor: palette?.color5.main + " !important",
            },
            "&.disabled": {
              "&:hover": {
                margin: "2px",
                border: "none",
              },
            },
          },
          "& .form-control": {
            width: "100% !important",
            minHeight: "44px",
            color: palette?.grey[300],
            fontWeight: typography?.bodyMedium.fontWeight,
            fontFamily: typography?.fontFamily,
            border: "none",
            "&.invalid-number": {
              border: "none !important",
              background: "none !important",
              "&:focus": {
                border: "none !important",
                background: "none !important",
              },
            },
            "&:disabled": {
              color: palette?.grey[700],
            },
          },
          "& .flag-dropdown": {
            border: "none",
            borderRadius: radius?.input + " 0 0 " + radius?.input,
            "&:hover": {
              borderRadius: radius?.input + " 0 0 " + radius?.input,
              "& .selected-flag": {
                borderRadius: radius?.input + " 0 0 " + radius?.input,
              },
            },
          },
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        "& .MuiDivider-root": {
          borderColor: palette?.grey[800],
        },
        padding: `${space?.md} ${space?.xl}`,
        borderRadius: radius?.shapeSm + " !important",
        "& .MuiAccordionSummary-root": {
          padding: 0,
          "&.MuiButtonBase-root": {
            minHeight: "auto",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        },
        "& .MuiAccordionDetails-root": {
          padding: 0,
          marginTop: space?.md,
          marginBottom: space?.sm,
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: space?.["3xl"],
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: {
        "&.sidebar": {
          flexShrink: 0,
          width: "270px",
          "& .MuiDrawer-paper": {
            backgroundColor: palette?.background.surface1,
            color: "grey.100",
            padding: `${space?.["3xl"]} ${space?.xl}`,
            display: "flex",
            gap: space?.["3xl"],
            alignItems: "center",

            "& .sidebar-logo": {
              width: "100%",
              justifyContent: "center",
              display: "flex",
              marginTop: "40px",
              marginBottom: space?.["2xl"],
              "&:hover": { cursor: "pointer" },
              "& svg": {
                width: "100%",
                height: "auto",
                maxWidth: "100px",
              },
            },

            "& .MuiList-root": {
              width: 270,
              paddingTop: "3.5rem",
              "& .MuiListItem-root": {
                padding: "0",
                transition: "0.2s",
                "&:hover": {
                  backgroundColor: palette?.primary.main,
                },
                "& .MuiListItemIcon-root": {
                  color: palette?.grey[900],
                  minWidth: "auto",
                },
              },
            },
          },
        },
      },
    },
  },
  MuiTabPanel: {
    styleOverrides: {
      root: {
        paddingTop: space?.lg,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      vertical: {
        marginRight: space?.md,
        marginLeft: space?.md,
      },
      middle: {
        marginTop: space?.md,
        marginBottom: space?.md,
        width: "80%",
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: radius?.input,
        padding: `${space?.sm} ${space?.lg}`,
        "& .MuiAlertTitle-root": {
          fontWeight: typography?.h6.fontWeight,
          fontSize: typography?.h6.fontSize,
          marginBottom: 0,
        },
        "& .MuiButton-root": {
          "&:hover": {
            backgroundColor:
              palette?.background.paper &&
              alpha(palette?.background.paper, 0.2),
          },
        },
        "& .MuiIconButton-root": {
          "&:hover": {
            backgroundColor:
              palette?.background.paper &&
              alpha(palette?.background.paper, 0.2),
          },
          "& .MuiSvgIcon-root": {
            width: "20px",
            height: "20px",
          },
        },
      },
    },
    variants: [
      {
        props: { color: "success" },
        style: {
          backgroundColor: palette?.success.main,
          color: palette?.success.contrastText,
          "& .MuiAlert-icon": {
            color: palette?.success.contrastText,
          },
        },
      },
      {
        props: { color: "info" },
        style: {
          backgroundColor: palette?.info.main,
          color: palette?.info.contrastText,
          "& .MuiAlert-icon": {
            color: palette?.info.contrastText,
          },
        },
      },
      {
        props: { color: "warning" },
        style: {
          backgroundColor: palette?.warning.main,
          color: palette?.warning.contrastText,
          "& .MuiAlert-icon": {
            color: palette?.warning.contrastText,
          },
        },
      },
      {
        props: { color: "error" },
        style: {
          backgroundColor: palette?.error.main,
          color: palette?.error.contrastText,
          "& .MuiAlert-icon": {
            color: palette?.error.contrastText,
          },
        },
      },
      {
        props: { color: "primary" },
        style: {
          backgroundColor: palette?.primary.main,
          color: palette?.primary.contrastText,
          "& .MuiAlert-icon": {
            color: palette?.primary.contrastText,
          },
        },
      },
      {
        props: { color: "secondary" },
        style: {
          backgroundColor: palette?.secondary.main,
          color: palette?.secondary.contrastText,
          "& .MuiAlert-icon": {
            color: palette?.secondary.contrastText,
          },
        },
      },
    ],
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        "& .MuiStepper-root": {
          gap: space?.sm,
          height: "40px",
          "& .MuiStep-root": {
            padding: 0,
            "& .MuiStepLabel-root": {
              flexDirection: "row-reverse",
              "& .Mui-active": {
                "& .MuiSvgIcon-root": {
                  marginLeft: space?.sm,
                  color: palette?.background.paper,
                  "& .MuiStepIcon-text": {
                    fill: palette?.grey[400],
                  },
                },
              },
              "& .Mui-completed": {
                color: palette?.background.paper,
                "& .": {
                  color: palette?.primary.main,
                },
              },
              "& .MuiStepIcon-text": {
                fontWeight: "900",
                dominantBaseline: "central",
                fontSize: "14px",
              },
              "& .MuiTypography-root": {
                width: "max-content",
              },
            },
            "& .MuiStepLabel-iconContainer": {
              paddingRight: 0,
              color: "red",
            },
          },
        },
      },
    },
  },
});
