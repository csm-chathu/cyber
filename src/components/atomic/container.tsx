"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Container({ children, width = "1016px" }: any) {
  const theme = useTheme();

  return (
    <Grid
      display="flex"
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        sx={{
          p: {
            xs: 5,
            sm: 5,
            md: 10,
            lg: 10,
            xl: 10,
          },
          width,
          borderRadius: "16px",
          backgroundColor: "#FFF",
          boxShadow: "-6px 4px 74px 0px rgba(123, 123, 123, 0.15)",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
