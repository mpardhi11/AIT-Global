import React from "react";

function child1(props) {
  return (
    <div>
      <button onClick={() => props.greetParent()}>Greet Parent1</button>
    </div>
  );
}

export default child1;
