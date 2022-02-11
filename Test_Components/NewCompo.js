import React, { Component } from "react";

class NewCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to React Testing",
      cssStyle: "bg-success",
    };
  }

  onClickHandler = () => {
    this.setState({
      message: "Message is Changed when i Click",
      cssStyle: "bg-danger",
    });
  };

  render() {
    return (
      <div>
        <h2 className={this.state.cssStyle}>{this.state.message}</h2>
        <button onClick={this.onClickHandler}>
          When i click Chnage Message
        </button>
      </div>
    );
  }
}

export default NewCompo;
