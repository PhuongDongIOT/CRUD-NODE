const cb = require('../controllers/post')
const cpf = require('../controllers/file')
const cv = require('../controllers/view')
const cnf = require('../controllers/notFound')

exports.apiRoute = (request, response, db) => {
  let url = request.url
  let method = request.method
  console.log(method, url)
  switch (method) {
    case "POST":
      if (url === "/post") {
        cb.postHandler(request, response, db)
      }
      break

    case "GET":
      switch (true) {
        case url === "/post":
          cb.getPosts(request, response, db)
          break;
        case url === "/read-file":
          cpf.readFile(response)
          break;
        case url === "/view":
          cv.viewHTML(request, response)
          break;
          // default:

      }
      break

    case "PUT":
      cb.putPosts(request, response, db)
      break

    case "DELETE":
      cb.deletePost(request, response, db)
      break

    default:
      cnf.notFound(response)
  }
}
