import Navbar from "../Navbar";
import Footer from "../Footer";

const features = [
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/signInNavigation-5.svg",
        title: "Easy onboarding",
        desc: "Get up and running with Coinbase Business in no time with streamlined onboarding. Simply fill out your free application and open your account today.",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/worldwide-3.svg",
        title: "Global payments",
        desc: "Accept instant global payments with lower transaction fees and no chargebacks. Automate payouts and cash flows using Coinbase’s APIs.",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/advancedTradingRebates-3.svg",
        title: "Trading",
        desc: "Buy, sell, and store Bitcoin and hundreds of cryptocurrencies — all from one secure, easy-to-use business account.",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/usdcRewards-1.svg",
        title: "Earn rewards on USDC",
        desc: "Earn more from your idle funds—get 3.50% APY on USDC holdings.",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/taxCenterNavigation-7.svg",
        title: "Taxes & accounting",
        desc: "Seamless integration with common accounting software to simplify bookkeeping, ensure compliance, export tax reports, and more.",
    },
    {
        icon: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/securityCoinShield-5.svg",
        title: "Trusted & secure",
        desc: "Enterprise-grade security with built-in transaction monitoring and sanctions screening. Coinbase helps detect suspicious activity and prevent prohibited transactions.",
    },
];

const paymentFeatures = [
    {
        image: "https://images.ctfassets.net/o10es7wu5gm1/74TSuPPNHFZHRY9M9onRZ0/6386e517d452033a8ea3472a8e2605c0/Payout.png",
        title: "Payouts",
        desc: "Send money to individuals or businesses anywhere.",
    },
    {
        image: "https://images.ctfassets.net/o10es7wu5gm1/5kAi36uBxO0QkIK96Cna0K/1c585f61537f5220c5b0ec6721e5b069/Invoice.png",
        title: "Invoicing",
        desc: "Create and manage invoices to get paid.",
    },
    {
        image: "https://images.ctfassets.net/o10es7wu5gm1/1egdrfE1nMvRYYVKdi8I1N/5d99a18abc87920293141f41a084c030/Payment_Link.png",
        title: "Payment Links",
        desc: "Create and share links to get paid quickly.",
    },
];

const faqs = [
    {
        question: "Where do I start?",
        answer: "Get started by completing the Coinbase Business onboarding here — there are no application fees.",
    },
    {
        question: "What countries are supported for Coinbase Business?",
        answer: "Coinbase Business is currently available in the United States and Singapore, with additional regions coming soon.",
    },
    {
        question: "What customer support is available?",
        answer: "All Coinbase Business customers receive access to a dedicated Coinbase concierge.",
    },
    {
        question: "Are there minimum balances, monthly platform fees, or account management fees?",
        answer: "No minimum balances are required for a business account.",
    },
    {
        question: "What features are currently available?",
        answer: "Coinbase Business is designed to help businesses trade, manage, and move crypto with ease. Key features include advanced trading and custody, global payments (Payment Links, Payouts, Invoices), API integrations for automation, competitive rewards on crypto balances, and dedicated business support.",
    },
    {
        question: "Which assets are supported?",
        answer: "Coinbase Business supports the assets listed on Coinbase, subject to regional restrictions and ongoing asset reviews.",
    },
    {
        question: "Can we onboard multiple entities, subsidiaries, or sub-accounts under one organization?",
        answer: "At the moment, Coinbase Business supports onboarding one legal entity per account. We know multi-entity and sub-account management are important for growing businesses, and we plan to expand support over time.",
    },
];

export default function Business() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-[#0a0b0d] font-sans overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
                <div className="max-w-3xl mb-14">
                    <h1 className="text-[3.5rem] leading-[1.05] font-extrabold mb-6 tracking-tight">
                        Enhance your business with Coinbase
                    </h1>
                    <p className="text-[#5b616e] text-xl mb-10 leading-snug mx-auto max-w-2xl">
                        The all-in-one financial platform for modern companies
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-base">
                            Get started
                        </button>
                    </div>
                </div>

                <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer bg-black/5">
                    <img
                        src="https://embed-ssl.wistia.com/deliveries/3e2ae98cc590329ef3e5a64ec06abd30.webp?image_crop_resized=1920x1080"
                        alt="Video Thumbnail"
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for Business (Features grid) */}
            <section className="py-24 px-6 bg-[#f9fafb]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-extrabold mb-5">Built for Business</h2>
                        <p className="text-[#5b616e] text-lg max-w-3xl leading-relaxed">
                            Created for the way startups and small businesses work today — Coinbase Business is an operating account that helps you adapt your business to changing consumer preferences and global payment trends.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {features.map((f, i) => (
                            <div key={i} className="flex flex-col items-start text-left">
                                <img src={f.icon} alt={f.title} className="w-14 h-14 mb-6" />
                                <h3 className="text-[1.35rem] font-bold mb-3">{f.title}</h3>
                                <p className="text-[#5b616e] leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payments made simple */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-4xl font-extrabold mb-5">Payments made simple</h2>
                        <p className="text-[#5b616e] text-lg mb-6 leading-relaxed">
                            Make and collect global payments. Pay anyone, anywhere, instantly and for free, using stablecoins.
                        </p>
                        <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2">
                            Learn more
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {paymentFeatures.map((pf, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <img src={pf.image} alt={pf.title} className="w-full h-auto mb-8 rounded-xl object-contain" />
                                <h3 className="text-xl font-bold mb-3">{pf.title}</h3>
                                <p className="text-[#5b616e]">{pf.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The future of money (Stats) */}
            <section className="py-24 px-6 bg-[#0a0b0d] text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-6">The future of money</h2>
                    <p className="text-gray-400 text-lg mb-16 max-w-2xl">
                        Stablecoin payments are already outpacing legacy rails in scale and flexibility.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                        <div>
                            <p className="text-[3.5rem] font-medium leading-none mb-4 text-blue-500">50x</p>
                            <p className="text-gray-400 text-lg">Global stable coin growth since 2020, reaching almost $30T in 2024.</p>
                        </div>
                        <div>
                            <p className="text-[3.5rem] font-medium leading-none mb-4 text-blue-500">80%</p>
                            <p className="text-gray-400 text-lg">The percentage of surveyed businesses already using or exploring stablecoins.</p>
                        </div>
                        <div>
                            <p className="text-[3.5rem] font-medium leading-none mb-4 text-blue-500">30M+</p>
                            <p className="text-gray-400 text-lg">The number of people already using stablecoins monthly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trading */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6">Trading</h2>
                        <p className="text-[#5b616e] text-lg mb-8 leading-relaxed">
                            Trade cryptocurrencies with confidence and security using your business account. Enjoy a seamless experience while ensuring your transactions are protected.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition">
                            Learn more
                        </button>
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                        <img src="https://images.ctfassets.net/o10es7wu5gm1/54xzmQTLQsLB3BeOqCkzfx/afcf8ba1e8caf814726aa3728d52489b/Trading.png" alt="Trading platform" className="w-full" />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-6 bg-[#f9fafb]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-12">FAQs</h2>
                    <div className="divide-y divide-gray-200">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-gray-900 group-open:text-blue-600 transition-colors">
                                    {faq.question}
                                    <span className="ml-6 flex-shrink-0">
                                        <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-[#5b616e] leading-relaxed pr-8">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-6">Get started today</h2>
                <p className="text-[#5b616e] text-xl mb-10 max-w-2xl mx-auto">
                    Join the growing Coinbase Business community and take your business to the next level.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition text-lg">
                    Get started
                </button>
            </section>

            <Footer />
        </div>
    );
}
