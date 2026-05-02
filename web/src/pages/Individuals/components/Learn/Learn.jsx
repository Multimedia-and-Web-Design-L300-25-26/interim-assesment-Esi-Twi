import Navbar from "../Navbar";
import Footer from "../Footer";

const featured = {
    tag: "Video Tutorial",
    title: "When is the best time to invest in crypto?",
    desc: "When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png",
    href: "https://www.coinbase.com/en-gb/learn/tips-and-tutorials/dollar-cost-averaging",
};

const popular = [
    { tag: "Beginner's Guide", title: "What is cryptocurrency?", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-cryptocurrency" },
    { tag: "Getting started", title: "How to earn crypto rewards", href: "https://www.coinbase.com/en-gb/learn/tips-and-tutorials/how-to-earn-crypto-rewards" },
    { tag: "Getting Started", title: "How to add crypto to your Coinbase Wallet", href: "https://www.coinbase.com/en-gb/learn/wallet/how-to-add-crypto-to-cb-wallet" },
    { tag: "Your crypto", title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports", href: "https://www.coinbase.com/en-gb/learn/your-crypto/tax-documents-explained" },
    { tag: "Getting Started", title: "Beginner's guide to dapps", href: "https://www.coinbase.com/en-gb/learn/wallet/guide-to-dapps" },
    { tag: "Market Update", title: "Everything you need to know about the first-ever U.S. Bitcoin ETF", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-bitcoin-futures-etf" },
];

const categories = [
    { label: "Crypto basics", img: "https://images.ctfassets.net/q5ulk4bp65r7/3y6qEXfZEKWUIFCXitE2CM/975c866ebacafdff5c23779fa2168c51/3.png", href: "#crypto-basics" },
    { label: "Tips and tutorials", img: "https://images.ctfassets.net/q5ulk4bp65r7/31wYl0Vic7W3ZktCPHMOQ8/472cc5a7d6220c2c852619898c12e1a8/4.png", href: "#tips-and-tutorials" },
    { label: "Advanced trading", img: "https://images.ctfassets.net/q5ulk4bp65r7/55csxsO3KyYgwnwNQHXAXi/efeb47068c8c76d35e1e62df77638124/AdvancedTrading_ChartsIndicatorsCandlesEtc.png", href: "#advanced-trading" },
    { label: "Futures", img: "https://images.ctfassets.net/q5ulk4bp65r7/6baYypQ3LKoYOzMQyRQusH/645784649490f41b75dca08f955369fe/futures_anchor.png", href: "#futures" },
];

const cryptoBasics = [
    { tag: "Beginner's Guide", title: "What is Bitcoin?", desc: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.", img: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-bitcoin" },
    { tag: "Beginner's Guide", title: "Guide to DeFi tokens and altcoins", desc: "From Aave to Zcash, decide what to trade with our beginner's guide.", img: "https://images.ctfassets.net/q5ulk4bp65r7/3rv8jr1B1Z1dZ2EhHqo7dp/e74ddbf1cd4836b83d34fe5cec351d78/Alt-Coin.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/defi-tokens-and-altcoins" },
    { tag: "Beginner's guide", title: "What is Ethereum?", img: "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-ethereum" },
    { tag: "Key term", title: "What is DeFi?", img: "https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-defi" },
    { tag: "Beginner's Guide", title: "What is a stablecoin?", img: "https://images.ctfassets.net/q5ulk4bp65r7/3hETt7h2hfvnOnVVrJIvlO/b7204c2b9a1a35d39d0dd396d2cf49bb/Learn_Illustration_What_is_a_stablecoin.jpg?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-stablecoin" },
    { tag: "Glossary", title: "Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained", img: "https://images.ctfassets.net/q5ulk4bp65r7/5fZ31B0CLFBDfIWK3DQPTN/b98e564a067cbb252995d654006cee09/Group_31612615.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/tip-and-tutorials/crypto-slang-guide" },
];

const whatIs = ["Bitcoin", "Blockchain", "Cardano", "Crypto wallet", "DeFi", "Ethereum", "Fork", "Inflation", "Market cap", "NFT", "Private key", "Protocol", "Smart contract", "Token", "Volatility"];
const whatIsHrefs = [
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-bitcoin",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-blockchain",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-cardano",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-crypto-wallet",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-defi",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-ethereum",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-fork",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-inflation",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-market-cap",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-are-nfts",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-private-key",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-protocol",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-smart-contract",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-token",
    "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-volatility",
];

const tips = [
    { tag: "Getting Started", title: "How to donate crypto", img: "https://images.ctfassets.net/q5ulk4bp65r7/63o0Mbwyiqcqq8CLZKToLs/4d007f0923a20999c6c4765d6fdc35bf/Donating-Crypto.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/how-to-donate-crypto" },
    { tag: "Video Tutorial", title: "How to set up a crypto wallet", img: "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet" },
    { tag: "Video Tutorial", title: "When is the best time to invest in crypto?", img: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/tips-and-tutorials/dollar-cost-averaging" },
    { tag: "Your crypto", title: "How to invest in crypto via your retirement account", img: "https://images.ctfassets.net/q5ulk4bp65r7/5Crc40l3fe9Mm22C4HGRgx/71defd6861e1ee2c4927e709604ea099/Crypto___Retirement_Op2-D.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/crypto-retirement-account" },
];

const advancedTrading = [
    { tag: "Key term", title: "What is technical analysis?", img: "https://images.ctfassets.net/q5ulk4bp65r7/50bz6qkc8hSzqqHhbiMtKb/1e4d3f35ff2cd049580a4eb20f861a6e/Learn_Illustration_What_is_Technical_Analysis__1_.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-are-technical-analysis-and-fundamental-analysis" },
    { tag: "Advanced Guide", title: "How can I use crypto futures market data for spot trading?", img: "https://images.ctfassets.net/q5ulk4bp65r7/4zm6shyv9LYK0W74kUrMQ4/2ecc82c8215405ecfba08f1f652095a6/charting-indicators.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/advanced-trading/leveraging-futures-market-data" },
    { tag: "Advanced guide", title: "How to read advanced trading charts", img: "https://images.ctfassets.net/q5ulk4bp65r7/1As6H6C4F2KcJsyLzzWPgX/7b13a011336a72f1f90f5d87bf32eee7/advance-trading.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/advanced-trading/reading-financial-charts" },
    { tag: "Key term", title: "What is an order book?", img: "https://images.ctfassets.net/q5ulk4bp65r7/4q6K5epqo9YLwaQ79i1M5N/9693bdbae13fffb3c37406d71f294244/order-book__1_.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/advanced-trading/what-is-an-order-book" },
];

const futures = [
    { title: "Futures: Introductions and origins", img: "https://images.ctfassets.net/q5ulk4bp65r7/7mOyQ8m1ax3GFyzTSIENQy/2977ec18240fcc1851eb4a460a5915c3/Article_1_-_Visual_-_1.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/futures/introductions-and-origins" },
    { title: "Futures fundamentals: Understanding the basics", img: "https://images.ctfassets.net/q5ulk4bp65r7/P1YwgqZX7jfnJ0l1xdbED/7a1d8654bf047462d68a377f7d21f39c/Article_2_-_Visual_-_1.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/futures/fundamentals-understanding-the-basics" },
    { title: "Opening, holding, and closing a position in the futures market", img: "https://images.ctfassets.net/q5ulk4bp65r7/3REMTvIb9OoMmr8EPya1zU/f06976781a368ab76f5fa4b3edfdcc66/Article_3_-_Visual_-_1.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/futures/opening-holding-closing-a-position-in-the-futures-market" },
    { title: "Trading strategies: Speculating, hedging, and spreading in the futures market", img: "https://images.ctfassets.net/q5ulk4bp65r7/EnVSYIBpxhx5Aicjq3A8f/08d26b8be710727725c2523746a710de/Article_4_-_Visual_-_1.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/futures/trading-strategies" },
];

const wallet = [
    { title: "What's the difference between Coinbase and Coinbase Wallet?", desc: "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered.", img: "https://images.ctfassets.net/q5ulk4bp65r7/3mfq3iIdYW3CDfWoh5vm9j/e79252903418650aa29f66ee313ef44e/How_to_Coinbase_Wallet_Op1-B.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-the-difference-between-coinbase-and-coinbase-wallet" },
    { tag: "Video Tutorial", title: "How to set up a crypto wallet", desc: "Learn how to setup and get started with a crypto wallet.", img: "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet" },
    { tag: "Getting Started", title: "How to add crypto to your Coinbase Wallet", desc: "A quick guide on how to add crypto to your Coinbase self-custody wallet.", img: "https://images.ctfassets.net/q5ulk4bp65r7/3G50jPNvtkBsSz7we9TaxK/5209c63d968d0ef9a99f6db51fd5cc25/CB_policy_standardimage.jpeg?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/wallet/how-to-add-crypto-to-cb-wallet" },
    { title: "How to send or receive crypto using Coinbase Wallet", desc: "Coinbase Wallet helps you unlock one of the most significant features of crypto: peer-to-peer transfers without any financial intermediaries.", img: "https://images.ctfassets.net/q5ulk4bp65r7/4ktmMla57tgU3ZYleBOlLm/71ef298196ffcf1d1eb6d2b43abe49d4/Learn_Illustration_How_to_Send_Crypto.png?w=768&fm=png", href: "https://www.coinbase.com/en-gb/learn/wallet/how-to-send-or-receive-crypto-using-cb-wallet" },
];

function ArticleCard({ tag, title, desc, img, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow bg-white"
        >
            <div className="aspect-[16/9] overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 flex flex-col gap-1.5">
                {tag && <span className="text-xs text-blue-600 font-semibold">{tag}</span>}
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{title}</h3>
                {desc && <p className="text-xs text-gray-500 leading-relaxed mt-1">{desc}</p>}
            </div>
        </a>
    );
}

function SectionGrid({ id, heading, subheading, articles, seeMoreHref, seeMoreLabel }) {
    return (
        <section id={id} className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
                    {seeMoreHref && (
                        <a href={seeMoreHref} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium">
                            {seeMoreLabel || "See more"}
                        </a>
                    )}
                </div>
                {subheading && <p className="text-sm text-gray-500 mb-8">{subheading}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                    {articles.map((a, i) => <ArticleCard key={i} {...a} />)}
                </div>
            </div>
        </section>
    );
}

export default function Learn() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-28 pb-12 px-6 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Crypto questions, answered</h1>
                    <p className="text-gray-500 text-base">
                        Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
                    </p>
                </div>
            </section>

            {/* Featured + Popular — two columns */}
            <section className="px-6 pb-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
                    {/* Left: Featured */}
                    <div>
                        <h2 className="text-lg font-bold mb-4 text-gray-900">Featured</h2>
                        <a
                            href={featured.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative rounded-2xl overflow-hidden block border border-gray-100 hover:shadow-lg transition-shadow h-72"
                        >
                            <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <span className="text-xs font-semibold text-blue-300 mb-2 block">{featured.tag}</span>
                                <h3 className="text-lg font-bold text-white mb-1">{featured.title}</h3>
                                <p className="text-sm text-gray-300">{featured.desc}</p>
                            </div>
                        </a>
                    </div>

                    {/* Right: Popular */}
                    <div>
                        <h2 className="text-lg font-bold mb-4 text-gray-900">Popular</h2>
                        <div className="flex flex-col gap-2">
                            {popular.map((p, i) => (
                                <a key={i} href={p.href} target="_blank" rel="noreferrer"
                                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow group">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                    <div>
                                        <span className="text-xs text-blue-600 font-medium block mb-0.5">{p.tag}</span>
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">{p.title}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Category cards */}
            <section className="px-6 py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {categories.map((c, i) => (
                        <a key={i} href={c.href}
                            className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow block aspect-[4/3]">
                            <img src={c.img} alt={c.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4">
                                <span className="text-sm font-bold text-white block">{c.label}</span>
                                <span className="text-xs text-blue-300">See more</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Crypto basics */}
            <section id="crypto-basics" className="px-6 py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-1">
                        <h2 className="text-2xl font-bold">Crypto basics</h2>
                        <a href="https://www.coinbase.com/en-gb/learn/crypto-basics" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium">See more crypto basics</a>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">New to crypto? Not for long — start with these guides and explainers</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cryptoBasics.map((a, i) => <ArticleCard key={i} {...a} />)}
                    </div>
                </div>
            </section>

            {/* What is... */}
            <section className="px-6 py-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">What is...</h2>
                    <div className="flex flex-wrap gap-3">
                        {whatIs.map((term, i) => (
                            <a key={i} href={whatIsHrefs[i]} target="_blank" rel="noreferrer"
                                className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors">
                                {term}
                            </a>
                        ))}
                        <a href="https://www.coinbase.com/en-gb/learn/crypto-glossary" target="_blank" rel="noreferrer"
                            className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
                            See more
                        </a>
                    </div>
                </div>
            </section>

            {/* Tips and tutorials */}
            <SectionGrid
                id="tips-and-tutorials"
                heading="Tips and tutorials"
                subheading="Get practical, step-by-step answers to all things crypto"
                articles={tips}
                seeMoreHref="https://www.coinbase.com/en-gb/learn/tips-and-tutorials"
                seeMoreLabel="See more tips and tutorials"
            />

            {/* Advanced trading */}
            <section id="advanced-trading" className="px-6 py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-1">
                        <h2 className="text-2xl font-bold">Advanced trading</h2>
                        <a href="https://www.coinbase.com/en-gb/learn/advanced-trading" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium">See more advanced trading</a>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Ready to advance? Learn the tools and terminology you need to take control of your trades.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {advancedTrading.map((a, i) => <ArticleCard key={i} {...a} />)}
                    </div>
                </div>
            </section>

            {/* Futures */}
            <SectionGrid
                id="futures"
                heading="Futures"
                subheading="New to futures trading? Get up to speed on the basics."
                articles={futures}
                seeMoreHref="https://www.coinbase.com/en-gb/learn/futures"
                seeMoreLabel="See more about futures"
            />

            {/* All Things Wallet */}
            <section className="px-6 py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-1">
                        <h2 className="text-2xl font-bold">All Things Wallet</h2>
                        <a href="https://www.coinbase.com/en-gb/learn/wallet/" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium">See more Wallet articles</a>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Earn yield, dive into crypto apps, control your holdings, and much more</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {wallet.map((a, i) => <ArticleCard key={i} {...a} />)}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="px-6 pb-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        Information provided on this Site is for general educational purposes only and is not intended to constitute investment or other advice on financial products. Coinbase makes no representations as to the accuracy, completeness, timeliness, suitability, or validity of any information on this Site.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
