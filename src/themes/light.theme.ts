import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface baseSurface {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  }
  interface baseText {
    base: string;
    muted: string;
    inverted: string;
  }

  interface Palette {
    outline: Palette["primary"];
    surfaceLight: baseSurface;
    surfaceDark: baseSurface;
    txt: baseText;
  }

  interface PaletteOptions {
    outline?: PaletteOptions["primary"];
    surfaceLight: baseSurface;
    surfaceDark: baseSurface;
    txt: baseText;
  }
}

export default createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3B82F6",
      dark: "#2563EB",
    },
    secondary: {
      main: "#120F2F",
      dark: "#0D0B24",
    },
    surfaceLight: {
      primary: "#EFF6FF",
      secondary: "#FFF",
      tertiary: "#DBEAFE",
      quaternary: "#BFDBFE",
    },
    surfaceDark: {
      primary: "#0D0B24",
      secondary: "#120F2F",
      tertiary: "#17143A",
      quaternary: "#1D1849",
    },
    info: {
      main: "#3B82F6",
      dark: "#2563EB",
    },
    error: {
      main: "#EF4444",
      dark: "#DC2626",
    },
    warning: {
      main: "#F97316",
      dark: "#EA580C",
    },
    success: {
      main: "#16A34A",
      dark: "#16A34A",
    },
    background: {
      default: "#FFF",
      paper: "#F3F8FF",
    },
    outline: {
      dark: "#020617",
      main: "#CBD5E1",
    },
    txt: {
      base: "#0D0B24",
      muted: "#82889B",
      inverted: "#FFF",
    },
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
    fontSize: 12,
    h1: { fontSize: "3.325rem", fontWeight: 700 },
    h2: { fontSize: "1.825rem", fontWeight: 700 },
    h3: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "116.7%",
    },
    h4: { fontSize: "1.075rem", fontWeight: 700 },
    h5: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "133.4%",
    },
    h6: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "160%",
      letterSpacing: "0.15px",
    },
    body1: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.15px",
    },
    body2: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "143%",
      letterSpacing: "0.17px",
    },
    caption: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "166%",
    },
    subtitle1: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "175%",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "157%",
      letterSpacing: "0.1px",
    },
    code: {
      fontFamily: "Poppins,sans-serif",
      fontSize: "0.7rem",
      fontWeight: "normal",
    },
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        size: "medium",
        sx: { borderRadius: "10px" },
      },
    },
  },
});
