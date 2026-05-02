import Navbar from "../Navbar";
import Footer from "../Footer";

const keyFeatures = [
    {
        title: "Always On",
        desc: "Real-time settlement, any time, any day.",
    },
    {
        title: "Global by Default",
        desc: "Reach customers and partners anywhere in the world.",
    },
    {
        title: "Lower Costs",
        desc: "Significantly cheaper than traditional payment rails.",
    },
    {
        title: "Flexible",
        desc: "Accept stablecoin payments and automatically convert to USD.",
    },
];

const commerceStats = [
    {
        number: "50x",
        desc: "GLOBAL STABLECOIN GROWTH SINCE 2020, REACHING ALMOST $30T IN 2024.",
    },
    {
        number: "80%",
        desc: "THE PERCENTAGE OF SURVEYED INSTITUTIONS ALREADY USING OR ACTIVELY EXPLORING STABLECOINS.",
    },
    {
        number: "30M+",
        desc: "THE NUMBER OF PEOPLE ALREADY USING STABLECOINS MONTHLY.",
    },
];

const deepDives = [
    {
        id: "stablecoin-checkout",
        title: "Stablecoin Checkout",
        subtitle: "Consumer-grade UX for global buyers",
        image: "https://images.ctfassets.net/o10es7wu5gm1/1r4f89SFyDF35LYdVULngo/0db6a74e677a2e246f4bc6408044c719/StablecoinCheckout__3_.png",
        points: [
            "Reach global customers with a familiar checkout experience",
            "Built-in KYT screening and compliance tools",
            "Ideal for emerging markets where card infrastructure falls short",
            "Embeddable UI that works across platforms"
        ],
        reverse: false
    },
    {
        id: "ecommerce-engine",
        title: "E-commerce Engine",
        subtitle: "Plug-and-play infrastructure for merchants, marketplaces, and PSPs",
        image: "https://images.ctfassets.net/o10es7wu5gm1/3Ui77fEyCJGHy2craWfbzg/00fdb8cf263472cfeace4ddde1fcad69/EcommerceEngine__3_.png",
        points: [
            "The best of traditional payments—rebuilt for stablecoins",
            "Instant, final settlement—with no chargeback risk or volatility exposure",
            "Handles auth/capture, refunds, ledgering, subscriptions",
            "Easy API integration—no blockchain expertise required"
        ],
        reverse: true
    },
    {
        id: "payments-protocol",
        title: "Commerce Payments Protocol",
        subtitle: "Smart contract rails for modern commerce",
        image: "https://images.ctfassets.net/o10es7wu5gm1/7i9VNfV7OUfZCy5NnE1kjv/02dc3551d30c3d049ea59aac0d48a1cb/PaymentProtocol__3_.png",
        points: [
            "A programmable, onchain escrow system that behaves like traditional payments—with superpowers",
            "Smart contracts enable escrow, delayed capture, and conditional release",
            "Fully auditable, open-source, and secure",
            "Compatible with enterprise workflows and trust-minimized transactions"
        ],
        reverse: false
    }
];

const lookingForMore = [
    {
        title: "USDC Rewards",
        desc: "Enable loyalty, cashback, or yield features natively"
    },
    {
        title: "Cross-Border Payouts",
        desc: "Global disbursements with fewer intermediaries and faster delivery"
    },
    {
        title: "24/7 Settlement",
        desc: "Real-time support for all payment types, including refunds and subscriptions"
    },
    {
        title: "Treasury Tools",
        desc: "Smarter balance and float management with onchain visibility"
    }
];

