var express = require('express')
var app = express.createServer()

app.get('/', function(req, res) {
    res.send("Hello World!")
})

// json/ajax call to get a user's email
app.get('/users/:username/email', function(req, res) {
    var username = req.param('username')
    users.getUser(username, function(err, user) {
        if (err) return res.send({error:err.message}, 500)
        res.send({email:user.email})
    })
})

// NORMAL START
// app.listen(3333)
// console.log("Listening on 3333")

// CLUSTER!
var os = require('os')
var cluster = require('cluster')
if (cluster.isMaster) {

    for (var i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
}
else {
    var PORT = process.env.PORT || 3333
    app.listen(PORT)
    console.log("Listening on " + PORT)
}







// FAKE USERS MODULE
var users = {}

var FakeUsers = {
     "seanhess": {"email":"seanhess@hotmail.com"}
}

// fake database call
users.getUser = function(username, cb) {
      process.nextTick(function() {
          cb(null, FakeUsers[username])
      })
}





