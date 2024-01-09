import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Navbar from "../navbar";
import bgImage from "../../assets/main/bg-image.svg";
import MainButton from "../main-button/MainButton";
import SearchNav from "../search-nav/SearchNav";
import btnGlobalIcon from "../../assets/main/btn-global-icon.svg";

const Hero = () => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        p: {
          xs: 2,
          sm: 5,
          md: 2,
        },
        background: `url(${bgImage}) center center/cover`,
        minHeight: "800px",
        borderRadius: {
          xs: "0px 0px 27px 27px",
          md: "0px 0px 54px 54px",
        },
      }}
    >
      <Box sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <Navbar/>
      </Box>
    </Container>
  );
};

export default Hero;
