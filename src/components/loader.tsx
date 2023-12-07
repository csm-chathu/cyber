"use client";
import { Box, Grid, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <Box sx={{ position:'absolute',width:'100%',height:'100%',top:0,backgroundColor:'#ffffffc4',zIndex:10 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <CircularProgress />
  </Box>
  );
}
