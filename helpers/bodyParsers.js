exports.bodyParser = async (request) => {
  return new Promise((resolve, reject) => {
    let totalChunked = ""
    request
      .on("error", err => {
        console.error(err)
        reject()
      })
      .on("data", chunk => {
        totalChunked += chunk
      })
      .on("end", () => {
        request.body = JSON.parse(totalChunked)
        resolve()
      })
  })
}
