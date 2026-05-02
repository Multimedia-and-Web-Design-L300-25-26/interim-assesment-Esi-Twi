import Navbar from "../Navbar";
import Footer from "../Footer";

const assetBenefits = [
    {
        title: "Global Reach",
        desc: "Tap into millions of active, trading users",
    },
    {
        title: "Robust Security",
        desc: "Industry-leading security protocols",
    },
    {
        title: "Access",
        desc: "Leverage our ecosystem of tools for developers",
    },
];

const priorityCriteria = [
    {
        image: "https://images.ctfassets.net/o10es7wu5gm1/ej6Q88CQ4OXgJChVPdzuH/3dcac7ad26e843c8fd070d268b53b570/nuxChecklist-5.svg",
        title: "Business Criteria",
        desc: "We prioritize reviews of assets based on set business criteria such as demand (i.e. trading volume, market cap), traction of token/application (i.e. token holders), & anticipated liquidity. We also perform additional business assessments regarding quantitative and qualitative signals such as social media sentiment and behavior, history of key project contributors, and information about how tokens are distributed.",
    },
    {
        image: "https://images.ctfassets.net/o10es7wu5gm1/3ggQ1fxVL8VFWv0itPTjnC/cc25f75402d6c28276b85479b79dd3bb/assetForward-4.svg",
        title: "Pre-Launch Assets",
        desc: "As project teams continue to issue new tokens, our team strives to stay current in this evolving landscape by supporting asset launches with trading support on day one. Evaluating assets ahead of launch is unique, and we have a separate set of business criteria to decide which projects we’ll consider for a pre-launch review.",
    },
    {
        image: "https://images.ctfassets.net/o10es7wu5gm1/1BuKAjkbIR0D9DSUivNbCY/a1e2bc46208b31a10f055fb3eef93a5c/stressTestedColdStorage-2.svg",
        title: "Technical Considerations",
        desc: "We are currently equipped to support several token types (ERC-20 on Base, Ethereum, Optimism, Arbitrum, and Polygon as well as SPL’s and ARC-20s) without substantial integration efforts. Native blockchains and other asset types require additional resources to support, which impacts our ability to prioritize certain assets.",
    },
];

const processSteps = [
    {
        step: "Request a review",
        desc: "Begin by filling out a request for review, and provide detailed information about your asset, including its purpose, technology, and team.",
    },
    {
        step: "Initial Review",
        desc: "Our team conducts a preliminary assessment to ensure the asset aligns with our listing criteria. If we choose to move forward or have additional questions, our team will reach out to you.",
    },
    {
        step: "Due Diligence",
        desc: "We perform an in-depth analysis, evaluating factors such as technology, use case, market demand, and regulatory compliance.",
    },
    {
        step: "Notification",
        desc: "After completing our due diligence, we will reach out to projects that have been chosen for listing.",
    },
    {
        step: "Listing",
        desc: "Coinbase conducts our standard listing process to enable transfers and move into trading mode when liquidity conditions are met.",
    },
    {
        step: "Post-Listing Support",
        desc: "Enjoy ongoing support from Coinbase as you engage with our community and navigate the market.",
    },
];

const faqs = [
    {
        question: "What’s needed from project teams to review an asset?",
        answer: "Once an asset meets our business criteria and we choose to move forward with a due diligence review, we conduct a review without assistance from project teams. If we need additional information in order to complete our review or have updates to share, we will reach out to those teams.",
    },
    {
        question: "How does Coinbase review assets?",
        answer: "Our due diligence review includes technical security, compliance, and legal components. Technical security: We evaluate a token’s custody risks, and the security controls project teams implement to protect users. Compliance: In addition to ensuring that we’re abiding by certain regulations, we also seek to exclude digital assets from platform support where the asset is known or likely to defraud or harm consumers. Legal: Our legal review team analyzes potential assets under applicable securities laws.",
    },
    {
        question: "What types of tokens does Coinbase currently support?",
        answer: "We can speedily integrate ERC-20 on Base, Ethereum, Optimism, Arbitrum, and Polygon as well as SPL’s and ARC-20s. Other token types require additional engineering work to integrate.",
    },
    {
        question: "Are there any fees associated with a listing?",
        answer: "Listing assets on Coinbase is free, and always has been. We don’t charge listing or application fees to asset issuers. Unlike many exchanges, we also don’t charge prerequisite asset marketing fees or require issuers to adopt Coinbase’s other services.",
    },
];

