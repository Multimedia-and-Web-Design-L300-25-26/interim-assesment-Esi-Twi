import { Link } from "react-router-dom";

export default function StocksSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/23gHfTZx8aN8SS1AbYxueV/c74a642deea5d9430aa103adf1210eae/Stocks__1_.png?fm=webp&w=1086&h=815&q=75"
            alt="Stocks screen"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter">
            Trade stocks around the clock
          </h2>
          <p className="mt-4 text-gray-600">
            Get 24/5 access to thousands of stocks and pay zero commission. Now
            available to all U.S. traders.²
          </p>
          <Link
            to="/stocks"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Start trading
          </Link>
          <p className="mt-3 text-xs text-gray-400">
            Image is for informational purposes. Prices shown may not reflect
            current price.
          </p>
        </div>
      </div>
    </section>
  );
}
