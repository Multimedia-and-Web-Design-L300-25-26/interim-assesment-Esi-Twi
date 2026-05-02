import Navbar from "../Navbar";
import Footer from "../Footer";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
            </svg>
        ),
        title: "Control your crypto",
        desc: "Coinbase Wallet is a self-custody wallet, giving you complete control of your crypto.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
        ),
        title: "Store and manage your NFTs",
        desc: "Safely store and view all of your Ethereum, Base, Optimism, Polygon, and Solana NFTs in one wallet.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
        title: "Layers of security",
        desc: "Additional security options on all of your devices provide more ways to keep your crypto safe and secure.",
    },
];

const defiFeatures = [
    "Use DeFi liquidity pools",
    "Explore decentralized exchanges",
    "Join a DAO and help shape a major web3 project",
];

export default function BaseApp() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-white pt-28 pb-0">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left: text */}
                    <div className="pb-16">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                            Wallet
                        </p>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6 text-gray-900">
                            Coinbase Wallet
                        </h1>
                        <p className="text-xl font-semibold text-gray-800 mb-6">
                            Your key to the world of crypto
                        </p>
                        <ul className="space-y-3 mb-10">
                            {[
                                "Store and manage all of your crypto, NFTs, and multiple wallets in one place",
                                "Support for hundreds of thousands of tokens and dapps",
                                "Explore the decentralized web on your phone or browser",
                                "Protect your digital assets with cryptographic security",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <span className="mt-1 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://www.coinbase.com/en-gb/wallet/downloads"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
                        >
                            Download Coinbase Wallet
                        </a>
                    </div>

                    {/* Right: hero SVG */}
                    <div className="flex items-end justify-center lg:justify-end">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/75ARaPo255qDPQsl1AzpdZ/c2338763f8123114a8fe043573e91dc4/HERO_IMAGE.svg"
                            alt="Coinbase Wallet app"
                            className="w-full max-w-[520px] object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Unlock section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Unlock the world of crypto</h2>
                    <p className="text-center text-gray-500 mb-14 text-sm">
                        Life on the blockchain made simple and secure.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-blue-600 mb-4">{f.icon}</div>
                                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Crypto tokens section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">
                            Bitcoin, Ethereum, Solana, Dogecoin, and every ERC-20 from Aave to ZRX
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            Coinbase Wallet supports hundreds of thousands of coins and a whole world of
                            decentralized apps. It's your crypto — use it how and where you'd like.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/5zc5zZiC4GL9EneEz4leJw/722ede5d3bf0c3b7b56c4fe6d6383912/Frame_316125839__1_.png"
                            alt="Supported tokens"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Self-custody section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white flex items-center justify-center p-6">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/5eir6J8aQLCSQzbii1pGMo/c641de899e6d777dddb260e91001df99/SECOND_IMAGE.svg"
                            alt="Wallet keys illustration"
                            className="w-full max-w-sm object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Your wallet, keys, and crypto</h2>
                        <p className="text-gray-500 leading-relaxed">
                            Coinbase Wallet is a self-custody crypto wallet, putting you in control of your crypto,
                            keys, and data. Now you can safely store your crypto and rare NFTs in one place.
                        </p>
                    </div>
                </div>
            </section>

            {/* DeFi section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">
                            Explore the decentralized web with confidence
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Coinbase Wallet is your passport to the decentralized web. Harness the power of DeFi
                            to earn yield, grow your NFT collection, and much more.
                        </p>
                        <ul className="space-y-3">
                            {defiFeatures.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white flex items-center justify-center p-6">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/3w58zziYjPMth5KK5lRC6J/dd0bc63fe221dbbb694635407f2c3da2/THIRD_IMAGE.svg"
                            alt="Decentralized web illustration"
                            className="w-full max-w-sm object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="px-6 pb-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        Information is provided for informational purposes only and is not investment advice.
                        This is not a recommendation to buy or sell a particular digital asset or to employ a
                        particular investment strategy. Coinbase makes no representation on the accuracy,
                        suitability, or validity of any information provided or for a particular asset.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
