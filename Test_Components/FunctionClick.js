import React from "react";

function FunctionClick() {
  let counter = 0;
  const clickHandler = () => {
    console.log("Button Click,", counter);
    counter = counter + 1;
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={clickHandler}> Click Me</button>
    </div>
  );
}

export default FunctionClick;
