"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Estimation({ act, setAct, obj }) {
  const theme = useTheme();
  const [print, setPrint] = useState(false);
  const [email, setEmail] = useState(false);

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

  let sendEmail = async () => {
    console.log(obj);

    try {
      // setEmail(true);
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ ...obj }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (emailResponse.ok) {
        setEmail(false);
        alert("Email sent successfully");
      } else {
        setEmail(false);
        alert("Email not sent");
      }
    } catch (error) {
      console.error(error);
    }
  };
  let printPdf = async () => {
    try {
      setPrint(true);
      const pdfResponse = await fetch("/api/generate-pdf", {
        method: "POST",
        body: JSON.stringify({ ...obj }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const pdfData = await pdfResponse.arrayBuffer();
      if (pdfData) {
        const blob = new Blob([pdfData], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPrint(false);
        window.open(url);
      } else {
        setPrint(false);
      }
    } catch (error) {
      console.error(error);
    }
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
          {obj?.service?.value["Service Description"] || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Insurance
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.insurance?.insured || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Reference Number
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.ref || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...lable }}>
          Estimate Total
        </Grid>
        <Grid item xs={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.service?.value?.Price || "N/A"}
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
          disabled={print}
          variant="outlined"
          color="success"
          sx={{
            padding: "5px 30px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={printPdf}
        >
          Print
        </Button>
        <Button
          disabled={email}
          variant="contained"
          color="success"
          sx={{
            padding: "5px 30px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={sendEmail}
        >
          Send an Email
        </Button>
        {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      /> */}
      </Grid>
    </>
  );
}
