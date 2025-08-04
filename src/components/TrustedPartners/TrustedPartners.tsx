/* eslint-disable @next/next/no-img-element */
"use client";

import { partners } from "@/assets/data/trusted-partners";
import Image from "next/image";

const TrustedPartners = () => {
  return (
    <section className="py-20 lg:py-56 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8  lg:flex-row gap-16">
        <div className="text-left flex-1">
          <h2 className="text-[64px] leading-[74px] font-medium text-primary mb-8">
            Trusted partners worldwide
          </h2>
          <p className="text-lg text-foreground  mx-auto leading-[26px]">
            We work with leading financial institutions and technology providers
            to deliver secure, reliable, and innovative financial services to
            Africans globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center flex-1">
          {partners.map((partner) => (
            <div key={partner.id} className="relative cursor-pointer group">
              <Image
                src={partner.logo}
                alt={partner.name}
                className="h-auto w-full object-cover brightness-0 transition-all duration-300 filter transform group-hover:-translate-y-1 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-[#6e80a3] mix-blend-screen  group-hover:bg-transparent group-hover:mix-blend-normal pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
