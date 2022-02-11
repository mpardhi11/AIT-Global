let FN = "First Name";
let LN = "Last Name";
let FNN = "Full Name : ---->>>";

let details = {
  [FN]: "Mohit",
  [LN]: "Pardhi",
  [FNN]: FN.concat(LN),
};

console.log(details);
