import React, { Component } from "react";
// import "./App.css";
import UserInput from "./UserInput//UserInput";
import UserOutput from "./UserOutput/UserOutput";
import PubDate from "./PubDate/PubDate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "tom",
          h1: "Before Trump Signs, House Must Approve 3 Minor Changes",
          p1:
            "The sweeping overhaul of the American tax code, a G.O.P. objective for decades, passed in both houses of Congress.",
          p2:
            "Changes to three budgetary provisions were made at the Senate level, but the House is expected to approve them on Wednesday and to send the legislation to President Trump’s desk."
        },
        {
          name: "jeff",
          h1: "Porch Pirates’ Steal Holiday Packages as They Pile Up at Homes",
          p1:
            "Two weeks ago, its Sheriff’s Office ran a sting operation to catch porch pirates, thieves who swipe packages from Amazon and other companies from doorsteps. Detectives from the department’s property crimes unit put several electronics items worth more than $500 in a box, dropped in a tracking device and “baited” a volunteer’s front porch in the town of Aloha.",
          p2:
            "Porch pirates have darkened people’s doorsteps for years. Law enforcement agencies say they think the crime is on the rise, along with the growth of online shopping. “There’s more packages for them to grab,” said Angela Sands, a spokeswoman for the Police Department in Lincoln, Neb."
        }
      ]
    };
  }
  nameHandler(evt) {
    // this.setState({ name: newName });
    console.log(`got it: ${evt.target.value}`);
    this.setState({
      person: [
        {
          name: evt.target.value,
          h1: "Before Trump Signs, House Must Approve 3 Minor Changes",
          p1:
            "The sweeping overhaul of the American tax code, a G.O.P. objective for decades, passed in both houses of Congress.",
          p2:
            "Changes to three budgetary provisions were made at the Senate level, but the House is expected to approve them on Wednesday and to send the legislation to President Trump’s desk."
        },
        {
          name: "jeff",
          h1: "Porch Pirates’ Steal Holiday Packages as They Pile Up at Homes",
          p1:
            "Two weeks ago, its Sheriff’s Office ran a sting operation to catch porch pirates, thieves who swipe packages from Amazon and other companies from doorsteps. Detectives from the department’s property crimes unit put several electronics items worth more than $500 in a box, dropped in a tracking device and “baited” a volunteer’s front porch in the town of Aloha.",
          p2:
            "Porch pirates have darkened people’s doorsteps for years. Law enforcement agencies say they think the crime is on the rise, along with the growth of online shopping. “There’s more packages for them to grab,” said Angela Sands, a spokeswoman for the Police Department in Lincoln, Neb."
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <PubDate />
          <UserInput
            f1={this.nameHandler.bind(this)}
            name={this.state.person[0].name}
          />

          <UserOutput
            name={this.state.person[0].name}
            h1={this.state.person[0].h1}
            p1={this.state.person[0].p1}
            p2={this.state.person[0].p2}
          />

          <UserOutput
            name={this.state.person[1].name}
            h1={this.state.person[1].h1}
            p1={this.state.person[1].p1}
            p2={this.state.person[1].p2}
          />
        </div>
      </div>
    );
  }
}

export default App;
