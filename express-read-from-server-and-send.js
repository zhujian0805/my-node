var express = require('express');
var app = express();
i = 0

app.get('/baidu', function (req, res) {
   i++;
   console.log(i + " Request Received!")
   var http = require('http');
   var options = {
       // open another terminal and execute "nodejs main.js" to listen on 80
       host: 'localhost'
   };

   callback = function(response) {   
    var str = '';

    response.on('data', function (chunk) {
        console.log("Reading data!!!")
        str += chunk;
    });

    response.on('end', function () {
        console.log(response.statusCode)
        res.send(str)
    });

   }

   var request = http.request(options, callback);

   request.on('error', function(err) {
    res.send("Error for reading from remote!!\n")
   });

   request.end()
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
