import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import NewsSection from "@/components/NewsSection/NewsSection";
import CurrencyConverter from "@/components/CurrencyConverter/CurrencyConverter";
import Features from "@/components/Features/Features";
import TrustedPartners from "@/components/TrustedPartners/TrustedPartners";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* News Section */}
      <NewsSection />

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block border-t-2 border-dashed border-gray-300 pt-8">
              <h2 className="text-3xl font-bold text-gray-900">
                We are on a mission to reduce the cost of sending money to
                Africa at an average cost of 1%.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Converter Section */}
      <CurrencyConverter />

      {/* Features Section */}
      <Features />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Call to Action Section with Press Page Link */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sign up for free
          </h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of users</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              Get started today
            </a>
            <a
              href="/press"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold text-lg"
            >
              View Press Coverage
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
