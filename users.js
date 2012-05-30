
// FAKE USERS MODULE
var users = {}

var FakeUsers = {
    "seanhess": {"email":"seanhess@hotmail.com"}
}

// fake database call
exports.getUser = function(username, cb) {
    process.nextTick(function() {
        cb(null, FakeUsers[username])
    })
}