export default function AssetListings() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-[#0a0b0d] font-sans overflow-hidden">
            <Navbar />

            {/* Custom Asset Listings Mini Navbar (Mocked based on structure) */}
            <div className="border-b border-gray-100 py-4 px-6 sticky top-0 bg-white z-40 hidden md:block">
                <div className="max-w-6xl mx-auto flex gap-8 text-sm font-semibold text-[#5b616e]">
                    <a href="#" className="text-black">Listings</a>
                    <a href="#" className="hover:text-blue-600">Get Listed</a>
                    <a href="#" className="hover:text-blue-600">Listings Standards</a>
                </div>
            </div>

            {/* Notification Banner */}
            <div className="bg-gray-100 text-xs py-3 px-6 text-center text-gray-600 border-b border-gray-200">
                Don’t invest unless you’re prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong. <a href="#" className="text-blue-600 hover:underline">Take 2 mins to learn more</a>
            </div>

            {/* Hero Section */}
            <section className="pt-20 pb-0 text-center flex flex-col items-center">
                <div className="max-w-4xl px-6">
                    <h1 className="text-[4rem] leading-[1.1] font-extrabold mb-6 tracking-tight">
                        Coinbase Listings
                    </h1>
                    <p className="text-[#5b616e] text-xl mb-10 leading-snug mx-auto max-w-2xl">
                        At Coinbase, we believe in the power of innovation and are constantly monitoring the crypto landscape for promising projects to support on our platform.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-base shadow-md">
                        Request a review
                    </button>
                </div>

                <div className="mt-16 w-full bg-[#0a0b0d] flex justify-center border-t border-gray-800">
                    <img
                        src="https://images.ctfassets.net/o10es7wu5gm1/8QdTTLmoy8HalgBj9A1oH/b17fa886e9682472ca8a28f2bf028cc2/2f0e9923993a414967d7.svg"
                        alt="Coinbase Listings Graphic"
                        className="w-full max-w-6xl h-auto object-contain px-6 pt-12 pb-16"
                    />
                </div>
            </section>

            {/* Your Asset Available Features */}
            <section className="py-24 px-6 bg-[#f9fafb]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6">Your asset, available on Coinbase</h2>
                        <p className="text-[#5b616e] text-lg mb-12">
                            List on the Exchange, Custody, and all our trading interfaces.
                        </p>

                        <div className="space-y-8">
                            {assetBenefits.map((benefit, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-blue-100 p-1.5 rounded-full flex-shrink-0">
                                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-1">{benefit.title}:</h3>
                                        <p className="text-[#5b616e]">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10"></div>
                        <h3 className="text-2xl font-bold mb-4">Coinbase asset reviews</h3>
                        <p className="text-[#5b616e] mb-6 leading-relaxed">
                            Once an asset meets our business criteria, we may choose to move forward with a due diligence review. If we need additional information in order to complete an initial review or have updates to share, we will reach out to the project team directly.
                        </p>
                        <p className="text-[#5b616e] mb-8 leading-relaxed">
                            If your project has a live token (or is considering launching a token) and feel it’s a strong fit for our platform and customer base, we invite you to share more details with us.
                        </p>
                        <button className="bg-white border-2 border-gray-200 hover:border-gray-300 font-semibold px-8 py-3 rounded-full transition w-full mb-6">
                            Request a review
                        </button>
                        <p className="text-xs text-gray-400 italic text-center">
                            While we are not able to respond to all submissions, we will get in touch with you if we choose to move forward with a review or need more information from your team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Prioritization */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-6 text-center">Coinbase asset review prioritization</h2>
                    <p className="text-[#5b616e] text-lg mb-16 text-center max-w-3xl mx-auto">
                        With thousands of live assets today, we prioritize reviews of assets by aiming to meet consumer demand while supporting a growing industry.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {priorityCriteria.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="h-40 flex items-center justify-center w-full mb-6 bg-[#f9fafb] rounded-[2rem]">
                                    <img src={item.image} alt={item.title} className="h-32 object-contain" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-[#5b616e] leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Listing Process */}
            <section className="py-24 px-6 bg-[#0a0b0d] text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-6">Coinbase listing process</h2>
                    <p className="text-gray-400 mb-16">Coinbase adheres to thorough processes and standards for all asset listings.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {processSteps.map((step, i) => (
                            <div key={i} className="border-t border-white/20 pt-8 relative">
                                <span className="absolute -top-4 left-0 bg-[#0a0b0d] px-2 text-blue-500 font-bold text-lg">0{i + 1}</span>
                                <h3 className="text-xl font-bold mb-3">{step.step}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        ))}
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

            {/* CTA */}
            <section className="py-14 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to apply?</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">Submit your application today and our team will review it within 5–10 business days.</p>
                <a href="https://www.coinbase.com/en-gb/asset-listings" target="_blank" rel="noreferrer"
                    className="inline-block bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm shadow-md">
                    Start your application
                </a>
            </section>

            <Footer />
        </div>
    );
}
