const router = require("express").Router();
const { createNewNote, deleteById } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const result = deleteById(req.params.id, notes);
  res.json(result)

})

module.exports = router;