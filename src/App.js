import React, { Component } from "react";
import "./App.css";
import axios from "axios";

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

  // getSampleText() {
  //   axios
  //     .get(
  //       "http://hipsterjesus.com/api?paras=" +
  //         this.state.paras +
  //         "&html=" +
  //         this.state.html
  //     )
  //     .then((response) => {
  //       this.setState({ text: response.data.text }, function () {
  //         console.log(this.state);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return <div className="App">hello hello</div>;
  }
}

export default App;
