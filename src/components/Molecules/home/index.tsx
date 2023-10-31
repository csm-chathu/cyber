"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Home({ act, setAct, obj, setObj }: any) {
  const theme = useTheme();

  const handleAgree = () => {
    let conArr = { ...obj, agreed: true };
    setObj(conArr);
    setAct(1);
  };
  return (
    <>
      <Typography
        textAlign="center"
        sx={{
          fontSize: "34px",
          fontWeight: 600,
          mb: 3,
        }}
      >
        Welcome to West Covina!
      </Typography>
      <Typography
        textAlign="justify"
        sx={{
          fontSize: "18px",
          fontWeight: 500,
          color: theme.palette.txt.muted,
          fontStyle: "Poppins",
        }}
      >
        To start, click the “I agree” button. By clicking “I agree,” you are
        acknowledging that you are requesting an estimate for your informational
        health care purposes only, and the estimate is not a quote or a
        guarantee of your actual patient financial liabilities. Actual costs may
        be different because of your medical condition, length of time spent in
        surgery or recovery, complications requiring unanticipated procedures or
        other treatment ordered by the physician. In the event unforeseen
        circumstances occur, your estimated price may increase. The cost
        estimate does not include any physician or other professional fees.
      </Typography>
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
            padding: "10px 40px",
            fontSize: "18px",
            textTransform: "none",
            borderRadius: "8px",
            border: "none",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <ArrowBackIcon /> Go Back
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            padding: "10px 40px",
            fontSize: "18px",
            textTransform: "none",
            borderRadius: "8px",
          }}
          onClick={handleAgree}
        >
          I Agree and continue
        </Button>
      </Grid>
    </>
  );
}
