
var path = require('path');
var static = require('node-static');


module.exports = function(folderPath, port) {
  port = port || 1313;
  folderPath = path.resolve(folderPath);
  var file = new static.Server(folderPath);

  var server = require('http').createServer(function (request, response) {
      request.addListener('end', function () {
          file.serve(request, response);
      }).resume();
  });

  server.listen(port);
  return server;
};
