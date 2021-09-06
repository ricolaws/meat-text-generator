import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Output from "./Components/Output";
import Select from "./Components/Select";
import Text from "./Components/Text";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 2,
      text: "",
      type: "all-meat",
    };
  }

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        "https://baconipsum.com/api/?type=" +
          this.state.type +
          "&paras=" +
          this.state.paras
      )
      .then((response) => {
        this.setState({ text: response.data }, function () {});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showType(x) {
    this.setState({ type: x }, this.getSampleText);
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
        <div className="header">
          <h1>Meat Text Generator</h1>
          <hr />
        </div>
        <form className="form">
          <div className="form-group">
            <label>Ingredients: </label>
            <Select
              value={this.state.type}
              onChange={this.showType.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Paragraphs: </label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
        </form>
        <br />
        <Output value={this.state.text} />
        <div className="pig-pen"></div>
      </div>
    );
  }
}

export default App;
