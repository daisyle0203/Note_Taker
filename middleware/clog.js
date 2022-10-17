const clog = (req, res, next) => {
  const yellow = "\x1b[33m%s\x1b[0m"
  console.log(yellow, `${req.method} request to ${req.path}`)
  next()
}

exports.clog = clog
