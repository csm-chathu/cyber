"use client";
import { Grid, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TextProps {
  lbl: String;
  grd: number;
}

export default function Text({ lbl, grd, ...props }: TextProps) {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={grd} sm={grd} sx={{ p: 1 }}>
      <label>{lbl}</label>
      <TextField
        {...props}
        id="outlined-basic"
        variant="outlined"
        fullWidth={true}
        sx={{ borderRadius: "12px" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
  );
}
