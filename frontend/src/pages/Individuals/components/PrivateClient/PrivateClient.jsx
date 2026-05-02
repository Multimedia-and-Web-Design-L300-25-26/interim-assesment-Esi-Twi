import Navbar from "../Navbar";
import Footer from "../Footer";

const cryptoAssets = [
    { name: "Bitcoin", symbol: "BTC", price: "£68,423.12", change: "+2.34%", positive: true, img: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png", href: "https://www.coinbase.com/en-gb/price/bitcoin" },
    { name: "Ethereum", symbol: "ETH", price: "£2,641.87", change: "-1.12%", positive: false, img: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png", href: "https://www.coinbase.com/en-gb/price/ethereum" },
    { name: "Tether", symbol: "USDT", price: "£0.79", change: "+0.01%", positive: true, img: "https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png", href: "https://www.coinbase.com/en-gb/price/tether" },
    { name: "BNB", symbol: "BNB", price: "£491.22", change: "+0.88%", positive: true, img: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png", href: "https://www.coinbase.com/en-gb/price/bnb" },
    { name: "XRP", symbol: "XRP", price: "£1.94", change: "+3.21%", positive: true, img: "https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png", href: "https://www.coinbase.com/en-gb/price/xrp" },
    { name: "USDC", symbol: "USDC", price: "£0.79", change: "—", positive: true, img: "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png", href: "https://www.coinbase.com/en-gb/price/usdc" },
];

const trustItems = [
    { icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/worldwide-3.svg", title: "The largest public crypto company", desc: "In April 2021, Coinbase became the largest publicly traded crypto company in the world. We operate with more financial transparency, and publish financial statements each quarter.", href: "https://investor.coinbase.com/home/default.aspx" },
    { icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/safe-3.svg", title: "Your crypto is your crypto", desc: "Coinbase doesn't use, or lend, your assets without your permission. We run a multifaceted risk management program designed to protect your assets.", href: "https://help.coinbase.com/coinbase/other-topics/legal-policies/what-does-coinbase-do-with-my-digital-assets" },
    { icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/support-5.svg", title: "The help you need, when you need it", desc: "Contact our support team by messaging to speak with our virtual assistant or a real live agent. Check out our Help Center for quick solutions.", href: "https://help.coinbase.com/en" },
];

export default function PrivateClient() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-28 pb-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: text */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.1]">
                            Hello, UK! Meet Coinbase 🇬🇧
                        </h1>
                        <p className="text-gray-500 text-lg mb-3">
                            Coinbase is the most trusted platform in the UK for buying, selling and trading crypto.
                        </p>
                        <p className="text-gray-400 text-sm mb-8">Deposit GBP into your account for free to get started today</p>
                        <a
                            href="https://www.coinbase.com/en-gb/signup"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
                        >
                            Sign up
                        </a>
                        <p className="text-xs text-gray-400 mt-4">
                            Based on the results of a{" "}
                            <a href="https://www.coinbase.com/en-gb/blog/recent-data-shows-coinbase-is-the-most-trusted-name-in-crypto" target="_blank" rel="noreferrer" className="underline hover:text-blue-600">2024 Qualtrics survey</a>{" "}
                            conducted in the UK. Past performance is not a reliable indicator of future results.
                        </p>
                    </div>

                    {/* Right: image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/4Jpa7fudq9ntnjk076KMCS/20e67b95d5d9869ec678653d79528df3/GWT25547_Promo_Carousel_CDX2_776x582_2x.png"
                            alt="Earn on Coinbase"
                            className="w-full max-w-[480px] rounded-3xl object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>


            {/* Promo cards */}
            <section className="px-6 pb-14 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        <img src="https://images.ctfassets.net/o10es7wu5gm1/4Jpa7fudq9ntnjk076KMCS/20e67b95d5d9869ec678653d79528df3/GWT25547_Promo_Carousel_CDX2_776x582_2x.png" alt="Savings" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6">
                            <h2 className="text-lg font-bold mb-2">Earn 3.50% AER on your cash savings</h2>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">Savings Account with interest paid daily. Instant Access. FSCS protected. Powered by ClearBank.</p>
                            <a href="https://www.coinbase.com/en-gb/savings" target="_blank" rel="noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">Get started</a>
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        <img src="https://images.ctfassets.net/o10es7wu5gm1/16pWV4ctYBmuHnZ9K9jFeL/3979d8aae0a8d31d48d15b437b46d766/What_is_Staking.png" alt="Staking" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6">
                            <h2 className="text-lg font-bold mb-2">Earn up to 14% APY on your crypto</h2>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">Put your crypto to work by staking with Coinbase and earn rewards of up to 14% APY on your holdings.</p>
                            <a href="/earn" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">Explore staking options</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crypto prices */}
            <section className="py-14 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-2">
                        <h2 className="text-2xl font-bold">Explore crypto like Bitcoin, Ethereum, and Dogecoin.</h2>
                        <a href="https://www.coinbase.com/en-gb/explore" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium flex-shrink-0 ml-6">See more assets</a>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
                    <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500">
                                    <th className="text-left px-5 py-4 font-semibold">Asset</th>
                                    <th className="text-right px-5 py-4 font-semibold">Price</th>
                                    <th className="text-right px-5 py-4 font-semibold">24h Change</th>
                                    <th className="px-5 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cryptoAssets.map((asset, i) => (
                                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={asset.img} alt={asset.symbol} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-gray-900">{asset.name}</p>
                                                    <p className="text-xs text-gray-400">{asset.symbol}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-right font-semibold">{asset.price}</td>
                                        <td className={`px-5 py-4 text-right font-semibold ${asset.positive ? "text-green-600" : "text-red-500"}`}>{asset.change}</td>
                                        <td className="px-5 py-4 text-right">
                                            <a href={asset.href} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline font-medium">Trade</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Coinbase One promo */}
            <section className="py-14 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <img src="https://images.ctfassets.net/o10es7wu5gm1/4CyfFj8M0X8tKnzh8AgdxT/cb4fb2946837112591991001143c2f0d/zero_en-gb_2.png" alt="Zero fees" className="rounded-3xl w-full object-contain" />
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Coinbase One</p>
                        <h2 className="text-3xl font-bold mb-4">Zero trading fees, more rewards.</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.</p>
                        <a href="/coinbase-one" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm">Claim free trial</a>
                    </div>
                </div>
            </section>

            {/* Advanced Trade */}
            <section className="py-14 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Get lower, volume-based pricing with Advanced Trade</h2>
                        <ul className="flex flex-col gap-4 mb-8">
                            {[
                                { bold: "More order types", rest: "Market, Limit, Stop Limit, and Auction Mode orders." },
                                { bold: "Powerful trading tools", rest: "Charts powered by TradingView with EMA, MA, MACD, RSI, and Bollinger Bands." },
                                { bold: "One unified balance", rest: "Seamlessly switch between Simple and Advanced Trade." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    <span><strong>{item.bold}</strong> {item.rest}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="/advanced" className="inline-block border border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 font-semibold px-7 py-3 rounded-full transition-colors text-sm">Learn more</a>
                    </div>
                    <img src="https://images.ctfassets.net/o10es7wu5gm1/3FwiGvu5fYVsludi8jgOY7/14e7039558786f182123e658c6940151/Advanced.png" alt="Advanced Trade" className="rounded-3xl w-full object-contain" />
                </div>
            </section>

            {/* Explore / Learn cards */}
            <section className="py-14 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a href="https://www.coinbase.com/en-gb/explore" target="_blank" rel="noreferrer" className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                        <img src="https://images.ctfassets.net/o10es7wu5gm1/7IRLnEVVAZdnfhzq2Q1V61/5e13a5d282289bfc4ae6bb79632a4884/earn_and_learn.webp" alt="Explore crypto" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6 flex-1">
                            <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">Explore more crypto</h3>
                            <p className="text-sm text-gray-500">Browse real-time prices, charts, and daily movers for thousands of cryptocurrencies.</p>
                        </div>
                    </a>
                    <a href="/learn" className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                        <img src="https://images.ctfassets.net/o10es7wu5gm1/1i5oeGUlUsp4XBuybcg4ra/f8dd0d698eaa34c982b0323a2b85e754/image.png" alt="Learn" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6 flex-1">
                            <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">Learn the basics</h3>
                            <p className="text-sm text-gray-500">Explore beginner guides, practical tutorials, and market updates on Bitcoin, Ethereum and more.</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Trust */}
            <section className="py-14 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-12">The most trusted cryptocurrency exchange</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {trustItems.map((t, i) => (
                            <div key={i} className="text-center flex flex-col items-center gap-4">
                                <img src={t.icon} alt={t.title} className="w-16 h-16 object-contain" />
                                <h3 className="font-bold text-base">{t.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                                <a href={t.href} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium">Learn more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
