"use client";

import { useState } from "react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  logoHover: string;
  category: string;
}

const TrustedPartners = () => {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const partners: Partner[] = [
    {
      id: "thunes",
      name: "Thunes",
      logo: "/images/partners/thunes-gray.png",
      logoHover: "/images/partners/thunes-color.png",
      category: "Payment Infrastructure",
    },
    {
      id: "truelayer",
      name: "TrueLayer",
      logo: "/images/partners/truelayer-gray.png",
      logoHover: "/images/partners/truelayer-color.png",
      category: "Open Banking",
    },
    {
      id: "railsr",
      name: "Railsr",
      logo: "/images/partners/railsr-gray.png",
      logoHover: "/images/partners/railsr-color.png",
      category: "Banking as a Service",
    },
    {
      id: "access",
      name: "Access Bank",
      logo: "/images/partners/access-gray.png",
      logoHover: "/images/partners/access-color.png",
      category: "Banking",
    },
    {
      id: "trunarrative",
      name: "Trunarrative",
      logo: "/images/partners/trunarrative-gray.png",
      logoHover: "/images/partners/trunarrative-color.png",
      category: "Identity Verification",
    },
    {
      id: "paga",
      name: "Paga",
      logo: "/images/partners/paga-gray.png",
      logoHover: "/images/partners/paga-color.png",
      category: "Digital Payments",
    },
    {
      id: "solid",
      name: "Solid",
      logo: "/images/partners/solid-gray.png",
      logoHover: "/images/partners/solid-color.png",
      category: "Banking Infrastructure",
    },
    {
      id: "identitypass",
      name: "IdentityPass",
      logo: "/images/partners/identitypass-gray.png",
      logoHover: "/images/partners/identitypass-color.png",
      category: "Identity Verification",
    },
    {
      id: "evolve",
      name: "Evolve Bank & Trust",
      logo: "/images/partners/evolve-gray.png",
      logoHover: "/images/partners/evolve-color.png",
      category: "Banking",
    },
    {
      id: "stitch",
      name: "Stitch",
      logo: "/images/partners/stitch-gray.png",
      logoHover: "/images/partners/stitch-color.png",
      category: "Payment Infrastructure",
    },
    {
      id: "vfd",
      name: "VFD Microfinance Bank",
      logo: "/images/partners/vfd-gray.png",
      logoHover: "/images/partners/vfd-color.png",
      category: "Microfinance",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted partners worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading financial institutions and technology providers
            to deliver secure, reliable, and innovative financial services to
            Africans globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative"
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {/* Partner Logo */}
                <div className="relative h-16 flex items-center justify-center mb-4">
                  <img
                    src={
                      hoveredPartner === partner.id
                        ? partner.logoHover
                        : partner.logo
                    }
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.parentElement?.querySelector(
                        ".fallback"
                      ) as HTMLElement;
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  {/* Fallback text logo */}
                  <div
                    className="fallback hidden text-center font-bold text-gray-400 text-sm"
                    style={{ display: "none" }}
                  >
                    {partner.name}
                  </div>
                </div>

                {/* Partner Name */}
                <h3 className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-200">
                  {partner.name}
                </h3>

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {partner.category}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Partners Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 opacity-60">
            <div className="text-sm text-gray-500">Also trusted by:</div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-medium">Stripe</span>
              <span className="text-gray-400 font-medium">Atlassian</span>
              <span className="text-gray-400 font-medium">Radar</span>
              <span className="text-gray-400 font-medium">Finomative</span>
              <span className="text-gray-400 font-medium">Cogo</span>
              <span className="text-gray-400 font-medium">Paystack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
