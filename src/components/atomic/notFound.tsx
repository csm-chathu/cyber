"use client";
import { Box, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function NotFound() {
  return (
      <Box sx={{width:'100%',p:3,fontSize:18 ,border:'1px solid #e3e3e3',borderRadius:'6px',textAlign:'center'}}>
        <SearchIcon sx={{fontSize:30}}/>
        <Typography>
          No Results Found
          </Typography>
        </Box>
  );
}
