"use client";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  TextFieldProps,
  Alert,
  Collapse,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Insurance({
  setAct,
  paymentSelect,
  setPaymentSelect,
}: any) {
  const theme = useTheme();
  const [warn, setWarn] = useState(false);

  const textProps: TextFieldProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  let setPaymentSelectHandler = async (val: number) => {
    setPaymentSelect(val);
    val == 2 ? setWarn(true) : setWarn(false);
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
        Payment Details
      </Typography>
      <Grid container direction="row">
        <Collapse in={warn} sx={{ width: "100%",mb:2 }}>
          <Alert
            severity="warning"
            sx={{ border: "1px solid #FFD336", backgroundColor: "#FFF8D5" }}
          >
            This feature will be available soon.
          </Alert>
        </Collapse>
        <Grid item sx={{ width: "100%" }}>
          <FormControl sx={{ width: "100%" }}>
            <label>Are you Insured?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={1}
            >
              <FormControlLabel
                value="1"
                control={
                  <Radio
                    checked={paymentSelect == 1 ? true : false}
                    onChange={() => setPaymentSelectHandler(1)}
                  />
                }
                label="Self-pay"
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  width: {
                    xs: "100%",
                    sm: "50%",
                    md: "49%",
                  },
                  mr: {
                    xs: 0,
                    sm: 0,
                    md: "1%",
                  },
                  backgroundColor: paymentSelect == 1 ? "#D4FFE4" : "",
                  mt: 1,
                }}
              />
              <FormControlLabel
                value="2"
                control={
                  <Radio disabled
                    checked={paymentSelect == 2 ? true : false}
                    onChange={() => setPaymentSelectHandler(2)}
                  />
                }
                label="Insurance"
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  backgroundColor: paymentSelect == 2 ? "#D4FFE4" : "",
                  ml: 0,
                  width: {
                    xs: "100%",
                    sm: "50%",
                    md: "50%",
                  },
                  mt: 1,
                  mr: 0,
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <FormControl sx={{ width: "100%" }}>
            <Grid
              display="flex"
              container
              direction="row"
              alignItems="left"
              justifyContent="left"
            >
              <ErrorOutlineIcon sx={{ mr: 1 }} />
              <label>Determine</label>
            </Grid>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={1}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Automatically"
                disabled
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  width: {
                    xs: "100%",
                    sm: "50%",
                    md: "49%",
                  },
                  mr: {
                    xs: 0,
                    sm: 0,
                    md: "1%",
                  },
                  backgroundColor: "#D4FFE4",
                  mt: 1,
                }}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Enter Manually"
                disabled
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  mt: 1,
                  mr: 0,
                  width: {
                    xs: "100%",
                    sm: "50%",
                    md: "50%",
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <label>Insurance Name</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Select Insurance Company"
          />
          <Grid
            display="flex"
            container
            direction="row"
            alignItems="left"
            justifyContent="left"
            sx={{ pt: 1 }}
          >
            <Typography
              sx={{
                color: theme.palette.txt.muted,
                fontSize: "12px",
                ml: 1,
              }}
            >
              <ErrorOutlineIcon />
              If your insurance company isn't listed, call the phone number in
              the contact information.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <label>Relationship to Insured</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Select Insurance Relationship"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <label>Group Number</label>
          <TextField {...textProps} disabled placeholder="Enter Group number" />
        </Grid>
      </Grid>

      <Grid
        display="flex"
        gap={1}
        sx={{
          mt: 6,
        }}
      >
        <Grid
          item
          md={6}
          display="flex"
          container
          direction="row"
          alignItems="left"
          justifyContent="left"
          sx={{
            pl: 2,
          }}
        >
          <Button
            variant="text"
            color="success"
            disabled={paymentSelect == 2 ? true : false}
            sx={{
              padding: "5px 25px",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
              border: "none",
              backgroundColor: theme.palette.secondary.main,
            }}
            onClick={() => setAct(1)}
          >
            <ArrowBackIcon /> Go Back
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          display="flex"
          container
          direction="row"
          alignItems="right"
          justifyContent="right"
          sx={{
            pr: 2,
          }}
        >
          <Button
            disabled={paymentSelect == 2 ? true : false}
            type="submit"
            variant="contained"
            color="success"
            sx={{
              padding: "5px 25px",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
            }}
            onClick={() => setAct(4)}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
