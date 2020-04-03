const cb = require('../controllers/student')
const cnf = require('../controllers/not_found')

exports.apiRoute = (request, response) => {
  let url = request.url
  let method = request.method
  const urlR = /^\/(students){1}\/[0-9]{1,3}/i;
  console.log(method, url)
  switch (true) {
    case url == "/students":
    if (method === "GET") {
      cb.getViewStudents(response)
    }
    break
    case urlR.test(url):
    if (method === "GET") {
      cb.getDataOneStudent(request, response)
    }
    break
    case url == "/students-update-one":
    if (method === "POST") {
      cb.updateOneStudents(request, response)
    }
    break
    case url == "/students-delete-one":
    if (method === "POST") {
      cb.deleteOneStudents(request, response)
    }
    break
    case url == "/students-db":
    if (method === "GET") {
      cb.getDataStudents(response)
    }
    break

    default:
      cnf.viewNotFound(response)
  }
}
