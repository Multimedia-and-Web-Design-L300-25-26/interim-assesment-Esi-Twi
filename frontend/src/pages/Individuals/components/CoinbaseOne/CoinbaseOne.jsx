import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const plans = [
    {
        name: "Basic",
        monthlyPrice: "£4.99",
        annualPrice: "£49.99/year",
        highlight: false,
        features: {
            "Zero trading fees": "Up to £500/month",
            "3.50% APY on USDC": "Unlimited",
            "Staking rewards boost": "+5% boost",
            "24/7 priority support": "—",
            "Token sale boost": "Request up to 1.5x more",
            "25% RAT spot rebate": "—",
            "Exclusive tax deals": "Available",
        },
    },
    {
        name: "Preferred",
        monthlyPrice: "£19.99",
        annualPrice: "£209.99/year",
        highlight: true,
        features: {
            "Zero trading fees": "Up to £10,000/month",
            "3.50% APY on USDC": "Unlimited",
            "Staking rewards boost": "+10% boost",
            "24/7 priority support": "24/7 priority support",
            "Token sale boost": "Request up to 2.5x more",
            "25% RAT spot rebate": "Up to 100 USDC/month",
            "Exclusive tax deals": "Available",
        },
    },
    {
        name: "Premium",
        monthlyPrice: "£199.99",
        annualPrice: "No annual plan",
        highlight: false,
        features: {
            "Zero trading fees": "Unlimited",
            "3.50% APY on USDC": "Unlimited",
            "Staking rewards boost": "+15% boost",
            "24/7 priority support": "Concierge",
            "Token sale boost": "Request up to 5x more",
            "25% RAT spot rebate": "Unlimited",
            "Exclusive tax deals": "Available",
        },
    },
];

const extras = [
    {
        img: "https://images.ctfassets.net/o10es7wu5gm1/2plxLkuyd1DSnBI022Zve2/7db7417938d2a47381578b46c59f8cd2/CoinTracker.png",
        name: "CoinTracker",
        desc: "Get a free Base plan, or £49 off any other plan. Generate accurate reports and file in minutes with the only solution that auto-imports with TurboTax or H&R Block.",
        href: "https://www.cointracker.io/",
    },
    {
        img: "https://images.ctfassets.net/o10es7wu5gm1/759X0azAKoUGUEaLO2WrI7/fe658752f0a44c731adbb85efc58f23d/SUMM_Brandmark_RGB_Off_Black.png",
        name: "Summ",
        desc: "Accurate, CPA-endorsed tax reports without the guesswork. Coinbase One members get $1 Rookie plan (save £48), and up to 50% off all other plans.",
        href: "https://www.summ.com/",
    },
    {
        img: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/stakingGraph-5.svg",
        name: "Boosted Staking Rewards",
        desc: "Earn more on rewards-earning assets, for members only. APYs when displayed are indicative and not guaranteed and may vary over time.",
        href: "#",
    },
    {
        img: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseOneChat-3.svg",
        name: "Priority support",
        desc: "Get answers when you need them — call your dedicated support team 24 hours a day, 365 days a year.",
        href: "#",
    },
];

const faqs = [
    {
        q: "How do I pay for Coinbase One?",
        a: "We accept ACH, debit cards, cash balances, PayPal, USDC or USDT, and select crypto balances (BTC, ETH, ADA, SOL, COSMOS, ATOM, and DOT). Log in to your account to see the full list of payment methods available in your region.",
    },
    {
        q: "Is this available to all users?",
        a: "Coinbase One is available to users in the US and many countries worldwide including the UK, Australia, Canada, France, Germany, and many more. Currencies and benefit availability vary by region.",
    },
    {
        q: "Can I share my Coinbase One membership?",
        a: "No, you can't share your membership. You should be the only one able to access your Coinbase account.",
    },
    {
        q: "Can I be reimbursed for previous trading fees?",
        a: "No, you will not be retroactively reimbursed for past trading fees.",
    },
    {
        q: "Is Coinbase One the same as Coinbase Pro?",
        a: "No — Coinbase One is a monthly membership with multiple benefits. Coinbase Advanced Trade (formerly Coinbase Pro) is our crypto platform for advanced traders.",
    },
];

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-5">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-left"
            >
                <span className="text-sm font-semibold text-gray-900">{q}</span>
                <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {open && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{a}</p>
            )}
        </div>
    );
}

