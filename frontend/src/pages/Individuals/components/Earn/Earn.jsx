import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const stakingAssets = [
    { name: "Ethereum", symbol: "ETH", apy: "1.91%", marketCap: "£54.3B", img: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png" },
    { name: "Cardano", symbol: "ADA", apy: "1.51%", marketCap: "£3.9B", img: "https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png" },
    { name: "Avalanche", symbol: "AVAX", apy: "4.47%", marketCap: "£1.5B", img: "https://dynamic-assets.coinbase.com/35f69b8c1f2c2771170e72bdb61a986b17f7d8d20c5e10bc4fc347fe301e6137960c01c31ebbac976b9fd933bf95344d751e052a27eee0dc868f8c036bb2632a/asset_icons/d8a464a40be5c1eba32428ed1d815c878d4933231193edfa483957bd3cbfe750.png" },
    { name: "Cosmos", symbol: "ATOM", apy: "14.22%", marketCap: "£383.3M", img: "https://dynamic-assets.coinbase.com/b92276a1f003b87191983dab71970a9a6d522dde514176e5880a75055af1e67ce5f153b96a2ee5ecd22729a73d3a8739b248d853bde74ab6e643bef2d1b4f88d/asset_icons/9c760bf25bca9823f9ef8d651681b779aadc71a2f543f931070034e59ef10120.png" },
    { name: "BNB", symbol: "BNB", apy: "1.76%", marketCap: "£11.8B", img: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png" },
    { name: "Bitcoin", symbol: "BTC", apy: "0.00%", marketCap: "£2.9B", img: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" },
    { name: "Bittensor", symbol: "TAO", apy: "14.72%", marketCap: "£1.1B", img: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/fe72b6705b41853050b12fcdf65081f755aec1f4bf6de68a92cb606806c47eab.png" },
    { name: "Coinbase Wrapped Staked ETH", symbol: "cbETH", apy: "3.02%", marketCap: "£0.0", img: "https://dynamic-assets.coinbase.com/55517c7b84cff054d0bf84f6d82680b5368915854f855ec4fe0178478a637b18a985ec85b87387beb2ae2a1b276fcb320ac7451c358302ceebb179c58934ff65/asset_icons/93aa525880c2df46f3d5404cff1844a42f1a5d1fc812128ae3f70f2ce4a882e1.png" },
];

const howItWorks = [
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/easyToUse-3.svg",
        title: "It's easy",
        desc: "Start earning with a couple of clicks. You can earn on as little as £1.",
        href: "https://www.coinbase.com/en-gb/asset-risks",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/securityCoinShield-5.svg",
        title: "Security first",
        desc: "We take measures to mitigate risks and allow you to opt-out anytime.",
        href: "#secure",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/multipleAssets-3.svg",
        title: "It's all in one place",
        desc: "View, manage, and discover assets that earn rewards all from the Earn center.",
        href: "#oneplace",
    },
];

const learnCards = [
    { title: "What is Staking?", desc: "Staking lets you earn rewards by helping verify transactions and secure the blockchain.", img: "https://images.ctfassets.net/o10es7wu5gm1/5eDlqRUVRbu6MEGwBt9qqL/e78c6068e2a205ca275882b6849a499d/Learn_Illustration_What_is_Staking.png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-staking" },
    { title: "How does ETH staking work?", desc: "Ethereum (ETH) is the largest proof-of-stake network and one of the most popular assets to stake.", img: "https://images.ctfassets.net/o10es7wu5gm1/2oor49nkKvMltL58r1GuEf/cf71252714004e206f78155fcb642e51/V2_ETHBanner_Blog__2_.png", href: "https://help.coinbase.com/en/coinbase/trading-and-funding/coinbase-earn/eth-2-0-staking" },
    { title: "Wrap your staked ETH into cbETH", desc: "If you ever need faster liquidity, you can wrap your staked ETH into cbETH.", img: "https://images.ctfassets.net/o10es7wu5gm1/38Xt6lXeJzCUQS6cgeYSH1/2cf7cd6041e30d5c95336d30bb28ea24/cbETH.jpg", href: "https://www.coinbase.com/en-gb" },
    { title: "Get boosted staking rewards with Coinbase One", desc: "A Coinbase One membership gets you boosted staking rewards, zero trading fees, priority support, and more.", img: "https://images.ctfassets.net/o10es7wu5gm1/4yrhci2eM2joScGK8mWKr3/e495dad91386f29bbd54caa92b4efd5b/Email_Hero_Asset_-_General_Use__3_.png", href: "https://www.coinbase.com/en-gb/one" },
];

const faqs = [
    { q: "How does staking work?", a: "Staking is a method of verifying and securing transactions on proof of stake blockchains. In exchange for delegating your crypto, you get rewarded with more assets from the network. Validators lose part of their stake if they approve a fraudulent transaction — this incentivizes them to only approve valid transactions." },
    { q: "Which Proof of Stake asset(s) earn staking rewards?", a: "Visit our help center to see which assets earn staking rewards on Coinbase." },
    { q: "Who is eligible to stake on Coinbase?", a: "To stake on Coinbase, you must have your identity verified with a valid TIN on file, and reside in a location where staking is allowed." },
    { q: "How does ETH staking work?", a: "ETH staking allows you to delegate your ETH to help secure the blockchain and earn rewards in return." },
    { q: "What are the risks associated with staking?", a: "Staking requires assets to be locked on the protocol in order to earn rewards. During this time you won't be able to trade or transfer your assets. Lock up periods are defined by protocols and can range from a few hours to a few days. Another risk is the possible slashing of staked assets or rewards." },
    { q: "Is there a fee associated with these services?", a: "We take a commission on all rewards received, and the rewards rate for our customers reflects this commission. You can find our current commission fee in the help center." },
];

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-5">
            <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-left gap-4">
                <span className="text-sm font-semibold text-gray-900">{q}</span>
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {open && <p className="mt-3 text-sm text-gray-500 leading-relaxed">{a}</p>}
        </div>
    );
}

export default function Earn() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-28 pb-0 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                    <div className="pb-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Earn</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.1]">
                            Earn up to 14% APY on your crypto.
                        </h1>
                        <p className="text-gray-500 mb-6">Put your crypto to work and earn rewards.</p>
                        <p className="text-xs text-gray-400 mb-2">Available for certain assets.</p>
                        <p className="text-xs text-gray-400 mb-8">
                            APYs are indicative and not guaranteed and may vary over time.{" "}
                            <a href="https://help.coinbase.com/en-gb/coinbase/coinbase-staking/rewards/earn-rewards-with-staking" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                Learn more about APY calculations
                            </a>
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <a href="https://www.coinbase.com/en-gb/signup" target="_blank" rel="noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm">
                                Get started
                            </a>
                            <a href="https://www.coinbase.com/signin" target="_blank" rel="noreferrer"
                                className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-7 py-3 rounded-full transition-colors text-sm">
                                Sign in
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/3F4YBxoqd5NKNcdXO46QPc/251ff6244ff5d91526b1f177c5ce19d3/Rectangle_1.png"
                            alt="Earn hero"
                            className="w-full max-w-[460px] rounded-3xl object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* USDC Rewards banner */}
            <section className="px-6 py-10 bg-blue-50 border-y border-blue-100">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                    <img
                        src="https://images.ctfassets.net/o10es7wu5gm1/1GgLkpX4jLngR1Jq0UHLse/a634d5efb64e2b73e6286bb81d5b1bb9/USDC_-_Earn_image.jpeg"
                        alt="USDC Earn"
                        className="rounded-2xl w-full max-w-[320px] object-cover shadow-md"
                    />
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Earn rewards on USDC</h2>
                        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                            Earn unlimited 3.50% rewards by simply holding USDC with a Coinbase One membership.
                        </p>
                        <a href="/coinbase-one" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
                            Get started
                        </a>
                    </div>
                </div>
            </section>

            {/* Staking table */}
            <section id="staking" className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2">Check out all the ways you can earn by staking</h2>
                    <p className="text-gray-500 text-sm mb-8">43 assets available</p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left px-5 py-4 font-semibold text-gray-500">Asset</th>
                                    <th className="text-left px-5 py-4 font-semibold text-gray-500">Est. Reward Rate</th>
                                    <th className="text-left px-5 py-4 font-semibold text-gray-500">Staking Market Cap</th>
                                    <th className="px-5 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {stakingAssets.map((asset, i) => (
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
                                        <td className="px-5 py-4">
                                            <span className={`font-bold ${parseFloat(asset.apy) > 5 ? "text-green-600" : parseFloat(asset.apy) > 0 ? "text-blue-600" : "text-gray-400"}`}>
                                                {asset.apy} APY
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-gray-600">{asset.marketCap}</td>
                                        <td className="px-5 py-4 text-right">
                                            <a href="https://www.coinbase.com/signup" target="_blank" rel="noreferrer"
                                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors">
                                                Start Earning
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                        APYs are indicative and not guaranteed and may vary over time.{" "}
                        <a href="https://help.coinbase.com/en-gb/coinbase/coinbase-staking/rewards/earn-rewards-with-staking" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Learn more</a>
                    </p>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-10 text-center">Put your crypto to work</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {howItWorks.map((item, i) => (
                            <div key={i} className="text-center flex flex-col items-center gap-4">
                                <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust stats */}
            <section className="py-16 px-6 bg-blue-600 text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-10">A trusted way to earn in crypto</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {[
                            { stat: "Up to 13%", label: "Variable reward rates set by each blockchain" },
                            { stat: "$450M+", label: "Rewards earned by Coinbase customers in 2024" },
                            { stat: "0", label: "Coinbase users lost assets due to staking" },
                        ].map((s, i) => (
                            <div key={i}>
                                <p className="text-4xl font-extrabold mb-2">{s.stat}</p>
                                <p className="text-blue-100 text-sm leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learn cards */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">More about how staking works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {learnCards.map((c, i) => (
                            <a key={i} href={c.href} target="_blank" rel="noreferrer"
                                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow bg-white flex flex-col">
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-5 flex flex-col gap-1.5 flex-1">
                                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{c.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
                    {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
                </div>
            </section>

            {/* CTA banner */}
            <section className="py-0 px-6 bg-white">
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative">
                    <img
                        src="https://images.ctfassets.net/o10es7wu5gm1/5B174hopOKwW2AIudVZ5Pf/5aa5491fa5c05a7979286d347dfd178b/GettyImages1253576076.jpg"
                        alt="Create account"
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-10">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Don't have a Coinbase account?</h2>
                            <a href="https://www.coinbase.com/en-gb/signup" target="_blank" rel="noreferrer"
                                className="inline-block bg-white text-blue-600 font-semibold px-7 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors">
                                Create an account
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-12" />
            <Footer />
        </div>
    );
}
