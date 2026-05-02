import { Link } from "react-router-dom";
import {
  CircleDollarSign,
  Smartphone,
  ShieldCheck,
  Briefcase,
  BarChart3,
  TrendingUp,
  Building2,
  CreditCard,
  Network,
} from "lucide-react";
import NavPic from "../../../assets/navigation-upsell.png";

const menuItems = [
  {
    title: "Buy and sell",
    desc: "Buy, sell, and use crypto",
    icon: <CircleDollarSign size={20} />,
    path: "/signup",
  },
  {
    title: "Base App",
    desc: "Post, earn, trade, and chat",
    icon: <Smartphone size={20} />,
    path: "/base-app",
  },
  {
    title: "Coinbase One",
    desc: "Get zero trading fees and more",
    icon: <ShieldCheck size={20} />,
    path: "/coinbase-one",
  },
  {
    title: "Private Client",
    desc: "For trusts, family offices, UHNWIs",
    icon: <Briefcase size={20} />,
    path: "/private-client",
  },
  {
    title: "Onchain",
    desc: "Dive into the world of onchain apps",
    icon: <Network size={20} />,
    path: "/onchain",
  },
  {
    title: "Advanced",
    desc: "Professional-grade trading tools",
    icon: <BarChart3 size={20} />,
    path: "/advanced",
  },
  {
    title: "Earn",
    desc: "Stake your crypto and earn rewards",
    icon: <TrendingUp size={20} />,
    path: "/earn",
  },
  {
    title: "Coinbase Wealth",
    desc: "Institutional-grade services",
    icon: <Building2 size={20} />,
  },
  {
    title: "Credit Card",
    desc: "Earn up to 4% bitcoin back",
    icon: <CreditCard size={20} />,
    path: "/credit-card",
  },
  {
    title: "Debit Card",
    desc: "Spend crypto, get crypto back",
    icon: <CreditCard size={20} />,
    path: "/debit-card",
  },
];

export default function IndividualsMenu() {
  return (
    <div className="absolute top-full left-0 w-screen bg-white border-b border-gray-100 shadow-xl cursor-default animate-in fade-in slide-in-from-top-2 duration-200 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-4 py-10">
        {/* Left Links Grid */}
        <div className="col-span-8 grid grid-cols-2 gap-y-8 gap-x-12">
          {menuItems.map((item, idx) =>
            item.path ? (
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
            ) : (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl p-2 -ml-2 opacity-50 cursor-default"
              >
                <div className="text-gray-400 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Right Promo Card with Hover Background */}
        <div className="col-span-4 flex items-center gap-6 p-8 min-h-40 -mt-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 group cursor-pointer">
          {" "}
          {/* Left side: Image */}
          <div className="w-48 h-48 flex-shrink-0 shadow-sm rounded-2xl overflow-hidden">
            <img
              src={NavPic}
              alt="System Update"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Right side: Text content */}
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-900 mb-1">
              System Update 2025
            </h3>
            <p className="text-sm text-gray-500 mb-3 leading-snug">
              The next chapter of Coinbase. Live on X 12/17.
            </p>
            <span className="text-gray-900 text-sm font-semibold group-hover:text-blue-600 transition-colors">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
