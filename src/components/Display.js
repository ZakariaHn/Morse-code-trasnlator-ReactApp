import React, { Component } from "react";
import morseCodes from "../data.json";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }

  translate(input) {
    let output = "";
    input.split("").map((item) => {
      return (output += morseCodes[item] + " ");
    });
    this.setState({ output });
  }

  render() {
    return (
      <div>
        <textarea onChange={(e) => this.translate(e.target.value)} />
        <h4>Morse Code: {this.state.output}</h4>
      </div>
    );
  }
}
