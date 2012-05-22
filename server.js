var express = require('express')
  , connect = require('connect');

var app = express.createServer();

app.configure(function() {
  app.use(connect.compress({
    filter: function(req, res) {
      var type = res.getHeader('Content-Type') || '';
      var match = type.match(/json|text|javascript/);
      console.log(' > ' + req.url, type || '(no type)', !!match);
      return !!match;
    }
  }));
  app.use(express.static(__dirname + "/public"));
});

app.listen(3000);
