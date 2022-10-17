// Require express
const express = require('express');
// Require clog middleware
const { clog } = require('./middleware/clog');
// Set up link for router
const routes = require('./routes/')

// Call express 
const app = express();
// Set up port
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clog)

// Set up static middleware
app.use(express.static('public'));
// Set up routes middleware
app.use('/', routes);

// Server set to listen to PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
