import React, { Component } from "react";

class Click extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  UpdateCounter = () => {
    let { count } = this.state;
    count++;
    console.log("Updating Counter via Click Event", count);
    this.setState({ count });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <div>
          <hr></hr>
          <button onClick={this.UpdateCounter}>
            <h2>Click Counter {count}</h2>
          </button>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Click;