export default function Payments() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-[#0a0b0d] font-sans overflow-hidden">
            <Navbar />

            {/* Custom Payments Mini Navbar */}
            <div className="border-b border-gray-100 py-4 px-6 sticky top-0 bg-white z-40 hidden md:block">
                <div className="max-w-6xl mx-auto flex gap-8 text-sm font-semibold text-[#5b616e]">
                    <a href="#" className="text-black">Payments</a>
                    <a href="#" className="hover:text-blue-600">Checkout</a>
                    <a href="#" className="hover:text-blue-600">Protocol</a>
                </div>
            </div>

            {/* Notification Banner */}
            <div className="bg-gray-100 text-xs py-3 px-6 text-center text-gray-600 border-b border-gray-200">
                Don’t invest unless you’re prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong. <a href="#" className="text-blue-600 hover:underline">Take 2 mins to learn more</a>
            </div>

            {/* Hero Section */}
            <section className="pt-24 pb-0 text-center flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 rounded-[100%] blur-3xl"></div>
                <div className="max-w-4xl px-6 relative z-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#5b616e] mb-4">PAYMENTS</p>
                    <h1 className="text-[4rem] md:text-[5rem] leading-[1.05] font-extrabold mb-6 tracking-tight">
                        The future of <br className="hidden md:block" /> payments is here.
                    </h1>
                    <p className="text-[#5b616e] text-xl mb-10 leading-snug mx-auto max-w-2xl">
                        Move money at the speed of the internet. Stablecoin payments settle instantly, 24/7, without borders.
                    </p>
                    <a href="http://coinbase.com/payments/interest" target="_blank" rel="noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg shadow-md mb-16">
                        Get in touch
                    </a>
                </div>

                <div className="w-full bg-[#0a0b0d] flex justify-center border-t border-gray-800">
                    <div className="w-full max-w-7xl px-6 pt-16 pb-20">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-[#141519] aspect-[16/9] md:aspect-auto">
                            <img
                                src="https://embed-ssl.wistia.com/deliveries/4e93836e80d677afa35257fa6285779f.webp?image_crop_resized=1750x1000"
                                alt="Coinbase Payments Video"
                                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-500 cursor-pointer"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-20 h-20 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                    <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="absolute bottom-6 left-6 text-white text-sm font-semibold tracking-wide bg-black/50 px-3 py-1.5 rounded-lg backdrop-blur-md">
                                Click for sound
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 px-6 bg-[#0a0b0d] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {keyFeatures.map((f, i) => (
                            <div key={i} className="pt-6 border-t border-gray-800">
                                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Future of Commerce */}
            <section className="py-32 px-6 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
                    <div className="md:w-1/2">
                        <h2 className="text-[3rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
                            The future <br /> of commerce
                        </h2>
                        <p className="text-[#5b616e] text-2xl leading-relaxed">
                            Stablecoin payments are already outpacing legacy rails in scale and flexibility.
                        </p>
                    </div>

                    <div className="md:w-1/2 space-y-14">
                        {commerceStats.map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-6xl lg:text-7xl font-light text-blue-600 mb-4 tracking-tighter">
                                    {stat.number}
                                </h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 leading-relaxed max-w-sm">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dives */}
            <section className="py-16 px-6 bg-[#f9fafb]">
                <div className="max-w-6xl mx-auto space-y-32 py-16">
                    {deepDives.map((item, i) => (
                        <div key={i} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                            <div className="w-full lg:w-1/2">
                                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                    <img src={item.image} alt={item.title} className="w-full h-auto object-contain rounded-xl" />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-4xl font-extrabold mb-4">{item.title}</h2>
                                <h3 className="text-2xl text-[#5b616e] mb-10 leading-snug">{item.subtitle}</h3>

                                <ul className="space-y-6">
                                    {item.points.map((point, j) => (
                                        <li key={j} className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-[#0a0b0d] text-lg leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Shopify Integration */}
            <section className="py-32 px-6 bg-white text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold mb-12">Used by leading retailers</h2>
                    <div className="bg-gray-50 rounded-[3rem] p-16 w-full border border-gray-100 mb-12 flex justify-center items-center">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/oleVvNyHH5KfGfUlsCZwu/3af27093cc6f5d63a22e9a8b33db92b9/shopify-mono-black.png"
                            alt="Shopify"
                            className="h-20 object-contain opacity-80"
                        />
                    </div>
                    <p className="text-2xl text-[#5b616e] leading-relaxed max-w-3xl">
                        The Coinbase Payments suite is featured on <a href="https://www.shopify.com/" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline border-blue-600 pb-0.5">Shopify</a>, bringing USDC payments to millions of merchants, with no additional lift or integration steps.
                    </p>
                </div>
            </section>

            {/* Looking for more */}
            <section className="py-24 px-6 bg-[#0a0b0d] text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6">Looking for more?</h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-12">
                            We’re extending our product to support across the full payments lifecycle—built on stablecoin rails.
                        </p>
                        <a href="http://coinbase.com/payments/interest" target="_blank" rel="noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg shadow-md">
                            Get in touch
                        </a>
                    </div>

                    <div className="space-y-8">
                        {lookingForMore.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-2 bg-blue-500 p-1 rounded-full flex-shrink-0">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-lg leading-relaxed">
                                        <strong className="text-white font-bold">{item.title}:</strong> <span className="text-gray-400">{item.desc}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
