import React, { Component } from "react";
import Child1 from "./Child1";

class Parent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Bhau",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName} from`);
  }
  render() {
    return (
      <div>
        <Child1 xyz={this.greetParent}></Child1>
      </div>
    );
  }
}

export default Parent1;
