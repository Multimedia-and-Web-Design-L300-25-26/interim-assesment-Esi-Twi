import usdcImg from "../../../assets/usdc.png";
import replaceBankImg from "../../../assets/Replace_Bank.png";
import investInCryptoImg from "../../../assets/investInCrypto.png";

const cards = [
  {
    image: usdcImg,
    title: "USDC: The digital dollar for the global crypto economy",
    description:
      "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...",
  },
  {
    image: replaceBankImg,
    title: "Can crypto really replace your bank account?",
    description:
      'If you\'re a big enough fan of crypto, you\'ve probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...',
  },
  {
    image: investInCryptoImg,
    title: "When is the best time to invest in crypto?",
    description:
      "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...",
  },
];

export default function LearnCards() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      {/* Header area */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-md">
          New to crypto?
          <br />
          Learn some
          <br />
          crypto basics
        </h2>

        <div className="flex flex-col items-start gap-4 max-w-md">
          <p className="text-gray-500 text-base leading-relaxed">
            Beginner guides, practical tips, and market updates for first-timers,
            experienced investors, and everyone in between
          </p>
          <a
            href="#"
            className="inline-block bg-gray-900 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col cursor-pointer group"
          >
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
