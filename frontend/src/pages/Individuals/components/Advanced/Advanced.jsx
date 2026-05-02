import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const comparisonData = [
    {
        feature: "Fees",
        pro: "≤0.4% maker, ≤0.6% taker",
        advanced: "≤0.4% maker, ≤0.6% taker",
    },
    {
        feature: "Rewards",
        pro: "Not supported",
        advanced:
            "Earn rewards for USDC with Coinbase One or up to 6% APY on eligible crypto balances",
    },
    {
        feature: "Asset Availability",
        pro: "350+ market pairs",
        advanced: "550+ market pairs, with the same liquidity",
    },
    {
        feature: "Order Types",
        pro: "Market, Limit, Stop Limit",
        advanced: "Market, Limit, Stop Limit",
    },
    {
        feature: "Charts",
        pro: "Basic charts with EMA12 and EMA26 indicators",
        advanced:
            "Charts powered by TradingView with EMA, MA, MACD, RSI, Bollinger Bands, and drawing tools",
    },
    {
        feature: "Security",
        pro: "2FA, biometrics for mobile, Address Whitelisting, FDIC-insured USD balances up to $250K",
        advanced:
            "2FA, biometrics for mobile, FDIC-insured USD balances up to $250K, YubiKey support, Coinbase Vault, Address Whitelisting",
    },
    {
        feature: "Mobile App",
        pro: "Yes",
        advanced: "Yes",
    },
    {
        feature: "Trading API",
        pro: "Yes",
        advanced: "Yes",
    },
];

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
        title: "Competitive fees",
        desc: "Trade in and out in a flash in over 550+ markets. Plus, pay low, volume-based fees with zero monthly fees and no minimum portfolio sizes.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
        ),
        title: "Powerful trading tools",
        desc: "From TradingView charts to sophisticated order types to APIs — Coinbase has what you need for efficient executions.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
        title: "Security first",
        desc: "The technology that powers our platform was developed with security and encryption at its core.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        ),
        title: "One unified balance",
        desc: "Unlock all the best Coinbase features using one balance on one platform.",
    },
];

export default function Advanced() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0b0d] text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden min-h-[92vh] flex items-center">
                {/* background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-blue-700/20 blur-[140px] rounded-full" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full" />
                </div>

                <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left: text */}
                    <div className="flex flex-col items-start">
                        {/* Badge */}
                        <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                            <span className="text-sm text-white/80 font-medium">Coinbase Advanced</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
                            Supercharge<br />your trading
                        </h1>

                        <p className="text-base font-semibold text-white mb-2">
                            The powerful tools that advanced traders love
                        </p>
                        <p className="text-sm text-gray-400 mb-10">
                            Past performance is not a reliable indicator of future results.
                        </p>

                        <a
                            href="https://www.coinbase.com/en-gb/advanced-trade/spot/BTC-USD"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
                        >
                            Trade Now
                        </a>
                    </div>

                    {/* Right: device mockup image */}
                    <div className="relative flex items-center justify-end">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/4yTrDdmppQSPbDVcOW9kUF/09f31109bde0b6f454d89b777d8739ec/ADV_-_Hero_2x.jpg"
                            alt="Coinbase Advanced Trade platform on phone and desktop"
                            className="w-full max-w-[620px] object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features grid */}
            <section className="py-20 px-4 bg-[#0d0f12]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-14">
                        Our most advanced crypto trading platform
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors"
                            >
                                <div className="text-blue-400 mb-4">{f.icon}</div>
                                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trading edge section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Up your trading edge</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Get ahead of the game with TradingView charts, technical indicators,
                            and custom watchlists. For even more control, unlock real-time market
                            data with high throughput APIs.
                        </p>
                        <a
                            href="https://www.coinbase.com/en-gb/cloud/products/advanced-trade-api"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                        >
                            Learn about Coinbase Advanced API
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/1naKWIrutDvGj3oiCJIYnR/9b37199a3b60e689450c9a86eba83051/Static_3.png"
                            alt="Order types interface"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Security section */}
            <section className="py-20 px-4 bg-[#0d0f12]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl flex items-center justify-center bg-white/5 p-10">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/1Zl5xfmIXWJCJ7U86HSnhf/2256f299b8021baadefdff626cedee96/CBR_LOLP_lockIllo_v01_1.gif"
                            alt="Security lock animation"
                            className="w-40 h-40 object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Your security is our priority</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            As the largest publicly-traded crypto exchange, Coinbase prudently manages
                            assets for our customers with state-of-the-art encryption and security
                            programs. Know that your assets are held 1:1 and are never lent without
                            your consent.
                        </p>
                        <a
                            href="https://www.coinbase.com/en-gb/security"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                        >
                            Learn more
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Speed / Control / Flexibility */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Speed. Control. Flexibility.</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Execute trades with real-time order books across 552 markets, now with
                            237 new USDC trading pairs. On top of that, manage risk in volatile
                            markets with limit orders and stop-limit orders.
                        </p>
                        <p className="text-xs text-gray-600 mb-6">
                            *{" "}
                            <a
                                href="https://www.coinbase.com/en-gb/asset-risks"
                                className="underline hover:text-gray-400 transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Learn more about asset risks
                            </a>
                        </p>
                        <a
                            href="https://www.coinbase.com/en-gb/advanced-fees"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                        >
                            See fees breakdown
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/4lsPYCqob29oe8vLkX7BMD/eafbf97fbde68618a7e1f37f0cb46238/Adv_-_SCF.png"
                            alt="Speed and control interface"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Comparison table */}
            <section className="py-20 px-4 bg-[#0d0f12]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-14">
                        Advanced is a level up from Pro.
                    </h2>

                    {/* Table */}
                    <div className="rounded-2xl border border-white/10 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-5 px-6 text-left text-gray-400 font-medium w-1/3" />
                                    <th className="py-5 px-6 text-center font-semibold text-gray-300">
                                        Coinbase Pro
                                    </th>
                                    <th className="py-5 px-6 text-center font-semibold text-blue-400">
                                        Coinbase Advanced
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""
                                            }`}
                                    >
                                        <td className="py-4 px-6 font-medium text-gray-300">
                                            {row.feature}
                                        </td>
                                        <td className="py-4 px-6 text-center text-gray-400">
                                            {row.pro}
                                        </td>
                                        <td className="py-4 px-6 text-center text-gray-300">
                                            {row.advanced}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="https://www.coinbase.com/en-gb/signup"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3.5 rounded-full transition-colors text-sm"
                        >
                            Sign up
                        </a>
                    </div>

                    <p className="text-xs text-gray-600 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
                        Coinbase Advanced is for experienced traders and is subject to the Trading Rules. Fees on
                        the two experiences vary. Content is for informational purposes and not investment advice.
                        Investing in crypto comes with risk.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
