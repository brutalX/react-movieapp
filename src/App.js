import React, { Component } from "react";
import NavBar from "./common/components/Navigation/NavBar";
import Wrapper from "./common/components/Elements/Wrapper";
import ImageWrapper from "./common/components/Elements/ImageWrapper";
import Main from "./common/components/Main";
import PopularMovies from "./common/components/Main/PopularMovies";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Wrapper />
        <ImageWrapper />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
