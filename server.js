var express = require('express');
var app = express();
var port = 3050;
var path = __dirname+"/public";

app.use(express.static(path));

app.get('/', function(req, res) {
    res.sendFile('public/index_noreact.html', {root: __dirname })
});

app.listen(port);
console.log('Listening on :' + port);