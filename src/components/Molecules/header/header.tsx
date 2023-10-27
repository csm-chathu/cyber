"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

export default function Header() {
  const theme = useTheme();

  return (
    <Grid
      display="flex"
      container
      direction="row"
      sx={{ height: "70px", borderBottom: "3px solid #F4F8FF" }}
    >
      <Grid item xs={6} sm={6} md={6} sx={{ p: 2, height: "50px" }}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 150,
            mb: 2,
          }}
          src="images/image1.png"
        />
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        sx={{ mt: 2, height: "50px", pr: 3 }}
        alignItems="right"
        justifyContent="right"
        display="flex"
        direction="row"
        container
      >
        <Typography>Need help? </Typography>
        <Typography sx={{ ml: 2, color: "#0019FF" }}> 626-338-8481</Typography>
      </Grid>
    </Grid>
  );
}
