import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StocksSection from "./components/StocksSection";
import DerivativesSection from "./components/DerivativesSection";
import ExploreTokens from "./components/ExploreTokens";
import PredictionMarkets from "./components/PredictionMarkets";
import AdvancedTrade from "./components/AdvancedTrade";
import CoinbaseOne from "./components/CoinbaseOne";
import BaseApp from "./components/BaseApp";
import Prime from "./components/Prime";
import LearnCards from "./components/LearnCards";
import CtaSection from "./components/CtaSection";
import Disclaimers from "./components/Disclaimers";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <StocksSection />
        <DerivativesSection />
        <ExploreTokens />
        <PredictionMarkets />
        <AdvancedTrade />
        <CoinbaseOne />
        <BaseApp />
        <Prime />
        <LearnCards />
        <CtaSection />
        <Disclaimers />
      </main>
      <Footer />
    </div>
  );
}
