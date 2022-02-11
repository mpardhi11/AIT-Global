import React, { Component } from "react";
import UpC from "./HigherOrderComponent";
class OnMouseOver2 extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  UpdateCounter = () => {
    let { count } = this.state;
    count++;
    console.log("Updating Counter via MouserOver Event", count);
    this.setState({ count });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <hr></hr>
        <button onMouseEnter={this.UpdateCounter}>
          <h2>
            {this.props.valueToPass}MouserOver Counter {count}
          </h2>
        </button>
        <hr></hr>
      </div>
    );
  }
}

export default UpC(OnMouseOver2);
