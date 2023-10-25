"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Estimation({ act, setAct }) {
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
      <Typography
        textAlign="left"
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          mb: 3,
        }}
      >
        Payment Estimate
      </Typography>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Service
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          Family psychotherapy including patient
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Insurance
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          Self Pay
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Reference Number
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          PFE1028640003RM7
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Estimate Total
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          $ 28,590.00
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Estimate Finish Date
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          24 Oct 2024
        </Grid>
      </Grid>
      <Grid
        display="flex"
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        sx={{
          mt: 10,
        }}
      >
        <Button
          variant="outlined"
          color="success"
          sx={{
            padding: "5px 30px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Print
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            padding: "5px 30px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Send an Email
        </Button>
      </Grid>
    </>
  );
}
