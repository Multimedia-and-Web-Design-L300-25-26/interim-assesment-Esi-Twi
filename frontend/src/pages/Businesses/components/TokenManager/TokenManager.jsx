import Navbar from "../Navbar";
import Footer from "../Footer";

const coreFeatures = [
    {
        title: "End-to-end token management",
        desc: "Manage all aspects of the token lifecycle, from pre to post launch, seamlessly integrated with our institutional-grade custody solution."
    },
    {
        title: "Unmatched launch expertise",
        desc: "Benefit from the insights of 100+ token launches. We help you navigate the operational pitfalls of TGE so you don't have to learn the hard way."
    },
    {
        title: "Compliance-first architecture",
        desc: "From automating tax withholding to navigating evolving crypto laws, rely on a system designed to help you stay compliant in a rapidly changing world."
    },
    {
        title: "The institutional standard",
        desc: "Market-leading features, backed by the infrastructure trusted by the world's leading institutions."
    }
];

const capabilitySections = [
    {
        title: "Automated vesting and lockups",
        desc: "Forget spreadsheets and custom scripts. Set and forget your token distribution schedules with custodian integrations or smart contract-based vesting and lockups.",
        image: "https://images.ctfassets.net/o10es7wu5gm1/36o7zfFDOKKydr9ptrPIB2/9efe60daac5e6713037b6ef30c66d2e5/card-vesting-lockups.png",
        alt: "\"Employee token grant\" screen with Vested and Unlocked categories",
        reverse: false
    },
    {
        title: "Token launch management",
        desc: "Navigate the complexities of token launches with a platform built for scale. We bridge the gap between allocation planning to secure custody, ensuring your asset is market-ready from day one.",
        image: "https://images.ctfassets.net/o10es7wu5gm1/3lZ2XS6kEMLSxz6GUXqBpU/55e89b3872cf7feb8f7fb161261564f9/card-token-launch.png",
        alt: "Status bars for various categories",
        reverse: true
    },
    {
        title: "Bulk token distributions in one click",
        desc: "Execute massive airdrops and post-token sale distributions without the engineering headache. Our batched transaction engine handles bulk transfers, so you can send tokens to 10,000+ stakeholders as easily as sending an email.",
        image: "https://images.ctfassets.net/o10es7wu5gm1/3zGn70rZU5xR3Ep05KPvnd/7fab44850ec093a1003855e4404e45ef/card-airdrops.png",
        alt: "\"Airdrop\" action screen with overlapping user avatars and a \"Send tokens\" button",
        reverse: false
    },
    {
        title: "Tax withholding and payroll integrations",
        desc: "Automate tax withholding and reporting across jurisdictions. We integrate directly with your payroll systems to make every token grant and unlock compliant for your global workforce.",
        image: "https://images.ctfassets.net/o10es7wu5gm1/1AaXFtV9POWqjjLPJvED6n/ad67e3c8f986c9a0eedb7ae9c4e65234/card-global-tax.png",
        alt: "List of users showing their avatar, country, and tax rate",
        reverse: true
    }
];

