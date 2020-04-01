exports.notFound = (response) => {
  response.writeHead(400, { "Content-type": "text/plain" })
  response.write("Invalid URL")
  response.end()
}
