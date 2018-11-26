import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SearchDetail from "./common/components/Search/SearchDetail";
import Landing from "./common/components/Main/Landing";
import FourOwFour from "./common/components/404/FourOwFour";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/searchdetail" component={SearchDetail} />
          <Route component={FourOwFour} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
