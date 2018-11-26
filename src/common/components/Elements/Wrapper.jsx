import React from "react";
import styled from "styled-components";

const WrapLayout = styled.div`
  padding: 0px 15px;
  background-color: #ffffff;
`;
const Wrapper = props => {
  return <WrapLayout>{props.children}</WrapLayout>;
};
export default Wrapper;
