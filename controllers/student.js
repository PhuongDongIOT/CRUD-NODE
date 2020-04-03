const fs = require('fs')
const path = require('path')

const bd = require('../helpers/body_parsers')
var dt = require('../datas/data_students')
var dataStudent = dt.students;
var maxId = 0;
for (var i = 0; i < dt.students.length; i++) {
  if (dt.students[i].id > maxId) {
    maxId = dt.students[i].id;
  }
}
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
    if (dataStudent[i].id == arrIndexUrl[2]) {
      const jsonData = JSON.stringify(dataStudent[i])
      response.end(jsonData)
    }
  }
}

exports.addOneStudent = async (request, response) => {
  let requestBody = await bd.bodyParser(request)
  const idStudent = requestBody[1].split(/=/)
  const name = requestBody[2].split(/=/)
  const age = requestBody[3].split(/=/)
  const classs = requestBody[4].split(/=/)
  const jsonData = {
    id: ++maxId,
    name: name[1],
    age: age[1],
    class: classs[1],
  }
  dataStudent.push(jsonData)
  response.writeHead(302, {
    'Location': 'http://localhost:9000/students'
  });
  response.end();
}

exports.updateOneStudents = async (request, response) => {
  let requestBody = await bd.bodyParser(request)
  const idStudent = requestBody[1].split(/=/)
  const name = requestBody[2].split(/=/)
  const age = requestBody[3].split(/=/)
  const classs = requestBody[4].split(/=/)
  for (let i = 0; i < dataStudent.length; i++) {
    if (idStudent[1] == dataStudent[i].id) {
      dataStudent[i].name = name[1];
      dataStudent[i].age = age[1];
      dataStudent[i].classs = classs[1];
    }
  }

  response.writeHead(302, {
    'Location': 'http://localhost:9000/students'
  });
  response.end();
}

exports.deleteOneStudents = async (request, response) => {
  let requestBody = await bd.bodyParser(request)
  const idStudent = requestBody[1].split(/=/)
  for (var i = 0; i < dataStudent.length; i++) {
    if (idStudent[1] == dataStudent[i].id) {
      console.log(dataStudent.splice(i, 1))
    }
  }
  response.writeHead(302, {
    'Location': 'http://localhost:9000/students'
  });
  response.end();
}
