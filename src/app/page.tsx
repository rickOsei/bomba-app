import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
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

      {/* Mission Statement */}
      <section className="py-8 lg:py-12 px-8 bg-white">
        <div>
          {/* <div className="pt-8" /> */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto inline-block ">
              <h2 className="text-3xl font-medium text-left text-primary leading-tight lg:text-4xl lg:text-center">
                We are on a mission to reduce the cost of sending money to
                Africa at an average cost of 1%.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Converter Section */}
      <CurrencyConverter />

      <div className="bg-primary w-[50%] h-[1px] mx-auto mt-14" />

      {/* Features Section */}
      <Features />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.png')",
        }}
      >
        {/* Call to Action Section with Press Page Link */}
        <section className="py-10 pt-20 lg:py-20 bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl leading-[56px] lg:leading-[74px] font-medium text-primary">
            Sign up for free
          </h2>
          <h2 className="text-5xl lg:text-6xl leading-[56px] lg:leading-[74px] font-medium text-primary">
            Join thousands of users
          </h2>
        </section>

        <Footer />
      </div>
    </div>
  );
}
