import React, { Component } from "react";
import styled from "styled-components";
import _img from "../../../img/404page.png";
const Layout = styled.div`
  background-image: url(${_img});
  width: 100%;
  height: 75vh;
  display: table;
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;

const backPage = () => {
  window.history.back();
};

class FourOwFour extends Component {
  componentDidMount = () => {
    setInterval(backPage, 3000);
  };
  render() {
    return <Layout />;
  }
}
export default FourOwFour;
