"use client";

import { features } from "@/assets/data";
import { ArrowRightIcon, ComingSoonIcon } from "@/assets/icons";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-18 max-w-4xl mx-auto">
          <p className="text-[40px] text-primary font-medium mb-4 leading-tight">
            The Bomba app help our users send & receive money, swap currencies
            across borders and pay bills, safely, conveniently, cheaply and on
            time.
          </p>
          <p className="text-lg text-foreground font-normal">
            We are customer centric and focused on offering services that enable
            you to have your financial needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                height: feature?.heightIncrease ? "800px" : "700px",
                marginTop: feature?.marginReverse ? "-100px" : "0px",
                backgroundColor: feature?.bgColor,
              }}
              className={`relative mt-0 overflow-hidden rounded-2xl px-12 py-24  shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 feature-card`}
            >
              {feature.comingSoon && (
                <div className="absolute top-4 left-12">
                  <ComingSoonIcon />
                </div>
              )}
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-normal text-foreground mb-2">
                  {feature.header}
                </h3>
                {/* Title */}
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-foreground text-lg font-normal leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 p-4 pl-0 border-b-2 border-secondary-foreground w-fit cursor-pointer">
                  <p className="text-secondary-foreground text-lg font-medium">
                    {feature.button}
                  </p>
                  <ArrowRightIcon />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="w-full h-64" />
              <div className="absolute bottom-0 right-0 w-[70%] h-[400px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
