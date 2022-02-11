let name1 = (a, ...nm) => {
  console.log(a);
  console.log(nm.length);
  console.log(typeof a);
  console.log(arguments.length);
  for (let i in nm) {
    console.log(nm[i]);
  }
};
name1("Name of Friends", "a", "b", 10);

name1("Name of Friends", "a", "b", "c", "d", 200);

name1("Name of Friends", "a", "b", "c", 20);
