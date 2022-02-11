import React, { Component } from "react";

class Datetime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
      b: new Date().toLocaleTimeString(),
    };
  }

  render() {
    let dd = new Date().toLocaleDateString();
    let ddd = new Date().toLocaleTimeString();
    let b = this.state.b;
    return (
      <div>
        <h1>Hello {dd} </h1>
        <h2>ttt {b}</h2>
      </div>
    );
  }
}

export default Datetime;
