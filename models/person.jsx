const mongosse = require('mongoose');

const Pessoas = mongosse.model('pessoas', {
    name: String,
    email: String,
    senha: String,
})


module.exports = Pessoas
