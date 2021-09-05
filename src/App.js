import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Output from "./Components/Output";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      text: "",
    };
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=" +
          this.state.paras
      )
      .then((response) => {
        this.setState({ text: response.data }, function () {
          for (const p of this.state.text) {
            console.log(p);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Output text={this.state.text} />
      </div>
    );
  }
}

export default App;
