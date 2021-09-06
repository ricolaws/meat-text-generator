import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value }, function () {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div className="form">
        <select onChange={this.onChange.bind(this)}>
          <option value="all-meat">All Meat</option>
          <option value="meat-and-filler">Meat and Filler</option>
        </select>
      </div>
    );
  }
}

export default Select;
