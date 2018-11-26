import React from "react";
import styled from "styled-components";
import cinema_chairs from "../../../img/cinema_chairs.jpg";
const ImageLayout = styled.div`
  background-image: url(${cinema_chairs});
  width: 100%;
  height: 75vh;
  display: table;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;

const TextWrapper = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: white;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  padding: 10px;
  text-shadow: 2px 2px 2px #000000;
`;
const ImageWrapper = () => {
  return (
    <ImageLayout>
      <TextWrapper>
        <h1>Watch your favorite movies all night</h1>
      </TextWrapper>
    </ImageLayout>
  );
};

export default ImageWrapper;
