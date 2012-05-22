var connect = require('connect');

var app = connect();
app.use(connect.compress());
app.use(connect.static(__dirname + '/public'));

app.listen(3000);
