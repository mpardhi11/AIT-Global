let mul = () => 2 + 3;

let add = (_a = 10, _b = _a * mul()) => console.log(_a + _b);

add(undefined, 50);
add(20);
