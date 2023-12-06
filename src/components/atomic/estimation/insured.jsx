"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { formatDate } from "../../../utils/commonFun";
import  ComGrid  from "../../atomic/estimation/common/grid";

export default function Insured({obj}) {
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
        <ComGrid label='Reference Number' val={obj?.ref || "N/A"}/>
        <ComGrid label='Patient Plan' val={obj?.insurance?.insured || "N/A"}/>
        <ComGrid label='Insurance' val={obj?.service?.value["Payer"] || "N/A"}/>
        <ComGrid label='Procedure Code' val={obj?.service?.value["Procedure"] || "N/A"}/>
        <ComGrid label='service' val={obj?.service?.value["Payer"] || "N/A"}/>
        <ComGrid label='Insurance' val={obj?.service?.value["DESCR"] || "N/A"}/>
        <ComGrid label='Subtotal' val={obj?.service?.value["Gross Charge"] || "N/A"}/>
        <ComGrid label='Payer Charge' val={obj?.service?.value["Payer Charge"] || "N/A"}/>
        <ComGrid label='Minimum Negotiated Charge' val={obj?.service?.value["Minimum Negotiated Charge"] || "N/A"}/>
        <ComGrid label='Maximum Negotiated Charge' val={obj?.service?.value["Maximum Negotitated Charge"] || "N/A"}/>
        <ComGrid label='Discount Cash' val={obj?.service?.value["Discount Cash"] || "N/A"}/>

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
