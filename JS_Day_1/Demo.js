var a = 100;
var b = 200;
console.log("a", a);
console.log("b", b);
console.log("++++++++++++++++++++");

a = a + b;
b = a - b;
a = a - b;

console.log("a", a);
console.log("b", b);
console.log("++++++++++++++++++++");

[b, a] = [a, b];
console.log("a", a);
console.log("b", b);
console.log("++++++++++++++++++++");
