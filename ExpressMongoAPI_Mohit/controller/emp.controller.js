//const { nextTick } = require("process");
const MyEmp = require("../model/emp.model");
//http://localhost:3000/movie/test
exports.test = (req, res) => res.send("I am tested");

//http://localhost:3000/movie/create
exports.create = (req, res) => {
  let emp = new MyEmp({
    name: req.body.name,
    Age: req.body.Age,
    Address: req.body.Address,
  });

  emp.save(function (err) {
    if (err) {
      return nextTick(err);
    }
    res.send("Record is inserted");
  });
};
//http://localhost:3000/emp/all
exports.all = (req, res) => {
  MyEmp.find(function (err, result) {
    if (err) {
      return next(err);
    }
    res.send(result);
  });
};

//http://localhost:3000/emp/---------
exports.details = (req, res) => {
  //var query={movie_id:req.params.movie_id}

  MyEmp.findById(req.params.id, function (err, result) {
    if (err) {
      return next(err);
    }
    res.send(result);
  });
};
//http://localhost:3000/emp/deleteMovie/2
exports.delete = (req, res) => {
  MyEmp.deleteOne(req.params.name, function (err, result) {
    if (err) {
      return next(err);
    }
    res.send("Record is deleted");
  });
};
//
exports.update = (req, res) => {
  MyEmp.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
    result
  ) {
    MyEmp.findOne({ _id: req.params.id }).then(function (result) {
      res.send(result);
    });
  });
};
