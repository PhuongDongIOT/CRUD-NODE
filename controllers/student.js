const fs = require('fs')
const path = require('path')

const bd = require('../helpers/body_parsers')
var dt = require('../datas/data_students')
var dataStudent = dt.students;

const filePathStudent = path.join(__dirname, '../views/student.html');

exports.getViewStudents = (response) => {
  fs.readFile(filePathStudent, {
    encoding: 'utf-8'
  }, (err, data) => {
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

exports.getDataStudents = (response) => {
  response.writeHead(200, {
    "Content-Type": "application/json"
  })
  const jsonData = JSON.stringify(dataStudent)
  response.end(jsonData)
}

exports.getDataOneStudent = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json"
  })
  var arrIndexUrl = request.url.split("/");
  for (var i = 0; i < dataStudent.length - 1; i++) {
    if (dataStudent[i].id = arrIndexUrl[2]) {
      const jsonData = JSON.stringify(dataStudent[i])
      response.end(jsonData)
    }
  }
}

exports.updateOneStudents = async (request, response) => {


  response.writeHead(302, {
    'Location': 'http://localhost:9000/students'
  });
  response.end();
}

exports.deleteOneStudents = (request, response) => {
  dataStudent.splice(2, 1);
  response.writeHead(302, {
    'Location': 'http://localhost:9000/students'
  });
  response.end();
}
