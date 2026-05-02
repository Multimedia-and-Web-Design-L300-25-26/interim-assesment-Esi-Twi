import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
    price: "$97,245.00",
    change: "+2.31%",
    up: true,
    link: "/price/bitcoin",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
    price: "$2,456.12",
    change: "+1.87%",
    up: true,
    link: "/price/ethereum",
  },
  {
    name: "Tether",
    symbol: "USDT",
    icon: "https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png",
    price: "$1.00",
    change: "+0.01%",
    up: true,
    link: "/price/tether",
  },
  {
    name: "BNB",
    symbol: "BNB",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png",
    price: "$618.50",
    change: "-0.45%",
    up: false,
    link: "/price/bnb",
  },
  {
    name: "XRP",
    symbol: "XRP",
    icon: "https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png",
    price: "$2.35",
    change: "+3.12%",
    up: true,
    link: "/price/xrp",
  },
  {
    name: "USDC",
    symbol: "USDC",
    icon: "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
    price: "$1.00",
    change: "--",
    up: true,
    link: "/price/usdc",
  },
];

export default function ExploreTokens() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        {/* Left text */}
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>
          <p className="mt-4 text-gray-600">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>
          <Link
            to="/explore"
            className="inline-block mt-6 px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition"
          >
            See more assets
          </Link>
        </div>

        {/* Right — crypto table */}
        <div className="w-full md:w-7/12 bg-gray-900 rounded-2xl p-6 text-white">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition ${
                  activeTab === i
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="space-y-4">
            {cryptoData.map((coin) => (
              <Link
                key={coin.symbol}
                to={coin.link}
                className="flex items-center justify-between hover:bg-gray-800 rounded-lg px-2 py-2 -mx-2 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={coin.icon}
                    alt={coin.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-sm">{coin.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">{coin.price}</div>
                  <div
                    className={`text-xs ${
                      coin.up ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {coin.change}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
