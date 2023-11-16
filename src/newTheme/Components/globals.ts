import { Props } from "./components";

const globals = ({ palette, typography, space }: Props) => ({
  MuiPopover: {
    styleOverrides: {
      paper: {
        boxShadow: "0px 4px 10px rgba(27, 35, 58, 0.1)",
      },
      root: {
        "& .MuiMenu-paper": {
          color: palette?.grey[300],
        },
      },
    },
  },
  MuiPopper: {
    styleOverrides: {
      root: {
        "& .MuiPaper-root": {
          boxSizing: "border-box",
          boxShadow: "0px 4px 10px rgba(27, 35, 58, 0.1)",
          "& .MuiAutocomplete-listbox": {
            paddingBottom: 0,
            "& .MuiAutocomplete-option": {
              backgroundColor: "transparent",
              // color: palette.grey[900],
              transition: "background-color 0.2s ease-in-out",
              padding: 0,
              '&[aria-selected="true"]': {
                backgroundColor: "transparent",
                color: palette?.primary.main,
                "& .MuiTypography-root": {
                  fontWeight: typography?.bodyBold.fontWeight,
                },
                "& .MuiSvgIcon-root": {
                  color: palette?.primary.main,
                },
              },
              "&:hover": {
                backgroundColor: palette?.primary.xlight + " !important",
                "& .MuiTypography-root": {
                  color: palette?.primary.main + " !important",
                },
                "& .MuiSvgIcon-root": {
                  color: palette?.primary.main + " !important",
                },
              },
            },
          },
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palette?.info.dark,
        color: palette?.background.paper,
        fontSize: typography?.bodyMedium.fontSize,
        fontWeight: typography?.bodyMedium.fontWeight,
        lineHeight: typography?.bodyMedium.lineHeight,
        padding: `${space?.sm} ${space?.md}`,
      },
      arrow: {
        color: palette?.info.dark,
      },
    },
  },
});

export default globals;
