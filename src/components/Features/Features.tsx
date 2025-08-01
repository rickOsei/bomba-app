"use client";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  gradient: string;
}

const Features = () => {
  const features: Feature[] = [
    {
      id: "swap",
      title: "Peer to peer marketplace",
      description:
        "Create and accept offers at your preferred rates. Our P2P marketplace connects you directly with other users for the best exchange rates.",
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-blue-100 rounded-lg"></div>
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      ),
      bgColor: "bg-purple-50",
      gradient: "from-purple-50 to-purple-100",
    },
    {
      id: "express",
      title: "Take the express lane",
      description:
        "Send money instantly using our Express service. Get real-time exchange rates and immediate transfers to your recipients.",
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-green-100 rounded-lg"></div>
          <div className="absolute inset-2 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      ),
      bgColor: "bg-green-50",
      gradient: "from-green-50 to-green-100",
    },
    {
      id: "refer",
      title: "Make money while you refer",
      description:
        "Earn rewards for every successful referral. Share Bomba with friends and family and get paid for each new user who joins.",
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-blue-100 rounded-lg"></div>
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
      ),
      bgColor: "bg-white",
      gradient: "from-white to-gray-50",
    },
    {
      id: "connect",
      title: "Deals from top brands",
      description:
        "Access exclusive deals and discounts from leading brands. Save money on shopping, travel, and everyday purchases.",
      icon: (
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-orange-100 rounded-lg"></div>
          <div className="absolute inset-2 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>
      ),
      bgColor: "bg-orange-50",
      gradient: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 mb-4">
            The Bomba app help our users send & receive money, swap currencies
            across borders and pay bills, safely, conveniently, cheaply and on
            time.
          </p>
          <p className="text-lg text-gray-500">
            We are customer centric and focused on offering services that enable
            you to have your financial needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative overflow-hidden rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${feature.bgColor}`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6">
                  <a
                    href={`#${feature.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block border-t-2 border-dashed border-gray-300 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">
              We are on a mission to reduce the cost of sending money to Africa
              at an average cost of 1%.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
