import React from "react";
import { Box, Paper } from "@mui/material";
import Header from "../../components/topicon";
import Footer from "../../components/footer";
import News from "../../components/News";

export default function Main() {
  return (
    <Box>
      <Header />
      <Box>
        <News />
      </Box>
      <Paper
        sx={{
          width: "100%",
          height: "50px",
        }}
      />
      <Footer />
    </Box>
  );
}
