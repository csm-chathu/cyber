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
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ServicesSelf from "../../atomic/services/self-pay";
import Insurace from "../../atomic/services/insurance";

export default function Insurance({
  setAct,
  paymentSelect,
  setPaymentSelect,
  obj,
  setObj
}: any) {
  const theme = useTheme();
  const [warn, setWarn] = useState(false);
  const [insuranceType, setInsuranceType] = useState([]);

  const textProps: TextFieldProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  let setPaymentSelectHandler = async (val: number) => {
    val==2 ? setWarn(true) : setWarn(false);
    setPaymentSelect(val);
  };


  let goToService = async () => {
    obj.ref = obj.ref ? obj.ref : "REF" + new Date().getTime();
    let conArr = { ...obj, insurance:{
      insured:paymentSelect==1 ? 'Self-Pay' : 'Insured'
    }};
    setObj(conArr);
    setAct(2);
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
            Depending on the chosen insurance provider, certain services may not be relevant or applicable..
          </Alert>
        </Collapse>
        <Grid item sx={{ width: "100%" }}>
          <FormControl sx={{ width: "100%" }}>
            <label>Select payment method</label>
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
                  <Radio 
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
{/* {paymentSelect} */}
        {paymentSelect == 2 ? 
      (<Insurace obj={obj} setObj={setObj} setAct={setAct}/>) :
      (<ServicesSelf obj={obj} setObj={setObj} setAct={setAct}/>)
  }

        {/* <Grid item xs={12} sx={{ mt: 2 }}>
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
        </Grid> */}
        {/* <Grid item xs={12} sx={{ pt: 3 }}>
          <label>Insurance Name</label>
          <Select  fullWidth={true}>
            {insuranceType?.map((item)=>(
              <MenuItem value={item?.Payer}>{item?.Payer || 'N/A'}</MenuItem>
            ))
            }
            </Select>
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
        </Grid> */}
        
        {/* <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <label>Relationship to Insured</label>
          <TextField
            {...textProps}
            disabled
            placeholder="Select Insurance Relationship"
          />
        </Grid> */}
{/* 
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <label>Group Number</label>
          <TextField {...textProps} disabled placeholder="Enter Group number" />
        </Grid> */}
      </Grid>
{/* 
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
            type="submit"
            variant="contained"
            color="success"
            sx={{
              padding: "5px 25px",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
            }}
            onClick={goToService}
            // onClick={() => setAct(2)}
          >
            Continue
          </Button>
        </Grid>
      </Grid> */}
    </>
  );
}
