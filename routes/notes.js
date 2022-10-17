const router = require("express").Router()
const { v4: uuidv4 } = require("uuid")
const fs = require("fs")

let notes = require("../db/db.json")

router.get("/", (req, res) => {
  return res.json(notes)
})

router.post("/", (req, res) => {
  const { title, text } = req.body

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }

    notes.push(newNote)

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

router.delete("/:id", (req, res) => {
  const id = req.params.id

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

module.exports = router
