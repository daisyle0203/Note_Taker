const router = require("express").Router()

const noteRoutes = require("./notes")
const htmlRoutes = require("./html")

router.use("/api/notes", noteRoutes)

module.exports = router
