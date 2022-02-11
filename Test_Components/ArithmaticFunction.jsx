import React from "react";

function add(a, b) {
  console.log(a + b);
  let c = a + b;
  return c;
}

function sub(a, b) {
  console.log(a + b);

  return a - b;
}

export { add, sub };
