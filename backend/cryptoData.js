const mongoose = require("mongoose");
require("dotenv").config();

const Crypto = require("./models/Crypto");

const cryptoAssets = [
    {
        rank: 1,
        name: "Bitcoin",
        symbol: "BTC",
        icon: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
        price: 68002.60,
        change: -1.47,
        mktCap: "$1.4T",
        volume: "$28.1B",
        sparkline:
            "M0,15 L5,16 L10,14 L15,17 L20,13 L25,16 L30,12 L35,15 L40,11 L45,14 L50,10",
        link: "/price/bitcoin",
        tradable: true,
    },
    {
        rank: 2,
        name: "Ethereum",
        symbol: "ETH",
        icon: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
        price: 1985.21,
        change: -0.56,
        mktCap: "$239.5B",
        volume: "$12.8B",
        sparkline:
            "M0,12 L5,14 L10,11 L15,15 L20,13 L25,16 L30,14 L35,18 L40,16 L45,19 L50,17",
        link: "/price/ethereum",
        tradable: true,
    },
    {
        rank: 3,
        name: "Tether",
        symbol: "USDT",
        icon: "https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png",
        price: 1.00,
        change: 0.0,
        mktCap: "$184.0B",
        volume: "$55.7B",
        sparkline:
            "M0,15 L5,15 L10,15 L15,15 L20,15 L25,15 L30,15 L35,15 L40,15 L45,15 L50,15",
        link: "/price/tether",
        tradable: true,
    },
    {
        rank: 4,
        name: "BNB",
        symbol: "BNB",
        icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png",
        price: 627.58,
        change: -0.31,
        mktCap: "$85.5B",
        volume: "$1.1B",
        sparkline:
            "M0,14 L5,13 L10,15 L15,12 L20,14 L25,11 L30,13 L35,10 L40,12 L45,9 L50,11",
        link: "/price/bnb",
        tradable: true,
    },
    {
        rank: 5,
        name: "XRP",
        symbol: "XRP",
        icon: "https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png",
        price: 1.36,
        change: -0.38,
        mktCap: "$83.3B",
        volume: "$1.5B",
        sparkline:
            "M0,16 L5,14 L10,17 L15,13 L20,15 L25,12 L30,14 L35,11 L40,13 L45,10 L50,12",
        link: "/price/xrp",
        tradable: true,
    },
    {
        rank: 6,
        name: "USDC",
        symbol: "USDC",
        subtitle: "Earns 3.50% APY",
        icon: "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
        price: 1.00,
        change: 0.0,
        mktCap: "$77.3B",
        volume: "$6.3B",
        sparkline:
            "M0,15 L5,15 L10,15 L15,15 L20,15 L25,15 L30,15 L35,15 L40,15 L45,15 L50,15",
        link: "/price/usdc",
        tradable: true,
    },
    {
        rank: 7,
        name: "Solana",
        symbol: "SOL",
        icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/b658adaf7913c1513c8d120bcb41934a5a4bf09b6adbcb436085e2fbf6eb128c.png",
        price: 84.10,
        change: -1.47,
        mktCap: "$48.0B",
        volume: "$2.3B",
        sparkline:
            "M0,10 L5,12 L10,9 L15,14 L20,11 L25,16 L30,13 L35,18 L40,15 L45,20 L50,17",
        link: "/price/solana",
        tradable: true,
    },
    {
        rank: 8,
        name: "TRON",
        symbol: "TRX",
        icon: "https://dynamic-assets.coinbase.com/49567ec5f7c7a1ccb3ce247297c443b3dd32072ee5b91902abc0f6789654e14fd3b9ed8851580b93b4daf7da13324bc61e143a2d391d9e6d8b98f8d69923e4b4/asset_icons/3c5b36c70a05bad40eee4f711aeefbb1809169a17db047bf91f1ef45828349e5.png",
        price: 0.28,
        change: -0.22,
        mktCap: "$27.0B",
        volume: "$340.6M",
        sparkline:
            "M0,14 L5,13 L10,15 L15,12 L20,14 L25,11 L30,13 L35,10 L40,12 L45,9 L50,11",
        link: "/price/tron",
        tradable: false,
    },
    {
        rank: 9,
        name: "Dogecoin",
        symbol: "DOGE",
        icon: "https://dynamic-assets.coinbase.com/3803f30367bb3972e192cd3fdd2230cd37e6d468eab12575a859229b20f12ff9c994d2c86ccd7bf9bc258e9bd5e46c5254283182f70caf4bd02cc4f8e3890d82/asset_icons/1597d628dd19b7885433a2ac2d7de6ad196c519aeab4bfe679706aacbf1df78a.png",
        price: 0.0900,
        change: -0.95,
        mktCap: "$13.8B",
        volume: "$706.2M",
        sparkline:
            "M0,16 L5,14 L10,17 L15,13 L20,16 L25,12 L30,15 L35,11 L40,14 L45,10 L50,13",
        link: "/price/dogecoin",
        tradable: true,
    },
    {
        rank: 10,
        name: "Cardano",
        symbol: "ADA",
        icon: "https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png",
        price: 0.26,
        change: -1.37,
        mktCap: "$9.2B",
        volume: "$401.2M",
        sparkline:
            "M0,12 L5,14 L10,11 L15,15 L20,12 L25,16 L30,13 L35,17 L40,14 L45,18 L50,15",
        link: "/price/cardano",
        tradable: true,
    },
];



async function seedData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB");

        // Option 1: Clear and insert fresh
        await Crypto.deleteMany({});
        await Crypto.insertMany(cryptoAssets);

        /*
        for (const asset of cryptoAssets) {
          await Crypto.updateOne(
            { symbol: asset.symbol },
            { $set: asset },
            { upsert: true }
          );
        }
        */

        console.log("Data seeded successfully");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seedData();