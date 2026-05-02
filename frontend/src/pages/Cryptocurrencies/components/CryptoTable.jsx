import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const filterOptions = [
  "All assets",
  "Tradable",
  "DeFi",
  "Memes",
  "Layer 1",
  "Layer 2",
];
const timeFrames = ["1H", "1D", "1W", "1M", "1Y"];
const currencies = ["USD", "EUR", "GBP", "GHS"];
const rowOptions = [10, 25, 50, 100];

export default function CryptoTable() {
  const [selectedFilter, setSelectedFilter] = useState("All assets");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("1D");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedRows, setSelectedRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("mktCap");
  const [sortDir, setSortDir] = useState("desc");
  const [expanded, setExpanded] = useState(false);
  const [endpoint, setEndpoint] = useState("http://localhost:3000/api/crypto");

  const totalAssets = 18591;
  const totalPages = 1860;

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        setLoading(true);

        const res = await fetch(endpoint);

        if (!res.ok) throw new Error("Failed to fetch crypto data");

        const data = await res.json();
        setCryptoAssets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, [endpoint]);

  const [cryptoAssets, setCryptoAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    price: "",
    icon: "",
    change: ""
  });

  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddCrypto = async () => {
    try {
      setSubmitting(true);

      const res = await fetch("http://localhost:3000/api/crypto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          symbol: formData.symbol,
          price: Number(formData.price),
          icon: formData.icon,
          change: Number(formData.change)
        })
      });

      if (!res.ok) {
        throw new Error("Failed to add cryptocurrency");
      }

      const data = await res.json();

      // refresh table after success
      setCryptoAssets((prev) => [data, ...prev]);

      setFormData({
        name: "",
        symbol: "",
        price: "",
        icon: "",
        change: ""
      });

      setShowForm(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };


  if (loading) {
    return <p className="text-white">Loading crypto...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="mb-10 pt-10">
      {/* Section header */}
      <div className="flex items-baseline gap-3 mb-3">
        <h2 className="text-[22px] font-bold tracking-[-0.02em]">
          Crypto market prices
        </h2>
        <span className="text-[13px] text-gray-400 font-normal">
          {totalAssets.toLocaleString()} assets
        </span>
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
          </span>
        )}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[14px] font-medium text-blue-600 hover:underline mb-2"
      >
        {expanded ? "Read less" : "Read more"}
      </button>


      <button
        onClick={() => setShowForm(true)}
        className="block px-5  mb-5 py-2 text-[13px] font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        Add New
      </button>

      {showForm && (
        <div className="mb-6 p-4 border rounded-lg bg-white">
          <div className="grid grid-cols-2 gap-3">

            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="symbol"
              placeholder="Symbol"
              value={formData.symbol}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="price"
              placeholder="Price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="change"
              placeholder="24h Change (%)"
              type="number"
              value={formData.change}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="icon"
              placeholder="Image URL"
              value={formData.icon}
              onChange={handleChange}
              className="border p-2 rounded col-span-2"
            />
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={handleAddCrypto}
              disabled={submitting}
              className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            >
              {submitting ? "Adding..." : "Save"}
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    

      {/* Filters */}
      <div className="flex flex-wrap gap-2.5 mb-7">
        {/* Asset filter */}
        <div className="relative">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="appearance-none pl-8 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {filterOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
          </svg>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Time frame */}
        <div className="relative">
          <select
            value={selectedTimeFrame}
            onChange={(e) => setSelectedTimeFrame(e.target.value)}
            className="appearance-none px-4 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {timeFrames.map((tf) => (
              <option key={tf} value={tf}>
                {tf}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Currency */}
        <div className="relative">
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="appearance-none px-4 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Rows per page */}
        <div className="relative">
          <select
            value={selectedRows}
            onChange={(e) => setSelectedRows(Number(e.target.value))}
            className="appearance-none px-4 pr-8 py-2 border border-gray-200 rounded-full text-[13px] font-medium bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {rowOptions.map((r) => (
              <option key={r} value={r}>
                {r} rows
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>


        <button
          onClick={() => setEndpoint("http://localhost:3000/api/crypto/new")}
          className="block px-5 mb-5 py-2 text-[13px] font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition cursor-pointer"
        >
          New Listings
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="py-3 pr-2 w-10"></th>
              <th className="py-3 px-3 font-medium text-[13px]">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Asset
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden md:table-cell">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Market price
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden lg:table-cell">
                Chart
              </th>
              <th className="py-3 px-3 font-medium text-[13px]">
                <button
                  onClick={() => setEndpoint("http://localhost:3000/api/crypto/gainers")}
                  className="flex items-center cursor-pointer gap-1 hover:text-gray-900"
                >
                  Change
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden md:table-cell">
                <button className="flex items-center gap-1 hover:text-gray-900 text-blue-600">
                  Mkt cap
                  <SortIcon active />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] hidden lg:table-cell">
                <button className="flex items-center gap-1 hover:text-gray-900">
                  Volume
                  <SortIcon />
                </button>
              </th>
              <th className="py-3 px-3 font-medium text-[13px] text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoAssets.map((asset) => (
              <tr
                key={asset.symbol}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {/* Star / Favorite */}
                <td className="py-5 pr-2 pl-1">
                  <button className="text-gray-300 hover:text-yellow-400 transition">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                </td>

                {/* Asset name */}
                <td className="py-5 px-3">
                  <Link to={asset.link} className="flex items-center gap-3">
                    <img
                      src={asset.icon}
                      alt={asset.name}
                      className="w-8 h-8 rounded-full shrink-0"
                    />
                    <div>
                      <div className="font-medium text-[14px] text-gray-900">
                        {asset.name}
                      </div>
                      <div className="text-[12px] text-gray-400 mt-0.5">
                        {asset.symbol}
                      </div>
                      {asset.subtitle && (
                        <div className="text-xs text-blue-600">
                          {asset.subtitle}
                        </div>
                      )}
                    </div>
                  </Link>
                </td>

                {/* Price (hidden on mobile — shown via change column) */}
                <td className="py-5 px-3 font-medium text-[14px] hidden md:table-cell">
                 GHS {asset.price}
                </td>

                {/* Sparkline chart */}
                <td className="py-5 px-3 hidden lg:table-cell">
                  <svg
                    viewBox="0 0 50 30"
                    className="w-20 h-8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={asset.sparkline}
                      fill="none"
                      stroke={
                        asset.change < 0
                          ? "#ef4444"
                          : asset.change > 0
                            ? "#22c55e"
                            : "#9ca3af"
                      }
                      strokeWidth="1.5"
                    />
                  </svg>
                </td>

                {/* Change */}
                <td className="py-5 px-3">
                  <div className="md:hidden text-[12px] text-gray-900 font-medium mb-0.5">
                    {asset.price}
                  </div>
                  <span
                    className={`text-[14px] font-medium flex items-center gap-0.5 ${
                      asset.change < 0
                        ? "text-red-500"
                        : asset.change > 0
                          ? "text-green-500"
                          : "text-gray-500"
                    }`}
                  >
                    {asset.change < 0 ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M5 2v6M5 8L2 5M5 8l3-3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : asset.change > 0 ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M5 8V2M5 2L2 5M5 2l3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                    {Math.abs(asset.change).toFixed(2)}%
                  </span>
                </td>

                {/* Market cap */}
                <td className="py-5 px-3 hidden md:table-cell text-[14px] text-gray-600">
                  {asset.mktCap}
                </td>

                {/* Volume */}
                <td className="py-5 px-3 hidden lg:table-cell text-[14px] text-gray-600">
                  {asset.volume}
                </td>

                {/* Trade button */}
                <td className="py-5 px-3 text-right">
                  {asset.tradable && (
                    <Link
                      to="/signup"
                      className="inline-flex px-5 py-2 text-[13px] font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                    >
                      Trade
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
        <div className="flex items-center gap-1.5">
          <PaginationBtn active>1</PaginationBtn>
          <PaginationBtn>2</PaginationBtn>
          <PaginationBtn>3</PaginationBtn>
          <span className="text-[13px] text-gray-400 px-1">...</span>
          <PaginationBtn>{totalPages.toLocaleString()}</PaginationBtn>
          <button className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-gray-600 hover:text-blue-600 transition ml-1">
            <span>Next page</span>
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
        <span className="text-[12px] text-gray-400">
          1-10 of {totalAssets.toLocaleString()} assets
        </span>
      </div>
    </section>
  );
}

function SortIcon({ active }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={active ? "text-blue-600" : "text-gray-400"}
    >
      <path d="M6 2L9 5H3L6 2Z" fill="currentColor" opacity="0.5" />
      <path d="M6 10L3 7H9L6 10Z" fill="currentColor" />
    </svg>
  );
}

function PaginationBtn({ children, active }) {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full text-[13px] font-medium transition ${
        active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
