import { Link } from "react-router-dom";

export default function DerivativesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/7kCZtH4AIjrrjDgrwBWQbm/623f3ef8facc44fac88637a6c7ceac5c/Derivatives.png?fm=webp&w=1086&h=815&q=75"
            alt="Derivatives screen"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter">
            Trade more with less
          </h2>
          <p className="mt-4 text-gray-600">
            Unlock leverage with futures and perpetuals trading.³
          </p>
          <Link
            to="/derivatives"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Trade now
          </Link>
        </div>
      </div>
    </section>
  );
}
