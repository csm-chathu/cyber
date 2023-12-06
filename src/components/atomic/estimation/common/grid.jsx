"use client";
import {  Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ComGrid({ label, val }) {
  const theme = useTheme();

  const lable = {
    color: theme.palette.txt.muted,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const value = {
    ...lable,
    color: "#000",
  };

  return (
    <>
       <Grid container direction="row">
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          {label}
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
          {val || "N/A"}
        </Grid>
      </Grid>
    </>
  )
}