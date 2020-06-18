import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  translate(input) {
    let output = "";
    input.split("").map((item) => {
      return (output += this.props.data[item] + " ");
    });
    this.setState({ output });
  }

  render() {
    return (
      <div className="wrapper">
        <h3>Encode your text</h3>
        <textarea
          placeholder="Write a text"
          onChange={(e) => this.translate(e.target.value)}
        />
        <lable>Morse Code: {this.state.output}</lable>
      </div>
    );
  }
}
