

exports.viewHTML = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>Hello HTML</h1>');
  return response.end();
}
