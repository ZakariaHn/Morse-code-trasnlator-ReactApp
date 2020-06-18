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
      <div className="wrapper">
        <h3>Encode your text</h3>
        <textarea
          placeholder="Write text"
          onChange={(e) => this.translate(e.target.value)}
        />
        <lable>Morse Code: {this.state.output}</lable>
      </div>
    );
  }
}
