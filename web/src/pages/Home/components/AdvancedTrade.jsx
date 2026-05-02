import { Link } from "react-router-dom";

export default function AdvancedTrade() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter">
            Powerful tools, designed for the advanced trader.
          </h2>
          <p className="mt-4 text-gray-600">
            Powerful analytical tools with the safety and security of Coinbase
            deliver the ultimate trading experience. Tap into sophisticated
            charting capabilities, real-time order books, and deep liquidity
            across hundreds of markets.
          </p>
          <Link
            to="/advanced-trade"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Start trading
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png?fm=webp&w=2014&h=1612&q=75"
            alt="Advanced Trade Mobile UI"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
