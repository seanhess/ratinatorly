var express = require('express')
var app = express.createServer()

app.get('/', function(req, res) {
    console.log("Hello World!")
    res.send("Hello World!")
})

var PORT = process.env.PORT || 3333
app.listen(PORT)
console.log("Listening on " + PORT)
