"use client";
import {
  Box,
  Button,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Insurance({ obj, setObj, setAct }) {
  const theme = useTheme();
  const textProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
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
        Insurance Details
      </Typography>
      <Grid container direction="row">
        <Grid item xs={6} sx={{ p: 1 }}>
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
                  width: "136px",
                  backgroundColor: "#D4FFE4",
                }}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Yes"
                disabled
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  width: "136px",
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <FormControl>
            <label>
              <ErrorOutlineIcon /> Determine
            </label>
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
                label="Automatically"
                disabled
                sx={{
                  padding: "5px 16px 5px 18px",
                  border: "1px solid #CEDCF6",
                  borderRadius: "8px",
                  ml: 0,
                  width: "190px",
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
                  width: "190px",
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
          <Typography
            sx={{
              color: theme.palette.txt.muted,
              fontSize: "12px",
              pt: 1,
            }}
          >
            <ErrorOutlineIcon />
            If your insurance company isn't listed, call the phone number in the
            contact information.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <label>Co-pay</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Please enter your Co-pay"
          />
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <label>Co-insurance</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Please enter your Co-Insurance"
          />
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <label>Deductible Remaining</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Please enter your Deductible Remaining"
          />
        </Grid>
        <Grid item xs={6} sx={{ p: 1 }}>
          <label>Out Of Pocket Remaining</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Please enter your Out Of Pocket Remaining"
          />
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
        >
          Save draft
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
