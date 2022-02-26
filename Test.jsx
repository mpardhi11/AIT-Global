var http = require("http");
http
  .createServer(function (req, res) {
    res.write(`Hello Mohit Pardhi Testing NodeJS Test 3`);
    res.end();
  })
  .listen(8080, function () {
    console.log(`Server is Running`);
  });
