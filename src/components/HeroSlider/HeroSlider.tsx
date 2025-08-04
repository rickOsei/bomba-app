"use client";

import { useState, useEffect } from "react";
import { slides, newsItems } from "@/assets/data";
import { PhoneImage, PhoneImageAlt } from "@/assets/images";
import Image from "next/image";
import { PlayIcon } from "@/assets/icons";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []); // Remove currentSlide dependency to fix the timer issue

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      // Determine slide direction
      const direction = index > currentSlide ? "right" : "left";
      setSlideDirection(direction);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <>
      <section className="hidden md:flex relative bg-background-secondary min-h-fit flex-col">
        <div className="mx-auto px-4 sm:px-6 lg:px-16 xl:px-16 w-full py-10 min-[1440px]:max-w-[1440px]">
          <div className="flex justify-center items-center">
            <PhoneImage />
          </div>
          <div className="flex flex-col justify-between items-center gap-x-12 sm:pt-6 lg:pt-5 lg:flex-row lg:items-end text-center lg:text-left">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? slideDirection === "right"
                    ? "transform translate-x-full opacity-0"
                    : "transform -translate-x-full opacity-0"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              {slides[currentSlide].title}
            </h1>
            <div
              className={`max-w-xl transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? slideDirection === "right"
                    ? "transform translate-x-full opacity-0"
                    : "transform -translate-x-full opacity-0"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              <p
                className="text-lg md:text-lg text-primary leading-relaxed font-normal mb-0"
                dangerouslySetInnerHTML={{
                  __html: slides[currentSlide].description,
                }}
              />{" "}
              {slides[currentSlide].cta && (
                <p
                  className="text-lg md:text-lg text-primary leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{
                    __html: slides[currentSlide].cta,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {/* Spaced Dash Progress Indicator */}
        <div className="w-full pb-8">
          <div className="flex justify-center items-center space-x-5 h-[2px] bg-foreground/30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-[2px] rounded-full transition-all duration-500 ease-in-out cursor-pointer hover:opacity-80 ${
                  index <= currentSlide
                    ? "bg-secondary-foreground w-[16.7%]"
                    : "bg-foreground/20 w-[16.7%]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-16 xl:px-16 w-full pb-10 min-[1440px]:max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* News Label */}
            <div className="flex flex-col justify-between items-start md:items-center lg:items-start lg:flex-row lg:gap-x-10 ">
              <div className="mb-4 md:mb-0">
                <h3 className="text-sm font-medium text-foreground">
                  News & Release update
                </h3>
              </div>

              {/* News Items */}
              <div className="flex flex-col space-y-2">
                {newsItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="text-sm text-foreground transition-colors duration-200 no-underline decoration-none"
                  >
                    {item.date} —{" "}
                    <span className="text-secondary-foreground">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex items-center text-foreground mt-4 md:mt-0">
              <span className="text-[24px] mr-2">Scroll Down</span>
              <svg
                className="w-4 h-4 animate-bounce text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Smaller Screens */}
      <section className="flex md:hidden relative px-8 bg-background-secondary min-h-fit flex-col">
        <div className="mx-auto w-full py-10">
          <div className="flex justify-start min-[320px]:justify-center items-center">
            <Image
              src={PhoneImageAlt}
              alt="Mobile phone"
              width={200}
              height={200}
            />
          </div>
          <h1 className="font-bold text-[40px] text-primary leading-14 ">
            Multi-currency accounts for Africans
          </h1>
          <p className="font-normal text-[15px] leading-5 text-primary mt-5">
            Transact at home and abroad - create, send, hold, receive money in
            African currencies and foreign currencies while also sending money
            to and from Africa seamlessly
          </p>

          <div className="mt-5 mb-10 flex justify-start items-center gap-2">
            <PlayIcon />
            <p className="text-primary text-[18px] leading-[26px] font-normal">
              See how it works
            </p>
          </div>
          <svg
            className="w-4 h-4 animate-bounce text-secondary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
