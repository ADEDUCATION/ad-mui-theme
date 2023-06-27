import { Props } from "./components";

const globals = ({ palette, typography }: Props) => ({
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
                backgroundColor: palette?.primaryBase[900] + " !important",
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
        backgroundColor: palette?.grey[300],
        color: palette?.grey[900],
        fontSize: '0.75rem',
        // fontStyle: 'italic',
        // fontWeight: 200,
      },
      arrow: {
        color: palette?.grey[300],
      },
    },
  },
});

export default globals;
