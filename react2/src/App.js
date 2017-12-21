import React, { Component } from "react";
import "./App.css";
import InputField from "./InputField/InputField";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
// import UserOutput from "./UserOutput/UserOutput";
// import PubDate from "./PubDate/PubDate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { phrase: "Enter a phrase" };
  }

  phraseSetter(evt) {
    // console.log(`got it: ${evt.target.value}`);
    this.setState({ phrase: evt.target.value });
  }
  clickHandler(index) {
    let phrase = this.state.phrase.split("");
    phrase.splice(index, 1);
    this.setState({ phrase: phrase.join("") });
    // console.log(`char: ${chars[index]}`);
  }

  render() {
    return (
      <div className="App">
        <InputField
          phrase={this.state.phrase}
          f1={this.phraseSetter.bind(this)}>
          <ValidationComponent phrase={this.state.phrase} />
        </InputField>
        <CharComponent
          phrase={this.state.phrase}
          clickHandler={this.clickHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
