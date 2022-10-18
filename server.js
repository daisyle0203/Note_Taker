// Require express
const express = require("express")
// Require clog middleware
const { clog } = require("./middleware/clog")
// Set link for route index file
const routes = require("./routes/")

// Call express
const app = express()
// Set up port
const PORT = process.env.PORT || 3001

// Call middleware for printing yellow text in the terminal
app.use(clog)
// Call middleware for parsing JSON and urlencoded form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// For index.html and notes.html page, use the static route
app.use(express.static("public"))

// For other routes, use route index file
app.use("/", routes)

// Server set to listen to PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)
