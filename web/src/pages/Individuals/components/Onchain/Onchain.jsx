import Navbar from "../Navbar";
import Footer from "../Footer";

const trendingApps = [
    { name: "Stand with Crypto", category: "Manage", rating: 4.8, featured: true, img: "https://d392zik6ho62y0.cloudfront.net/images/stand-with-crypto-logo.png" },
    { name: "Truemarkets", category: "Social", img: "https://d392zik6ho62y0.cloudfront.net/images/truemarkets-logo.png" },
    { name: "Plaza Finance", category: "Earn", rating: 3.8, img: "https://d392zik6ho62y0.cloudfront.net/images/plaza-finance-logo.png" },
    { name: "Moonwell", category: "Earn", rating: 4.8, img: "https://d392zik6ho62y0.cloudfront.net/images/moonwell-logo.png" },
    { name: "Toshi Mart", category: "Swap", rating: 4.5, img: "https://d392zik6ho62y0.cloudfront.net/images/toshi-mart-logo.png" },
    { name: "Hypersub", category: "Social", img: "https://d392zik6ho62y0.cloudfront.net/images/hypersub-logo.png" },
    { name: "Uniswap", category: "Swap", rating: 4.4, img: "https://d392zik6ho62y0.cloudfront.net/images/uniswap-logo.png" },
    { name: "Aave", category: "Earn", rating: 4.6, img: "https://d392zik6ho62y0.cloudfront.net/images/aave-logo.png" },
    { name: "Interface", category: "Social", img: "https://d392zik6ho62y0.cloudfront.net/images/interface-logo.png" },
    { name: "Aerodrome", category: "Swap", rating: 4.7, img: "https://d392zik6ho62y0.cloudfront.net/images/aerodrome-logo.png" },
];

const categoryColors = {
    Manage: "bg-purple-100 text-purple-700",
    Social: "bg-pink-100 text-pink-700",
    Earn: "bg-green-100 text-green-700",
    Swap: "bg-blue-100 text-blue-700",
};

function StarRating({ rating }) {
    if (!rating) return null;
    return (
        <span className="flex items-center gap-0.5 text-xs text-gray-500">
            <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {rating}
        </span>
    );
}

function AppCard({ name, category, rating, featured, img }) {
    return (
        <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-shadow hover:shadow-md bg-white group cursor-pointer ${featured ? "border-blue-200 ring-1 ring-blue-100" : "border-gray-100"}`}>
            {/* App icon */}
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                    {featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Featured</span>
                    )}
                </div>
                <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-600"}`}>
                        {category}
                    </span>
                    <StarRating rating={rating} />
                </div>
            </div>

            {/* Arrow */}
            <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    );
}

export default function Onchain() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-28 pb-12 px-6 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover onchain</h1>
                    <p className="text-gray-500 text-base max-w-xl mx-auto">
                        Use a crypto wallet or the Coinbase mobile app to access onchain apps.{" "}
                        <a
                            href="https://help.coinbase.com/en/dapps/getting-started/comparing-coinbase-wallets"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Learn more about onchain wallets
                        </a>
                    </p>
                </div>
            </section>

            {/* Trending apps */}
            <section className="py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold mb-6 text-gray-900">New and trending</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trendingApps.map((app, i) => (
                            <AppCard key={i} {...app} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular apps placeholder */}
            <section className="py-12 px-6 border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold mb-4 text-gray-900">Popular apps</h2>
                    <div className="rounded-2xl bg-white border border-gray-100 p-10 text-center">
                        <p className="text-gray-400 text-sm">Popular apps are not available at this time. Please check back later.</p>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="pb-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Certain content has been prepared by third parties not affiliated with Coinbase Inc. or any of its affiliates and Coinbase is not responsible for such content. Coinbase is not liable for any errors or delays in content, or for any actions taken in reliance on any content. Information is provided for informational purposes only and is not investment advice.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
