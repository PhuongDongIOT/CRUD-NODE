exports.bodyParser = async (request) => {
  return new Promise((resolve, reject) => {
    let totalChunked = ""
    let arrtotalChunked = []
    request
      .on("error", err => {
        console.error(err)
        reject()
      })
      .on("data", chunk => {
        totalChunked += chunk
      })
      .on("end", () => {
        arrtotalChunked = totalChunked.split(/&/)
        resolve(arrtotalChunked)
      })
  })
}
