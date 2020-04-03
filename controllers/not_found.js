const fs = require('fs')
const path = require('path')

const filePathNotFound = path.join(__dirname, '../views/not_found.html');
exports.viewNotFound = (response) => {
  fs.readFile(filePathNotFound, {
    encoding: 'utf-8'
  },(err, data) => {
    if (!err) {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(data);
      response.end();
    } else {
      console.log(err);
    }
  });
}
