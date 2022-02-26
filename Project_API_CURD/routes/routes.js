module.exports = (app) => {
  //importing controller.js functions to routes.js
  const notes = require("../controllers/controller");

  //create a new note
  app.post("/api/add", notes.create);

  //retrive all notes
  app.get("/api/retrive", notes.findAll);

  //retrive a single note by id
  app.get("/api/find/:noteId", notes.findone);

  //update a note with noteId
  app.put("/api/update/:noteId", notes.update);

  //delete a Note with noteId
  app.delete("/api/delete/:noteId", notes.delete);
};
