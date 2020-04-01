exports.codeReturn = (response, code, contentType, text) => {
  response.writeHead(code, { "Content-type": contentType })
  response.write(text)
  response.end()
}
