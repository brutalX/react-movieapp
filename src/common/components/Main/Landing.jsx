import React from "react";
import NavBar from "../Navigation/NavBar";
import Wrapper from "../Elements/Wrapper";
import ImageWrapper from "../Elements/ImageWrapper";
import Content from "./Content";
import styled from "styled-components";
import PopularMovies from "./PopularMovies";
const Landing = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Wrapper />
      <ImageWrapper />
      <Content>
        <PopularMovies />
      </Content>
    </React.Fragment>
  );
};

export default Landing;