const featureRows = [
    "Zero trading fees",
    "3.50% APY on USDC",
    "Staking rewards boost",
    "24/7 priority support",
    "Token sale boost",
    "25% RAT spot rebate",
    "Exclusive tax deals",
];

export default function CoinbaseOne() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-white pt-28 pb-16 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left */}
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                            Coinbase One
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-5 text-gray-900">
                            Get more out of crypto<br />with one membership
                        </h1>
                        <p className="text-lg text-gray-500 mb-8">
                            Zero trading fees, boosted staking rewards, and more—starting at £4.99/month.
                        </p>
                        <a
                            href="https://www.coinbase.com/settings/subscription/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
                        >
                            Get Started
                        </a>
                    </div>
                    {/* Right */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/6nZH4sYSMbCYXjmwiAn8Mf/92a0121bca95dd003e6625ce5e4f9ea2/CB_one_hero.png"
                            alt="Coinbase One"
                            className="w-full max-w-[480px] object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-2">Discover the best of Coinbase</h2>
                    <p className="text-center text-gray-500 text-sm mb-12">Find the right plan for you</p>

                    {/* Plan cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`rounded-2xl p-7 border ${plan.highlight
                                    ? "bg-blue-600 border-blue-600 text-white shadow-xl"
                                    : "bg-white border-gray-200 text-gray-900"
                                    }`}
                            >
                                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                                    {plan.name}
                                </p>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-3xl font-extrabold">{plan.monthlyPrice}</span>
                                    <span className={`text-sm ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>/mo</span>
                                </div>
                                <p className={`text-xs mb-6 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                                    {plan.annualPrice}
                                </p>
                                <ul className="space-y-3">
                                    {featureRows.map((feat) => (
                                        <li key={feat} className="flex justify-between gap-3 text-xs">
                                            <span className={plan.highlight ? "text-blue-100" : "text-gray-500"}>{feat}</span>
                                            <span className={`font-semibold text-right ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                                                {plan.features[feat]}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://www.coinbase.com/settings/subscription/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`mt-8 block text-center text-sm font-semibold py-3 rounded-full transition-colors ${plan.highlight
                                        ? "bg-white text-blue-600 hover:bg-blue-50"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zero trading fees */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Unlock zero trading fees</h2>
                        <p className="text-gray-500 leading-relaxed">
                            Pay zero trading fees on hundreds of assets. A spread applies and limits may apply.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/2bBpBMkioGdRmmxvz9LzC8/a1dad21e41730b61dbce2f5201cf6c52/zero_en-gb.png"
                            alt="Zero trading fees"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* USDC rewards */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/6TegWtCK7YBqmLVatL0wXD/951c95a44870034acbfc7cd85148e943/_____2_.png"
                            alt="Earn rewards on USDC"
                            className="w-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-5">Earn rewards on USDC</h2>
                        <p className="text-gray-500 leading-relaxed">
                            Earn unlimited 3.50% APY on your USDC.
                        </p>
                    </div>
                </div>
            </section>

            {/* Extras */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-14">...and access much more.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {extras.map((e) => (
                            <a
                                key={e.name}
                                href={e.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow bg-white group"
                            >
                                <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                                    <img src={e.img} alt={e.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold mb-1 group-hover:text-blue-600 transition-colors">{e.name}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{e.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Frequently asked questions</h2>
                    <p className="text-center text-gray-500 text-sm mb-12">
                        We've answered your frequently asked questions below! Don't see yours?{" "}
                        <a href="https://help.coinbase.com/en/contact-us" className="text-blue-600 hover:underline">Contact support</a>.
                    </p>
                    <div>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-10 leading-relaxed">
                        A Coinbase One subscription renews automatically and requires recurring payments. Membership benefits
                        may be changed or removed without notice. Some membership benefits are not available in all regions and
                        are not available to all users. All imagery is for illustrative purposes only; actual rates may vary.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
