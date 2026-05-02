import { Link } from "react-router-dom";

const footerColumns = [
  {
    sections: [
      {
        title: "Company",
        links: [
          { label: "About", to: "/about" },
          { label: "Careers", to: "/careers" },
          { label: "Affiliates", to: "/affiliates" },
          { label: "Blog", to: "/blog" },
          { label: "Press", to: "/press" },
          { label: "Security", to: "/security" },
          { label: "Investors", href: "https://investor.coinbase.com/" },
          { label: "Vendors", to: "/vendors" },
          { label: "Legal & privacy", to: "/legal" },
          { label: "Cookie policy", to: "/legal/cookie" },
          { label: "Cookie preferences", to: "/legal/cookie-preferences" },
          {
            label: "Digital Asset Disclosures",
            to: "/legal/digital-asset-disclosures",
          },
        ],
      },
      {
        title: "Learn",
        links: [
          { label: "Explore", to: "/explore" },
          { label: "Market statistics", to: "/market-stats" },
          { label: "Coinbase Bytes newsletter", to: "/bytes" },
          { label: "Crypto basics", to: "/learn/crypto-basics" },
          { label: "Tips & tutorials", to: "/learn/tips-and-tutorials" },
          { label: "Crypto glossary", to: "/learn/crypto-glossary" },
          { label: "Market updates", to: "/learn/market-updates" },
          {
            label: "What is Bitcoin?",
            to: "/learn/crypto-basics/what-is-bitcoin",
          },
          {
            label: "What is crypto?",
            to: "/learn/crypto-basics/what-is-cryptocurrency",
          },
          {
            label: "What is a blockchain?",
            to: "/learn/crypto-basics/what-is-a-blockchain",
          },
          {
            label: "How to set up a crypto wallet?",
            to: "/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet",
          },
          {
            label: "How to send crypto?",
            to: "/learn/tips-and-tutorials/how-to-send-crypto",
          },
          {
            label: "Taxes",
            to: "/learn/crypto-basics/understanding-crypto-taxes",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Individuals",
        links: [
          { label: "Buy & sell", to: "/" },
          { label: "Earn free crypto", to: "/learning-rewards" },
          { label: "Base App", href: "https://base.app/" },
          { label: "Coinbase One", to: "/one" },
          { label: "Debit Card", to: "/card" },
        ],
      },
      {
        title: "Businesses",
        links: [
          { label: "Asset Listings", to: "/listings" },
          { label: "Coinbase Business", to: "/business" },
          { label: "Payments", to: "/payments" },
          { label: "Commerce", to: "/commerce" },
          { label: "Token Manager", to: "/tokenmanager" },
        ],
      },
      {
        title: "Institutions",
        links: [
          { label: "Prime", to: "/prime" },
          { label: "Staking", to: "/staking" },
          { label: "Exchange", to: "/exchange" },
          { label: "International Exchange", to: "/international-exchange" },
          { label: "Derivatives Exchange", to: "/derivatives" },
          { label: "Verified Pools", to: "/verified-pools" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Developers",
        links: [
          { label: "Developer Platform", to: "/developer-platform" },
          { label: "Base", href: "https://base.org/" },
          {
            label: "Server Wallets",
            to: "/developer-platform/products/wallets",
          },
          {
            label: "Embedded Wallets",
            to: "/developer-platform/products/embeddedwallets",
          },
          {
            label: "Base Accounts (Smart Wallets)",
            to: "/developer-platform/products/smart-wallets",
          },
          {
            label: "Onramp & Offramp",
            to: "/developer-platform/products/onramp",
          },
          { label: "x402", to: "/developer-platform/products/x402" },
          {
            label: "Trade API",
            to: "/developer-platform/products/trade-api",
          },
          { label: "Paymaster", to: "/developer-platform/products/paymaster" },
          {
            label: "OnchainKit",
            href: "https://www.base.org/build/onchainkit",
          },
          { label: "Data API", to: "/developer-platform/products/data-api" },
          {
            label: "Verifications",
            to: "/developer-platform/products/verifications",
          },
          { label: "Node", to: "/developer-platform/products/node" },
          { label: "AgentKit", to: "/developer-platform/products/agentkit" },
          { label: "Staking", to: "/developer-platform/products/staking" },
          { label: "Faucet", to: "/developer-platform/products/faucet" },
          {
            label: "Exchange API",
            to: "/developer-platform/products/exchange-api",
          },
          {
            label: "International Exchange API",
            to: "/developer-platform/products/international-exchange-api",
          },
          { label: "Prime API", to: "/developer-platform/products/prime-api" },
          {
            label: "Derivatives API",
            to: "/developer-platform/products/derivatives-api",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Support",
        links: [
          { label: "Help center", href: "https://help.coinbase.com/" },
          {
            label: "Contact us",
            href: "https://help.coinbase.com/contact-us/",
          },
          {
            label: "Create account",
            href: "https://help.coinbase.com/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account/",
          },
          {
            label: "ID verification",
            href: "https://help.coinbase.com/coinbase/managing-my-account#identity-verification/",
          },
          {
            label: "Account information",
            href: "https://help.coinbase.com/coinbase/managing-my-account/",
          },
          {
            label: "Payment methods",
            href: "https://help.coinbase.com/coinbase/getting-started#add-a-payment-method/",
          },
          {
            label: "Account access",
            href: "https://help.coinbase.com/coinbase/managing-my-account/account-access/",
          },
          {
            label: "Supported crypto",
            href: "https://help.coinbase.com/supported-crypto.html",
          },
          { label: "Status", href: "https://status.coinbase.com/" },
        ],
      },
      {
        title: "Asset prices",
        links: [
          { label: "Bitcoin price", to: "/price/bitcoin" },
          { label: "Ethereum price", to: "/price/ethereum" },
          { label: "Solana price", to: "/price/solana" },
          { label: "XRP price", to: "/price/xrp" },
        ],
      },
      {
        title: "Stock prices",
        links: [
          { label: "NVIDIA price", to: "/stock/nvda" },
          { label: "Apple price", to: "/stock/aapl" },
          { label: "Microsoft price", to: "/stock/msft" },
          { label: "Amazon price", to: "/stock/amzn" },
        ],
      },
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/coinbase",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/coinbase",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/coinbase/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@coinbase",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="footer-site-index"
      className="bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo */}
        <div className="mb-10">
          <svg
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="512" cy="512" r="512" fill="#0052FF" />
            <path
              d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Link grid — 4 columns, each with stacked sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {footerColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-8">
              {column.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            to={link.to}
                            className="text-xs text-blue-600 hover:underline"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-10">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Coinbase</span>
            <span>•</span>
            <Link to="/legal/privacy" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/legal/user_agreement" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
            </svg>
            <span>Global • English</span>
          </div>
        </div>

        {/* Download the App */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            Download the App
          </p>
          <div className="flex gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.coinbase.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a
              href="https://apps.apple.com/app/coinbase-buy-bitcoin-ether/id886427730"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-6 pt-4">
          <p className="text-[10px] leading-relaxed text-gray-400">
            Information provided on this site is for general educational
            purposes only and is not intended to constitute investment or other
            advice on financial products. Such information is not, and should not
            be read as, an offer or recommendation to buy or sell or a
            solicitation of an offer or recommendation to buy or sell any
            particular digital asset or to use any particular investment
            strategy. Coinbase and its affiliates (collectively "Coinbase") makes
            no representations as to the accuracy, completeness, timeliness,
            suitability, or validity of any information on this site and will not
            be liable for any errors, omissions, or delays in this information
            or any losses, injuries, or damages arising from its display or use.
            Unless otherwise noted, all images are the property of Coinbase.
            Coinbase is not registered or licensed with the U.S. Securities and
            Exchange Commission or the U.S. Commodity Futures Trading
            Commission. Links provided to third-party sites are for
            informational purposes. Such sites are not under the control of
            Coinbase, and Coinbase is not responsible for the accuracy of the
            content on such third-party sites.
          </p>
        </div>
      </div>
    </footer>
  );
}
