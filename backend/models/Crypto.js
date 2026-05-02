const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: String,
    symbol: String,
    price: Number,
    image: String,
    change24h: Number,
}, { timestamps: true });

module.exports = mongoose.model('Crypto', cryptoSchema);