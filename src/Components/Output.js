import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.text,
    };
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="output">
        {this.state.value.map((p) => (
          <p>{p}</p>
        ))}
      </div>
    );
  }
}

export default Output;
