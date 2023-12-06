"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { formatDate } from "../../../utils/commonFun";
import  ComGrid  from "../../atomic/estimation/common/grid";

export default function SelfPay({obj}) {
  const theme = useTheme();

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

  return (
    <>
        <ComGrid label='Service' val={obj?.service?.value["Service Description"] || "N/A"}/>
        <ComGrid label='Patient Plan' val={obj?.insurance?.insured || "N/A"}/>
        <ComGrid label='Reference Number' val={obj?.ref || "N/A"}/>
        <ComGrid label='Estimate Total' val={obj?.service?.value?.Price || "N/A"}/>
      <Grid container direction="row">
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...lable }}>
          Estimated on
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1, mt: 2, ...value }}>
        <p dangerouslySetInnerHTML={{__html: formatDate()}} style={{marginTop:0}}></p>
        </Grid>
      </Grid>
    </>
  );
}
