// let arr = ["Mohit", "Pardhi", , 23, 66];

// let [, , g = "Female", ...gg] = arr;

// console.log("------->>>>>>", g);
// console.log("------->>>>>>", gg);

// console.log("----->>>", typeof gg);

let person1 = {
  fName: "Mohit",
  lName: "Pardhi",
  age: 23,
};
console.log(person1.fName);
console.log("----->>>");
let { fName: f, lName: l, age: a } = person1;

console.log(f);
console.log(l);
console.log(a);
