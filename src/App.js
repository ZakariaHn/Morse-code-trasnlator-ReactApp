import React, { Component } from "react";
import Display from "./components/Display";
import MorseCodes from "./data.json";
import "./scss/main.scss";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Display data={MorseCodes} />
      </React.Fragment>
    );
  }
}
