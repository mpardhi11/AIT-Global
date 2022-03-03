//const { nextTick } = require("process");
const myRegister = require("../model/regiester.model");
//http://localhost:3000/movie/test
exports.test = (req, res) => res.send("I am tested");

//http://localhost:3000/movie/create
exports.create = (req, res, nextTick) => {
  let register = new myRegister({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  register.save(function (err) {
    if (err) {
      return nextTick(err);
    }
    res.send({ message: "Record is inserted" });
  });
};
//http://localhost:3000/movie/all
exports.all = (req, res) => {
  myRegister.find(function (err, result, next) {
    if (err) {
      return next(err);
    }
    res.send(result);
  });
};
