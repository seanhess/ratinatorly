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

