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
        Select Medical Service
      </Typography>
      <Grid container direction="row">
        <Text lbl="Select Healthcare Category" grd={6} />
        <Text lbl="Search by Service Description or Code" grd={6} />
        <Text lbl="Service" grd={12} />
        <Text lbl="Couldn't find what you're looking for?" grd={12} />
      </Grid>
      <Grid
        display="flex"
        container
        direction="row"
        alignItems="right"
        justifyContent="right"
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
