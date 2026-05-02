import { useState } from "react";
import { Link } from "react-router-dom";
import IndividualsMenu from "./IndividualsMenu";

const navLinks = [
  { label: "Cryptocurrencies", to: "/cryptocurrencies" },
  { label: "Individuals", hasDropdown: true },
  { label: "Businesses", hasDropdown: true },
  { label: "Institutions", to: "/institutions" },
  { label: "Developers", to: "/developers" },
  { label: "Company", to: "/company" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [individualsHovered, setIndividualsHovered] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-gray-100"
      onMouseLeave={() => setIndividualsHovered(false)}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
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
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 ml-8">
          {navLinks.map(({ label, to, hasDropdown }) => (
            <div
              key={label}
              className="flex items-center"
              onMouseEnter={() => hasDropdown && setIndividualsHovered(true)}
            >
              {hasDropdown ? (
                <div className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
                  {label}
                </div>
              ) : (
                <Link
                  to={to}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Search */}
          <button
            className="hidden sm:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 transition"
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Globe */}
          <button
            className="hidden sm:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 transition"
            aria-label="Language"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
            </svg>
          </button>

          <Link
            to="/signin"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className="inline-flex px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Sign up
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {navLinks.map(({ label, to, hasDropdown }) => (
            <Link
              key={label}
              to={hasDropdown ? "#" : to}
              className="block py-3 text-base font-medium text-gray-800 border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link
              to="/signin"
              className="flex-1 text-center py-2 text-sm font-semibold bg-gray-100 rounded-full"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="flex-1 text-center py-2 text-sm font-semibold text-white bg-blue-600 rounded-full"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}

      {/* Individuals dropdown menu — overlays page content */}
      {individualsHovered && (
        <div className="absolute top-full left-0 w-full z-50">
          <IndividualsMenu />
        </div>
      )}
    </header>
  );
}
