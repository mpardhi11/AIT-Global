import React, { Component } from "react";
import UpC from "./HigherOrderComponent";
class Click2 extends Component {
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
            <h2>
              {this.props.valueToPass}Click Counter {count}
            </h2>
          </button>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default UpC(Click2);
