export default function BaseApp() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-gray-700 border border-gray-200 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 1024 1024" fill="none">
              <circle cx="512" cy="512" r="512" fill="#0052FF" />
              <path
                d="M512.147 692C412.697 692 332.147 611.45 332.147 512C332.147 412.55 412.697 332 512.147 332C601.247 332 675.547 396.95 690.047 481H854.047C838.347 311.1 694.497 180 512.147 180C328.897 180 180.147 328.75 180.147 512C180.147 695.25 328.897 844 512.147 844C694.497 844 838.347 712.9 854.047 543H690.047C675.547 627.05 601.247 692 512.147 692Z"
                fill="white"
              />
            </svg>
            BASE APP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tighter">
            Countless ways to earn crypto with the Base App.
          </h2>
          <p className="mt-4 text-gray-600">
            An everything app to trade, create, discover, and chat, all in one
            place.
          </p>
          <a
            href="https://join.base.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition"
          >
            Learn more
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/o10es7wu5gm1/5bELGzAuqD4Kh1UhKOOuut/c1f4c17cc78ce3505ec04b0eb0522895/CB_LOLP__1_.png?fm=webp&w=1200&h=960&q=75"
            alt="Base App screen"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
