import { useState } from "react";

export default function ExploreHeader() {
  const [search, setSearch] = useState("");

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-bold tracking-[-0.02em] leading-tight">
            Explore crypto
          </h1>
          <div className="flex items-center gap-1.5 mt-2.5 text-[14px] text-gray-500">
            <span>Coinbase 50 Index is down</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-red-500"
            >
              <path
                d="M6 2v8M6 10l-3-3M6 10l3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-red-500 font-medium">0.79%</span>
            <span>(24hrs)</span>
            <button className="ml-1 text-gray-400 hover:text-gray-600">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-[380px]">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for an asset"
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-50 placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
