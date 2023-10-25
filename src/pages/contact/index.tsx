"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Container from "../../components/atomic/container";
import Text from "../../components/atomic/textfield";

export default function Header() {
  const theme = useTheme();

  return (
    <Container>
      <Typography
        textAlign="left"
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          mb: 3,
        }}
      >
        Personal Information
      </Typography>
      <Grid container direction="row">
        <Text lbl="First Name" grd={6} />
        <Text lbl="Last Name" grd={6} />
        {/* <Grid item xs={6} md={6} sm={6} sx={{ p: 1 }}>
          <label>Date of birth</label>
          <DatePicker label="Basic date picker" />
        </Grid> */}

        <Text lbl="Date of birth" grd={6} />
        <Text lbl="Gender" grd={6} />
        <Text lbl="Email" grd={6} />
        <Text lbl="Phone Number" grd={6} />
        <Typography
          textAlign="left"
          sx={{
            fontSize: "24px",
            fontWeight: 500,
            mb: 3,
          }}
        >
          Address
        </Typography>
        <Text lbl="Address Line 1" grd={12} />
        <Text lbl="Address Line 2" grd={12} />
        <Text lbl="Country" grd={8} />
        <Text lbl="Zip Code" grd={4} />
        <Text lbl="City" grd={6} />
        <Text lbl="State" grd={6} />
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
          variant="contained"
          color="success"
          sx={{
            padding: "5px 30px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          Continue
        </Button>
      </Grid>
    </Container>
  );
}
