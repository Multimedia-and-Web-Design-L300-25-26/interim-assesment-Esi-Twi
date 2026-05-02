import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const features = [
    {
        icon: (
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
        title: "Fund your card with ease.",
        desc: "Link your bank account or get part of your paycheck deposited into Coinbase with zero fees.",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
        title: "Sign up with no requirements.",
        desc: "There is no credit check or requirement to stake your assets to become eligible.⁷",
    },
    {
        icon: (
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        ),
        title: "Get 24/7 support.",
        desc: "We're available with dedicated phone and email support.",
    },
];

const faqs = [
    {
        q: "Am I eligible for Coinbase Card?",
        a: "Right now, Coinbase Card is available for all Coinbase customers who live in the UK.",
    },
    {
        q: "Are there any fees?",
        a: "There are no fees for spending Pound Sterling (£). We also don't charge any trading fees for spending crypto, including USD Coin (USDC). Coinbase does not charge any fees to use your card at an ATM, but the ATM may charge their own fee.",
    },
    {
        q: "Where is Coinbase Card accepted?",
        a: "Coinbase Card is accepted anywhere Visa® debit cards are accepted, at merchants worldwide. If you choose to spend crypto, Coinbase will automatically convert all cryptocurrency to Pound Sterling (£) for use in purchases and ATM withdrawals.",
    },
    {
        q: "Are there tax implications?",
        a: "There are generally no tax implications if you spend Pound Sterling (£). Spending any other kind of crypto involves selling your assets. Selling crypto using your card is a taxable transaction. Please speak to a tax advisor to better understand how your card impacts your unique tax situation.",
    },
];

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-5">
            <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-left">
                <span className="text-sm font-semibold text-gray-900">{q}</span>
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {open && <p className="mt-3 text-sm text-gray-500 leading-relaxed">{a}</p>}
        </div>
    );
}

export default function DebitCard() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-0 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Top row: big title left, desc + CTA right */}
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                        <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.0] text-gray-900 flex-shrink-0">
                            Coinbase Card
                        </h1>
                        <div className="flex flex-col justify-center md:pt-4 max-w-md">
                            <p className="text-lg text-gray-700 leading-snug mb-6">
                                The Visa® prepaid debit card that turns your everyday purchases into crypto rewards ¹ ²
                            </p>
                            <a
                                href="https://www.coinbase.com/en-gb/signup"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
                            >
                                Sign up to get started
                            </a>
                        </div>
                    </div>

                    {/* Card image — centered below, large */}
                    <div className="flex justify-center">
                        <img
                            src="https://images.ctfassets.net/o10es7wu5gm1/4AsEsKXTMmSVky9wG1MNqM/1ceaf6ca937f526948ea3b909edb2e71/landing_hero_white_bg.png"
                            alt="Coinbase Debit Card"
                            className="w-full max-w-[520px] object-contain"
                        />
                    </div>
                </div>
            </section>


            {/* Easy setup */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        {/* Left: card photo */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.ctfassets.net/o10es7wu5gm1/4gA2dn0z5sAKVsMdQJcMal/8af1b0d921ffa52fb3d396a02bbcb041/1200_x_1200_white_bg.png"
                                alt="Coinbase Card"
                                className="w-full max-w-[400px] rounded-3xl object-contain shadow-xl"
                            />
                        </div>

                        {/* Right: features */}
                        <div>
                            <h2 className="text-3xl font-bold mb-10">Easy set up</h2>
                            <p className="text-gray-500 text-sm mb-10">Create a virtual card or order a physical card</p>
                            <div className="flex flex-col gap-8">
                                {features.map((f, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            {f.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 mb-1">{f.title}</p>
                                            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accepted everywhere banner */}
            <section className="py-16 px-6 bg-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Accepted anywhere Visa® is accepted</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto">
                        Use your Coinbase Card at merchants worldwide. Coinbase automatically converts your crypto to Pound Sterling (£) for purchases and ATM withdrawals.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-8 text-center">
                        For a full list of FAQs, visit our{" "}
                        <a href="https://help.coinbase.com/en-gb/coinbase/trading-and-funding/coinbase-card/cb-card" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                            Help Center.
                        </a>
                    </p>
                </div>
            </section>

            {/* Legal */}
            <section className="pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs text-gray-400 leading-relaxed text-center">
                        Coinbase Card is issued in the United Kingdom by Paysafe Financial Services Limited, as a principal issuing member of Visa Inc. Paysafe Financial Services Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 FRN: 900015. All fees are disclosed in the Cardholder Agreement. There are no Coinbase transaction fees but a spread applies when we buy, sell, or trade cryptocurrencies. This Financial Promotion has been approved by Archax LTD.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
