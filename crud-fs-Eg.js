var http = require("http");
var fs = require("fs");
//read file
http
  .createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
//create/append content in file
// var fs = require("fs");

// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
// //======fs.open()
// var fs = require("fs");

// fs.open("mynewfile2.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// ============fs.writeFile()
// var fs = require("fs");

// fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
//===============fs.appendFile()

// var fs = require("fs");

// fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
//   if (err) throw err;
//   console.log("Updated!");
// });
//================fs.writeFile()
// var fs = require("fs");

// fs.writeFile("mynewfile3.txt", "Hai! 123", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
//============The fs.unlink() method deletes the specified file:

// var fs = require("fs");

// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });

//==========fs.rename()
// var fs = require("fs");

// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });
//=========
