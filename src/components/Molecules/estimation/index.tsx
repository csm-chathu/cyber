"use client";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import moment from "moment";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { OBJ_ARR } from "../../../utils/constant";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Estimation({ act, setAct, obj, setObj }: any) {
  const theme = useTheme();
  const [print, setPrint] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  const [email, setEmail] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

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
    try {
      setEmail(true);
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ ...obj }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (emailResponse.status == 200) {
        setSendStatus("failed");
        setEmail(false);
        setEmailSend(true);
        setSendStatus("success");
        setTimeout(function () {
          setEmailSend(false);
          setObj(OBJ_ARR);
          setAct(0);
        }, 4000);
      } else {
        setEmailSend(true);
        setEmail(false);
        setSendStatus("failed");
      }
    } catch (error) {
      console.error(error);
      setEmailSend(true);
      setEmail(false);
      setSendStatus("failed");
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
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          Service
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.service?.value["Service Description"] || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          Patient Plan
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.insurance?.insured || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          Reference Number
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.ref || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          Estimate Total
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
          {obj?.service?.value?.Price || "N/A"}
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          Estimated on
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
          {moment(new Date()).format("Do MMMM YYYY")}
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
            padding: "5px 70px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
            backgroundColor: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
          }}
          onClick={printPdf}
        >
          {print && (
            <CircularProgress
              sx={{ marginLeft: "0", marginRight: "10px", color: "black" }}
              size={20}
            />
          )}
          {print ? "Wait" : "Print"}
        </Button>
        <Button
          // disabled={email}
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
          {email && (
            <CircularProgress
              sx={{ marginLeft: "0", marginRight: "10px", color: "black" }}
              size={20}
            />
          )}
          {email ? "Please wait" : "Send an Email"}
        </Button>
        <Grid item sm={12}>
          <Collapse in={emailSend}>
            <Box
              sx={{
                width: "100%",
                padding: "19px 40px 19px 56px",
                backgroundColor:
                  sendStatus == "success" ? "#58D08F" : "#d75353",
                borderRadius: "4px 4px 4px 4px",
                mt: 2,
              }}
            >
              <Grid
                display="flex"
                container
                direction="row"
                alignItems="left"
                justifyContent="left"
              >
                {sendStatus == "success" && (
                  <MarkEmailReadIcon
                    sx={{ fontSize: "30px", color: "#ffff" }}
                  />
                )}
                {sendStatus == "failed" && (
                  <ReportGmailerrorredIcon
                    sx={{ fontSize: "30px", color: "#ffff" }}
                  />
                )}
                <Typography sx={{ color: "#ffff", ml: 1, mt: "4px" }}>
                  {sendStatus == "success" && "Email send successfully"}
                  {sendStatus == "failed" && "Email send failed"}
                </Typography>
              </Grid>
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
}
