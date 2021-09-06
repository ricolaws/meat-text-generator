import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    const bacon = Array.from(this.props.value).map((p) => <p key={p}>{p}</p>);
    return <div className="output">{bacon}</div>;
  }
}

export default Output;
