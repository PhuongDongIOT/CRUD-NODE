const http = require("http")
const crypto = require('crypto')
const far = require('./routes/route')

const server = http.createServer((request, response) => {
  let db = []
  far.apiRoute(request, response, db)
})
server.listen(9000, () => {
  console.log(`Server running on Port 9000`)
})
