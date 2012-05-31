var express = require('express')
var app = express.createServer()
var users = require('./users')

app.get('/', function(req, res) {
    console.log("Hello World!")
    res.send("Hello World!")
})

// json/ajax call to get a user's email
app.get('/users/:username/email', function(req, res) {
    var username = req.param('username')
    users.getUser(username, function(err, user) {
        if (err) return res.send({error:err.message}, 500)
        // if (!user) return res.send({error:"Not found"}, 404)
        res.send({email:user.email})
    })
})

process.on("uncaughtException", 
  function(err) {
  // maybe email it or something
  console.log(err.stack)
})

var PORT = process.env.PORT || 3333
app.listen(PORT)
console.log("Listening on " + PORT)
