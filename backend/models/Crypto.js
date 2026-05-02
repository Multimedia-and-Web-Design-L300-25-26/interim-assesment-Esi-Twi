const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    rank: Number,
    name: String,
    symbol: String,
    icon: String,
    price: String,
    change: Number,
    mktCap: String,
    volume: String,
    sparkline: String,
    link: String,
    tradable: Boolean,
    subtitle: String,
}, { timestamps: true });

module.exports = mongoose.model('Crypto', cryptoSchema);