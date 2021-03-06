// to import blog schema from model.js
const MyProducts = require("../models/model");

// create and save a new note
exports.create = function (req, res) {
  if (!req.body.title || !req.body.price || !req.body.desc) {
    return res.status(400).send({
      message: "Every field is required",
    });
  }

  const newdata = MyProducts({
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
  });

  MyProducts.findOne({ title: newdata.title }, function (err, note) {
    if (note) return res.status(400).json({ message: "same title exists" });

    newdata.save(function (err, doc) {
      if (err) return res.status(400).json(err);
      res.status(201).json({
        post: true,
        note: doc,
      });
    });
  });
};

// to find all the notes
exports.findAll = function (req, res) {
  MyProducts.find(function (err, doc) {
    if (err) return res.status(400).send(err);
    res.status(200).json(doc);
  });
};

// find a note by id
exports.findone = function (req, res) {
  Note.findById(req.params.noteId, function (err, doc) {
    if (err) return res.status(400).send(err);
    if (!doc)
      return res
        .status(404)
        .json({ message: "Note with given Id is not found" });
    res.status(200).json(doc);
  });
};

//update any note with given id
exports.update = function (req, res) {
  if (!req.body.title || !req.body.author || !req.body.content) {
    return res.status(400).send({
      message: "Every field is required",
    });
  }

  Note.findByIdAndUpdate(
    req.params.noteId,
    {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    },
    { new: true },
    function (err, doc) {
      if (err) return res.status(400).send(err);

      if (!doc)
        return res
          .status(404)
          .json({ message: "No note with this id has been found" });

      res.status(200).json({
        update: true,
        note: doc,
      });
    }
  );
};

//to delete any note by id
exports.delete = function (req, res) {
  Note.findByIdAndDelete(req.params.noteId, function (err, doc) {
    if (err) return res.status(400).send(err);

    if (!doc) return res.status(404).json({ message: "NOt found" });

    res.status(200).json({
      delete: true,
      note: doc,
    });
  });
};
