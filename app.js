var express = require('express')
var app = express.createServer()

app.get('/', function(req, res) {
    console.log("Hello World!")
    res.send("Hello World!")
})

app.listen(3333)
console.log("Listening on 3333")
