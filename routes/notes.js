// Set up router
const router = require("express").Router()
// Require uuid package
const { v4: uuidv4 } = require("uuid")
// Require fs module
const fs = require("fs")

// Assign contents of db.json to a variable called notes
let notes = require("../db/db.json")

// Every notes route start with /api/notes
// GET api/notes for reading the db.json file and returns all saved notes as JSON
router.get("/", (req, res) => {
  return res.json(notes)
})

// POST api/notes for adding a new note
router.post("/", (req, res) => {
  // Get the title and text from post request's body
  const { title, text } = req.body
  // If there is a title and text then create a new note with a random id
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }

    // Push the new note to the newNote
    notes.push(newNote)

    // Write a new db.json file using the updated data
    fs.writeFile("./db/db.json", JSON.stringify(notes, null, 4), (err) =>
      err
        ? console.error(err)
        : console.log(`Note: ${newNote.title} has been written to storage`)
    )

    const response = {
      status: "success",
      body: newNote,
    }

    console.log(response)
    res.status(201).json(response)
  } else {
    res.status(500).json("Error in posting note")
  }
})

// DELETE api/notes/:id for removing notes
router.delete("/:id", (req, res) => {
  const id = req.params.id
  // If the id exists then delete it
  if (id) {
    notes = notes.filter((note) => note.id !== id)

    fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 4), (err) =>
      err
        ? console.error(err)
        : console.log(`Note with id ${id} has been deleted from JSON file`)
    )

    const response = {
      status: "success",
      id: id,
    }

    res.status(201).json(response)
  } else {
    res.status(500).json("Error deleting note")
  }
})

// Export the router
module.exports = router