export default function TokenManager() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-[#0a0b0d] font-sans">
            <Navbar />

            {/* Notification Banner */}
            <div className="bg-gray-100 text-xs py-3 px-6 text-center text-gray-600 border-b border-gray-200 mt-16 md:mt-0">
                Don’t invest unless you’re prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong. <a href="https://www.coinbase.com/uk-fca-info" className="text-blue-600 hover:underline">Take 2 mins to learn more</a>
            </div>

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-6 relative overflow-hidden flex flex-col items-center text-center">
                <div className="max-w-4xl relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#5b616e] mb-4">Token Manager</p>
                    <h1 className="text-[3.5rem] md:text-[5rem] font-extrabold mb-6 leading-[1.05] tracking-tight text-[#0a0b0d]">
                        The institutional standard for token operations
                    </h1>
                    <p className="text-xl text-[#5b616e] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Trusted by top crypto teams to streamline token operations from pre-token launch to post-launch.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="https://tokenmanager.coinbase.com/" target="_blank" rel="noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors inline-block text-lg shadow-sm">
                            Sign in to Token Manager
                        </a>
                    </div>
                </div>

                {/* Hero Central Graphic */}
                <div className="mt-20 w-full max-w-6xl flex justify-center border-b border-gray-100 pb-20">
                    <img
                        src="https://images.ctfassets.net/o10es7wu5gm1/7iLY7JpeIhNUNtcwKEUrdB/233e011a25e16226331d731e1d5d1677/coinbase-token-manager.png"
                        alt="Chart showing upward progress in a staircase-like progression"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        style={{ maxHeight: '600px' }}
                    />
                </div>
            </section>

            {/* Feature Deep Dives Grid */}
            <section className="py-24 px-6 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto space-y-32">
                    {capabilitySections.map((cap, i) => (
                        <div key={i} className={`flex flex-col ${cap.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                            <div className="w-full lg:w-1/2">
                                <div className="rounded-[2.5rem] relative overflow-hidden bg-white shadow-2xl border border-gray-100 transform hover:-translate-y-1 transition duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none mix-blend-multiply opacity-50"></div>
                                    <img
                                        src={cap.image}
                                        alt={cap.alt}
                                        className="w-full h-auto object-cover transform scale-105"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 text-left">
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0a0b0d] tracking-tight leading-tight">{cap.title}</h2>
                                <p className="text-xl text-[#5b616e] leading-relaxed">
                                    {cap.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mid Page CTA */}
            <section className="py-28 px-6 bg-white border-y border-gray-100 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-[3rem] font-extrabold leading-[1.1] mb-8 text-[#0a0b0d] tracking-tight">
                        Trusted by industry leaders
                    </h2>
                    <p className="text-xl text-[#5b616e] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join over 100+ top crypto teams using Coinbase Token Manager to automate their vesting, lockups, and distributions
                    </p>
                    <a href="https://forms.gle/FGMrYuYbnudV5sPr5" target="_blank" rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors inline-block text-lg shadow-sm">
                        Get started
                    </a>
                </div>
            </section>

            {/* Core Features Overview */}
            <section className="py-24 px-6 bg-[#0a0b0d] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {coreFeatures.map((feat, i) => (
                        <div key={i} className="flex flex-col border-t border-gray-800 pt-8">
                            <h3 className="font-bold text-xl mb-4 text-white inline-flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                {feat.title}
                            </h3>
                            <p className="text-[#a1a7b6] leading-relaxed">
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 px-6 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[3rem] md:text-[4.5rem] font-extrabold leading-[1.05] mb-8 text-[#0a0b0d] tracking-tight">
                        Unlock the full power of Coinbase for your token
                    </h2>
                    <p className="text-2xl text-[#5b616e] mb-12 font-medium">
                        A unified workflow that connects your token operations to the world's most trusted exchange.
                    </p>
                    <a href="https://forms.gle/FGMrYuYbnudV5sPr5" target="_blank" rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-full transition-colors inline-block text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Get started
                    </a>
                </div>
            </section>

            {/* Disclaimer Text */}
            <section className="py-12 px-6 bg-gray-50 border-t border-gray-200">
                <div className="max-w-6xl mx-auto text-xs text-gray-500 leading-relaxed text-center or text-left">
                    <p className="mb-4">
                        Disclaimer: This material is the property of Coinbase, Inc., its parent, and its affiliates and is for informational purposes. This material is not accounting, investment, legal, or tax advice. Please note that all investments involve risk, including risk of loss, and thus may not be suitable for everyone. Recipients should consult their advisors before making any investment decision. Trading venues not connected to Coinbase Prime may offer better pricing. Coinbase, Inc. is licensed to engage in virtual currency business activity by the New York State Department of Financial Services and is not licensed with the U.S. Securities and Exchange Commission or the U.S. Commodity Futures Trading Commission.
                    </p>
                    <p className="mb-4">
                        <a href="https://www.coinbase.com/en-gb/legal/licenses" className="text-blue-600 hover:underline">View our licensing information here</a>.
                    </p>
                    <p>
                        Coinbase Custody Trust Company, LLC is chartered as a limited purpose trust company by the New York State Department of Financial Services to engage in virtual currency business.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
