var fs = require('fs')
var path = require('path')

var filePath = path.join(__dirname, '../assets/file/file.txt');
exports.readFile = (response) => {
  fs.readFile(filePath, {
    encoding: 'utf-8'
  },(err, data) => {
    if (!err) {
      console.log('received data: ' + data);
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
