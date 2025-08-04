import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ArrowTiltedRightIcon } from "@/assets/icons";
import { pressArticles } from "@/assets/data/press";
import Image from "next/image";

const PressPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/press-bg.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl font-medium leading-[64px] lg:leading-[74px] text-primary mb-6">
              Latest news and media from the Bomba Clan
            </h1>
            <p className="mt-6 text-[24px] leading-[32px] font-normal text-foreground mb-8 max-w-3xl">
              Please write to us at media@bomba.co if you have a media enquiry.
              We&apos;ll do our best to get back to you as soon as possible.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-0 py-3 bg-transparent text-base font-medium text-secondary-foreground border-b border-b-secondary-foreground hover:bg-transparent transition-colors duration-200"
            >
              Get press kit
              <ArrowTiltedRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Press Articles */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {pressArticles.map((article) => (
              <article
                key={article.id}
                className="bg-[#f8f9fe] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-[380px]"
              >
                {/* Header Section with Category, Title, and Date */}
                <div className="p-8 py-4 pb-0 flex-1">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <Image
                      src={article.icon}
                      alt={article.category}
                      width={90}
                      height={90}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base lg:text-[17px] font-medium text-primary mb-4 leading-tight">
                    {article.title}
                  </h3>

                  {/* Date */}
                  <p className="text-[10px] text-foreground mb-6">
                    {article.date}
                  </p>
                </div>

                {/* Image fills remaining space */}
                <div className="flex-3 relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
};

export default PressPage;
