
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import './loc.css'


const Loading = () => (
  <div className="spinner">
    <Box style={{ display: "flex", justifyContent: "center", marginTop: "350px" }} sx={{ display: 'flex' }}>
      <span className="spinner-body">
        <CircularProgress />
      </span>
    </Box>
  </div>
);

export default Loading;