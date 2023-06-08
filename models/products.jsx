const mongoose = require("mongoose");

const Produto = mongoose.model("produtos", {
    nomeProduto: String,
    valorProduto: Number,
    urlProduto: String,
    tempoProduto: Number,
})


module.exports = Produto