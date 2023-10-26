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
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";

export default function Insurance({ setAct }: any) {
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
  let warnAlert = async () => {
    setWarn(true);
    setTimeout(function () {
      setWarn(false);
    }, 3000);
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
        <Collapse in={warn} sx={{ width: "100%" }}>
          <Alert
            severity="warning"
            sx={{ border: "1px solid #FFD336", backgroundColor: "#FFF8D5" }}
          >
            This feature will be available soon.
          </Alert>
        </Collapse>
        <Grid item xs={12} sx={{ p: 1 }}>
          <FormControl>
            <label>Are you Insured?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={1}
              sx={{ pt: 2 }}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Self Pay"
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  width: "403px",
                  backgroundColor: "#D4FFE4",
                  mt: 1,
                }}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Insurance"
                onClick={warnAlert}
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  width: "403px",
                  mt: 1,
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <FormControl>
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
              sx={{ pt: 2, mt: 1 }}
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
                  width: "403px",
                  backgroundColor: "#D4FFE4",
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
                  width: "403px",
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
            <ErrorOutlineIcon />
            <Typography
              sx={{
                color: theme.palette.txt.muted,
                fontSize: "12px",
                ml: 1,
              }}
            >
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
        container
        direction="row"
        alignItems="right"
        justifyContent="right"
        gap={1}
        sx={{
          mt: 6,
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
          onClick={() => setAct(2)}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{
            padding: "5px 30px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={() => setAct(4)}
        >
          Continue
        </Button>
      </Grid>
    </>
  );
}
