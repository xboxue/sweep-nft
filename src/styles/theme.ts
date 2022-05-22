import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "sans-serif",
      ].join(","),
      subtitle1: {
        fontWeight: 500,
      },
    },
    components: {
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          dense: true,
        },
      },
    },
  })
);
baseTheme.shadows[1] =
  "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";

const width = 34;
const height = 22;
const size = 15;
const gap = (22 - 15) / 2;

const theme = createTheme(
  {
    components: {
      MuiSwitch: {
        styleOverrides: {
          root: {
            width,
            height,
            padding: 0,
          },
          switchBase: {
            padding: gap,
            "&.Mui-checked": {
              color: "#fff",
              transform: `translateX(${width - 2 * (size / 2 + gap)}px)`,
              "& + .MuiSwitch-track": {
                backgroundColor: baseTheme.palette.primary.main,
                opacity: 1,
              },
            },
          },
          track: {
            borderRadius: 40,
            backgroundColor: baseTheme.palette.grey[300],
            opacity: 1,
            transition: baseTheme.transitions.create("background-color"),
          },
          thumb: {
            boxShadow: "none",
            backgroundColor: baseTheme.palette.background.default,
            width: size,
            height: size,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            [baseTheme.breakpoints.up("sm")]: { minHeight: 56 },
          },
        },
      },
      MuiMenu: {
        defaultProps: {
          elevation: 1,
          transitionDuration: 100,
        },
        styleOverrides: {
          root: {
            maxHeight: 300,
          },
          paper: {
            marginTop: baseTheme.spacing(1),
          },
        },
      },
      MuiPopover: {
        defaultProps: {
          elevation: 1,
          transitionDuration: 100,
        },
        styleOverrides: {
          paper: {
            marginTop: baseTheme.spacing(1),
          },
        },
      },
    },
  },
  baseTheme
);

export default theme;
