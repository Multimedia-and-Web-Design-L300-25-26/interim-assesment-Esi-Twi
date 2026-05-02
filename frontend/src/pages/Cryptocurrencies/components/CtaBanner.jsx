import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="bg-blue-600 rounded-2xl px-8 py-10 md:px-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
      <div className="text-white flex-1">
        <h2 className="text-[18px] md:text-[20px] font-bold leading-snug tracking-[-0.01em]">
          Create a Coinbase account to trade crypto. It's quick, easy, and
          secure.
        </h2>
      </div>
      <Link
        to="/signup"
        className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 text-[14px] font-semibold rounded-full hover:bg-gray-100 transition"
      >
        Start Trading
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </section>
  );
}
