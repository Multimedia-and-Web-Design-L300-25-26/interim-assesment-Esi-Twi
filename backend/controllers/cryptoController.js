const Crypto = require('../models/Crypto');

exports.getAll = async (req, res) => {
    const data = await Crypto.find();
    res.json(data);
};

exports.getGainers = async (req, res) => {
    const data = await Crypto.find().sort({ change24h: -1 });
    res.json(data);
};

exports.getNew = async (req, res) => {
    const data = await Crypto.find().sort({ createdAt: -1 });
    res.json(data);
};

exports.createCrypto = async (req, res) => {
    const { name, symbol, price, image, change24h } = req.body;

    const crypto = await Crypto.create({
        name,
        symbol,
        price,
        image,
        change24h,
    });

    res.status(201).json(crypto);
};
