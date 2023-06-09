const mongosse = require('mongoose');



const Admins = mongosse.model('admins', {
    name: String,
    email: String,
    senha: String,
    cargo: String,
})

module.exports = Admins