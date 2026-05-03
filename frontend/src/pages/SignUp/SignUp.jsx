import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [showCookie, setShowCookie] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // ✅ SUCCESS → redirect to login
      navigate("/signin");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-[85px] bg-[#0a0b0d] text-white font-sans relative">
      {/* Coinbase Logo */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <svg
            width="28"
            height="28"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>

      {/* Centered Form */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[400px]">
          <p className="mb-5 text-gray-400">Demo app - do not use your real password</p>

          <h1 className="text-[28px] font-semibold mb-2 text-white">
            Create your account
          </h1>
          <p className="text-[15px] text-gray-400 mb-8 leading-relaxed">
            Access all that Coinbase has to offer with a single account.
          </p>

          {/* NAME */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent"
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}


          {/* Continue Button */}
          <button
            id="signup-continue-btn"
            className="w-full py-3.5 bg-[#1a3a5c] hover:bg-[#1f4570] text-white font-semibold rounded-full transition-colors text-[15px] cursor-pointer mb-6" disabled={loading} onClick={handleRegister}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {/* OR Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Or
            </span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            {/* Google */}
            <button
              id="signup-google-btn"
              className="w-full flex items-center justify-center gap-3 py-2.5 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800/50 transition-colors text-[15px] font-medium cursor-pointer text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.69 5.84 14.09H2.18V16.94C3.99 20.53 7.7 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.06H2.18C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.94L5.84 14.09Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.06L5.84 9.91C6.71 7.31 9.14 5.38 12 5.38Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            {/* Apple */}
            <button
              id="signup-apple-btn"
              className="w-full flex items-center justify-center gap-3 py-2.5 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800/50 transition-colors text-[15px] font-medium cursor-pointer text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Sign in link */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0a0b0d] border-t border-gray-800 px-6 py-4 flex items-center justify-between z-50">
          <p className="text-sm text-gray-400 max-w-3xl">
            We use strictly necessary cookies to enable essential functions, such
            as security and authentication. For more information, see our{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Cookie Policy
            </a>
            .
          </p>
          <button
            id="signup-dismiss-cookie"
            onClick={() => setShowCookie(false)}
            className="ml-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
