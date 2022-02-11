import React, { Component } from "react";

class Assignment2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientData: [
        { clientId: 123, clientName: `ABC`, dueAmount: 50000, local: `Local` },
        { clientId: 124, clientName: `ABC`, dueAmount: 5000, local: `Central` },
        { clientId: 125, clientName: `ABC`, dueAmount: 60000, local: `local` },
        { clientId: 126, clientName: `ABC`, dueAmount: 70000, local: `Local` },
        {
          clientId: 127,
          clientName: `ABC`,
          dueAmount: 50550,
          local: `Central`,
        },
        { clientId: 128, clientName: `ABC`, dueAmount: 50800, local: `local` },
        { clientId: 129, clientName: `ABC`, dueAmount: 58000, local: `Local` },
        {
          clientId: 120,
          clientName: `ABC`,
          dueAmount: 50600,
          local: `Central`,
        },
        { clientId: 121, clientName: `ABC`, dueAmount: 500600, local: `local` },
      ],
    };
  }

  componentDidMount() {
    let { clientData, tempClientData } = this.state;
    console.log(`Test1`, clientData);
    clientData = tempClientData;
    this.setState({ tempClientData });
  }

  onDataFliter = (clientData) => {
    let { clientData, tempClientData } = this.state;
    console.log();
    if (clientType === `all`) {
      clientData = tempClientData;
      this.setState({ clientData });
    } else {
      clientData = tempClientData.filter((item) => {
        return item.type === clientType;
      });
    }
  };
  render() {
    return <div></div>;
  }
}

export default Assignment2;
