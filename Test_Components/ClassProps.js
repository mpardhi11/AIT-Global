import React, { Component } from "react";

class ClassProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToPass: this.props,
      valueToPassDiff: this.props,
    };
  }

  render() {
    let { valueToPass } = this.props;
    let { valueToPassDiff } = this.props;
    console.log(valueToPass);
    return (
      <div>
        <h1>
          Hello User {valueToPass}, {valueToPassDiff}
        </h1>
        {/* <p>{this.props.children}</p> */}
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default ClassProps;
