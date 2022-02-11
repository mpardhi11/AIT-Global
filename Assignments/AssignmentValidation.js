import React, { Component } from "react";

class AssignmentValidation extends Component {
  constructor(props) {
    super(props);
    // let { userName, passWord, txtAlert } = props;
    this.state = {
      status: "",
      cssStyle: "",
      txtAlert: false,
    };
  }
  onClickHandler = (e) => {
    let { userName, passWord, txtAlert } = this.props;
    let { status, cssStyle } = this.state;
    console.log(userName, passWord);
    console.log(userName.length);
    if (userName.length < 3 || passWord.length < 4) {
      this.setState(
        { status: "Set Strong PassWord", cssStyle: "bg-danger" },
        alert(`Set Strong Password`)
      );
    } else {
      this.setState({ status: "Successful", cssStyle: "bg-success" });
    }
  };
  render() {
    let { userName, passWord, txtAlert } = this.props;
    let { status, cssStyle } = this.state;
    return (
      <div>
        <h3>{userName.length ? userName : "Please Enter UserName "}</h3>
        <h3>{passWord.length ? passWord : "Please Enter PassWord "}</h3>

        <button onClick={this.onClickHandler}>Statusss</button>
        <h1 className={cssStyle}>{status}</h1>
      </div>
    );
  }
}

export default AssignmentValidation;
