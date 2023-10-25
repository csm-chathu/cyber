import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  // interface baseSurface {
  //   primary: string;
  //   secondary: string;
  //   tertiary: string;
  //   quaternary: string;
  // }

  // interface Palette {
  //   outline: Palette["primary"];
  //   surfaceLight: baseSurface;
  //   surfaceDark: baseSurface;
  // }

  // interface PaletteOptions {
  //   outline?: PaletteOptions["primary"];
  //   surfaceLight: baseSurface;
  //   surfaceDark: baseSurface;
  // }

  // interface TypographyVariants {
  //   code: React.CSSProperties;
  // }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    code: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    code: true;
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
      main: "#F1F5F9",
      dark: "#F8FAFC",
    },
    surfaceLight: {
      primary: "#0D0B24",
      secondary: "#120F2F",
      tertiary: "#F1F5F9",
      quaternary: "#1D1849",
    },
    surfaceDark: {
      primary: "#FFF",
      secondary: "#F8FAFC",
      tertiary: "#17143A",
      quaternary: "#E2E8F0",
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
      default: "#0D0B24",
      paper: "#0D0B24",
    },
    outline: {
      dark: "#F8FAFC",
      main: "#2F2B57",
    },
    txt: {
      base: "#FFF",
      muted: "#64748B",
      inverted: "#0D0B24",
    },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans,sans-serif",
    fontSize: 12,
    h1: { fontSize: "3.325rem", fontWeight: 700 },
    h2: { fontSize: "1.825rem", fontWeight: 700 },
    h3: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "116.7%",
    },
    h4: { fontSize: "1.075rem", fontWeight: 700 },
    h5: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "133.4%",
    },
    h6: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "160%",
      letterSpacing: "0.15px",
    },
    body1: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.15px",
      color: "#ffff",
    },
    body2: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "143%",
      letterSpacing: "0.17px",
    },
    caption: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "166%",
    },
    subtitle1: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "175%",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "157%",
      letterSpacing: "0.1px",
    },
    code: {
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontSize: "0.7rem",
      fontWeight: "normal",
    },
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        size: "medium",
        // border: "1px solid #2F2B57",
      },
    },
  },
});
