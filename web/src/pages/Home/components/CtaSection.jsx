import { useState } from "react";

export default function CtaSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text + form */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tighter">
            Take control of your money.
          </h2>
          <p className="mt-4 text-gray-600">
            Start your portfolio today and{" "}
            <strong>get up to $2,000 in crypto¹→</strong>
          </p>

          <form
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="satoshi@nakamoto.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition whitespace-nowrap"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Crypto icons circle */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/3Ib1lnukt8MvV4bDjH2jm7/00bd55a880ce264f3b77253b837760b2/image.png?fm=webp&h=3200&q=75"
            alt="Crypto icons"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
