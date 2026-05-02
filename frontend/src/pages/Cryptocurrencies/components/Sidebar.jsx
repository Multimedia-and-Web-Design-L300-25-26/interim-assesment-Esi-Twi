import { Link } from "react-router-dom";

const topMovers = [
  {
    symbol: "ALCX",
    name: "Alchemix",
    change: "+61.55%",
    price: "$7.09",
    icon: "https://dynamic-assets.coinbase.com/de1809b24ff2b8ed9fca46b724d19187c3b0c91cb5b2450ac698a140fc13d114197a37d1e935fccbb8a21af60e60e7530840c8fdae1548d3a0568b26126e64d5/asset_icons/0c985c71c38dc9739f2b140999854f2c945d8382f0490caea544dbda22822817.png",
    link: "/price/alchemix",
  },
  {
    symbol: "PERP",
    name: "Perpetual Protocol",
    change: "+28.68%",
    price: "$0.0431",
    icon: "https://dynamic-assets.coinbase.com/36990d4992a1beb72e3401639937b7f6072fefec7d824b7694357bbc593a17eebc89aa6b0f2ee28bed0a2cd77603f3a894624e7a0d4de23ec9f3780a4f9d9046/asset_icons/ef405dd9819f0f4f47cefc8b67bd9eee5e41f68f9d32df27712568cbe5aa99ce.png",
    link: "/price/perpetual-protocol",
  },
  {
    symbol: "PIRATE",
    name: "Pirate Nation Token",
    change: "+20.87%",
    price: "$0.0070",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/00570af87d094ef3dac580a7db5ae9af34d5f35991a9b64f7011e6b5b275dca2.png",
    link: "/price/pirate-nation-token",
  },
  {
    symbol: "SYND",
    name: "Base Syndicate",
    change: "+20.24%",
    price: "$0.0664",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/49481e1faf7fdce7ba2cdfd56a860938bec01c20d0090149ca8820be6789e1dc.png",
    link: "/price/base-syndicate-22b9",
  },
];

const newOnCoinbase = [
  {
    symbol: "HYPE",
    name: "Hyperliquid",
    addedDate: "Added Feb 5",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/6a8c816c50549afbdb1a73933132c71d7aa26ba900d285e624d5a24ce9b068c4.png",
    link: "/price/hyperliquid",
  },
  {
    symbol: "JUPITER",
    name: "Jupiter",
    addedDate: "Added Dec 9",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/5d6ff9739df73322f2ce9938a299a319e555c6c21653209e23decbee853a2808.png",
    link: "/price/jupiter-sol",
  },
  {
    symbol: "LIGHTER",
    name: "Lighter",
    addedDate: "Added Jan 15",
    icon: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/e0948a308872e982d7978d44c4f3e7b11436b02436b095072272050e92acfa14.png",
    link: "/price/lighter",
  },
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Promo card */}
      <div className="bg-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[16px] font-bold leading-snug tracking-[-0.01em]">
            Earn up to $2,000 when you buy $50 in crypto
          </p>
          <p className="text-[13px] mt-1.5 text-blue-100">
            Create your account today
          </p>
          <Link
            to="/signup"
            className="inline-block mt-4 px-5 py-2.5 bg-white text-blue-600 text-[13px] font-semibold rounded-full hover:bg-blue-50 transition"
          >
            Sign up
          </Link>
        </div>
        {/* Decorative illustration */}
        <div className="absolute right-2 bottom-2 w-24 h-24 opacity-30">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" />
            <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <p className="text-[11px] text-gray-400">
        Restrictions apply.{" "}
        <a
          href="https://help.coinbase.com/coinbase/getting-started/getting-started-with-coinbase/new-customer-incentive"
          className="underline hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          See full terms.
        </a>
      </p>

      {/* Top movers */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[18px] font-bold tracking-[-0.01em]">
            Top movers
          </h3>
          <div className="flex gap-2">
            <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-50 transition">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-50 transition">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-[12px] text-gray-400 mb-3">24hr change</p>

        <div className="grid grid-cols-2 gap-3">
          {topMovers.slice(0, 2).map((mover) => (
            <Link
              key={mover.symbol}
              to={mover.link}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition text-center"
            >
              <img
                src={mover.icon}
                alt={mover.symbol}
                className="w-10 h-10 rounded-full mx-auto mb-2.5"
              />
              <div className="text-[11px] font-medium text-gray-400 mb-1">
                {mover.symbol}
              </div>
              <div className="text-[14px] font-bold text-green-500 flex items-center justify-center gap-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 8V2M5 2L2 5M5 2l3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {mover.change.replace("+", "")}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">
                {mover.price}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* New on Coinbase */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[18px] font-bold tracking-[-0.01em]">
            New on Coinbase
          </h3>
          <div className="flex gap-2">
            <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-50 transition">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="p-1 rounded-full border border-gray-200 hover:bg-gray-50 transition">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {newOnCoinbase.slice(0, 2).map((coin) => (
            <Link
              key={coin.symbol}
              to={coin.link}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition text-center"
            >
              <img
                src={coin.icon}
                alt={coin.symbol}
                className="w-10 h-10 rounded-full mx-auto mb-2.5"
              />
              <div className="text-[11px] font-bold text-gray-400 mb-0.5">
                {coin.symbol}
              </div>
              <div className="text-[14px] font-semibold text-gray-900">
                {coin.name}
              </div>
              <div className="text-[11px] text-gray-400 mt-1">
                {coin.addedDate}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
