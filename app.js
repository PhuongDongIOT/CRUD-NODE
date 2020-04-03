const http = require("http")
const far = require('./routes/route')

const server = http.createServer((request, response) => {
  far.apiRoute(request, response)
})
server.listen(9000, () => {
  console.log(`Server running on Port 9000`)
})
