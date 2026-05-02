import { Link } from "react-router-dom";

export default function PredictionMarkets() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/6zUsAxrSHcsKobRybPQsgW/d18c0469bc394f2b6af01b0bea61c67c/Prediction_Markets.png?fm=webp&w=1086&h=815&q=75"
            alt="Prediction Markets"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter">
            Turn your insights into trades.
          </h2>
          <p className="mt-4 text-gray-600">
            Trade your predictions on thousands of real world events across
            sports, politics, crypto, culture and more.³
          </p>
          <Link
            to="/prediction-markets"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
