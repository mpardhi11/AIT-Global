import React, { Component } from "react";
import AssignmentValidation from "./AssignmentValidation";
class Assignments1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      // txtAlert: false,
    };
  }
  onChangeHandler = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log("Input box changed ", name, value);
    if (name === "userName") {
      this.setState({ userName: value });
    }

    if (name === "passWord") {
      this.setState({ passWord: value });
    }
  };

  // onClickHandler = () => {
  //   this.setState({ txtAlert: true });
  // };

  render() {
    let { userName, passWord, txtAlert } = this.state;
    return (
      <>
        <div className="form-group">
          <label>UserName : </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={userName}
            onChange={this.onChangeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="password"
            className="form-control"
            name="passWord"
            value={passWord}
            onChange={this.onChangeHandler}
          ></input>
        </div>
        <div className="form-group">
          {/* <button
            className="btn btn-primary "
            type="submit"
            onClick={this.onClickHandler}
            // style={"ml-2"}
          >
            Submit
          </button> */}
        </div>

        <div>
          <AssignmentValidation
            userName={userName}
            passWord={passWord}
          ></AssignmentValidation>
        </div>
      </>
    );
  }
}

export default Assignments1;
