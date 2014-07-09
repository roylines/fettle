var router = require('router')(),
  server = require('http').Server(router);

router.get('/', function(req, res) {
  res.statusCode = 200;
  res.end();
});

var port = process.env.PORT || 8000;
server.listen(port, function() {
  console.log('listening on ' + port);
});
