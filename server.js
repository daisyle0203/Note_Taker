// Require express
const express = require("express")
// Require clog middleware
const { clog } = require("./middleware/clog")
// Set up link for routers
const htmlRouter = require("./routes/html.js")
const notesRouter = require("./routes/notes.js")

// Call express
const app = express()
// Set up port
const PORT = process.env.PORT || 3001

// Middleware for parsing JSON and urlencoded form data
app.use(clog)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use("/", htmlRouter)
app.use("/notes", notesRouter)

// Server set to listen to PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)
