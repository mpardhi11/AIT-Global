var emp = {
  id: 123,
  name: "Mohit",
  add: "Amt",

  greet: function () {
    let ttt = this;
    setTimeout(function () {
      console.log(ttt.id, ttt.name, ttt.add);
    }, 5000);
  },
};

emp.greet();

var emp = {
  id: 123,
  name: "Mohit",
  add: "Amt",

  greet: function () {
    setTimeout(() => {
      console.log("Arrow Function", this.id, this.name, this.add);
    }, 2000);
  },
};

emp.greet();
