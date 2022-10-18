// Set up router
const router = require("express").Router()
// Require path module
const path = require("path")

// GET/notes returns the notes.html file
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
)

// GET * returns the index.html file
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
)

// Export the router
module.exports = router
