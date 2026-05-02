import { useState } from "react";

const stats = [
  {
    label: "Total market cap",
    value: "$2.26T",
    change: "0.30%",
    down: true,
    color: "text-red-500",
  },
  {
    label: "Trade volume",
    value: "$115.65B",
    change: "38.86%",
    down: true,
    color: "text-red-500",
  },
  {
    label: "Buy-sell ratio",
    value: "$0.78",
    change: "4.53%",
    down: true,
    color: "text-red-500",
  },
  {
    label: "BTC dominance",
    value: "60.09%",
    change: "0.33%",
    down: true,
    color: "text-red-500",
  },
];

// SVG mini sparkline paths for each stat card
const sparklines = [
  "M0,20 L8,18 L16,22 L24,15 L32,17 L40,12 L48,14 L56,10 L64,13 L72,8 L80,11 L88,6 L96,9 L104,5 L112,7 L120,4",
  "M0,10 L8,12 L16,8 L24,14 L32,16 L40,18 L48,15 L56,20 L64,22 L72,19 L80,24 L88,21 L96,25 L104,23 L112,26 L120,24",
  "M0,12 L8,10 L16,14 L24,11 L32,16 L40,18 L48,20 L56,17 L64,22 L72,19 L80,24 L88,22 L96,25 L104,23 L112,26 L120,25",
  "M0,15 L8,14 L16,16 L24,13 L32,12 L40,14 L48,11 L56,13 L64,10 L72,12 L80,9 L88,11 L96,8 L104,10 L112,7 L120,9",
];

export default function MarketStats() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mb-0 pb-10 border-b border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-bold tracking-[-0.02em]">
          Market stats
        </h2>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50 transition">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-50 transition">
            <svg
              width="16"
              height="16"
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

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-gray-600 mb-1">
        The overall crypto market is growing this week. As of today, the total
        crypto market capitalization is 2.26 trillion, representing a 4.67%
        increase from last week.
        {expanded && (
          <span>
            {" "}
            The 24-hour crypto market trading volume has also seen a 0.30%
            decrease over the past day. The top performing cryptocurrencies by
            price are Alchemix, Perpetual Protocol and Pirate Nation Token.
            Bitcoin remains the largest cryptocurrency by market capitalization
            of $1,358,295,311,055.39. Its 24-hour trading volume has seen a
            40.50% decrease over the past day.
          </span>
        )}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[14px] font-medium text-blue-600 hover:underline mb-8"
      >
        {expanded ? "Read less" : "Read more"}
      </button>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <a
            key={stat.label}
            href="/market-stats"
            className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
          >
            <div className="text-[12px] text-gray-500 mb-1.5">{stat.label}</div>
            <div className="text-[18px] font-bold tracking-[-0.01em]">
              {stat.value}
            </div>
            <div
              className={`text-[12px] font-medium flex items-center gap-1 mt-0.5 ${stat.color}`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                {stat.down ? (
                  <path
                    d="M5 2v6M5 8L2 5M5 8l3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M5 8V2M5 2L2 5M5 2l3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
              {stat.change}
            </div>
            {/* Sparkline */}
            <div className="mt-4 h-10">
              <svg
                viewBox="0 0 120 30"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d={sparklines[i]}
                  fill="none"
                  stroke={stat.down ? "#ef4444" : "#22c55e"}
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
