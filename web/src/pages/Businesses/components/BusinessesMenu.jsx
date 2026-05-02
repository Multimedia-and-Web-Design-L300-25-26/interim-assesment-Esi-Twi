import { Link } from "react-router-dom";
import { Building2, List, CreditCard, Layers } from "lucide-react";
import NavPic from "../../../assets/onchain_payment_protocol.png";

const menuItems = [
  {
    title: "Business",
    desc: "Crypto trading and payments for startups and SMBs",
    icon: <Building2 size={20} />,
    path: "/business",
  },
  {
    title: "Asset Listings",
    desc: "List your asset on Coinbase",
    icon: <List size={20} />,
    path: "/asset-listings",
  },
  {
    title: "Payments",
    desc: "The stablecoin payments stack for commerce platforms",
    icon: <CreditCard size={20} />,
    path: "/payments",
  },
  {
    title: "Token Manager",
    desc: "The platform for token distributions, vesting, and lockups",
    icon: <Layers size={20} />,
    path: "/token-manager",
  },
];

export default function BusinessesMenu() {
  return (
    <div className="absolute top-full left-0 w-screen bg-white border-b border-gray-100 shadow-xl cursor-default animate-in fade-in slide-in-from-top-2 duration-200 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-4 py-10">
        {/* Left Links Grid */}
        <div className="col-span-8 grid grid-cols-2 gap-y-8 gap-x-12">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-start gap-4 group rounded-xl p-2 -ml-2 hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-400 group-hover:text-blue-600 transition-colors mt-1">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Promo Card */}
        <Link
          to="/payments"
          className="col-span-4 flex items-center gap-6 p-8 min-h-40 -mt-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
        >
          {/* Icon / image */}
          <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-blue-600 flex items-center justify-center shadow-sm">
            <img src={NavPic} alt="Navigation Promo" />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Commerce Payments Protocol
            </h3>
            <p className="text-sm text-gray-500 mb-3 leading-snug">
              A new standard for onchain payments.
            </p>
            <span className="text-gray-900 text-sm font-semibold group-hover:text-blue-600 transition-colors">
              Go to Payments
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
