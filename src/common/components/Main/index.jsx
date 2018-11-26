import React from "react";
import Content from "./Content";
import ImageCard from "../Elements/ImageCard";
import styled from "styled-components";
import PopularMovies from "./PopularMovies";
const Main = () => {
  return (
    <React.Fragment>
      <Content>
        <PopularMovies />
      </Content>
    </React.Fragment>
  );
};

export default Main;
