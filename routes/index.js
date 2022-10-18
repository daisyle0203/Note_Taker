// Set up router
const router = require("express").Router()

// Set up api/notes and html route request
const noteRouter = require("./notes")
const htmlRouter = require("./html")

// Use api/notes for noteRouter
router.use("/api/notes", noteRouter)
// Other request, use htmlRouter
router.use("/", htmlRouter)

// Export the router
module.exports = router
