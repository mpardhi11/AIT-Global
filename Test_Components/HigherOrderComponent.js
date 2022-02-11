import React from "react";

const UpdateCounter = (OriginalValue) => {
  class NewComp extends React.Component {
    render() {
      return <OriginalValue valueToPass="'Txt Which will Added ' " />;
    }
  }
  return NewComp;
};
export default UpdateCounter;
