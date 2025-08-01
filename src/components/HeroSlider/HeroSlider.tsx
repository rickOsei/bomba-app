"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons/Icons";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  direction: "left" | "right";
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Multi-currency accounts for Africans",
      description:
        "Transact at home and abroad - create, send, hold and receive money in local and foreign currencies. Send money to and from Africa, instantly.",
      image: "/images/slide1.png",
      direction: "right",
    },
    {
      id: 2,
      title: "Choose from several payment methods",
      description:
        "With Bomba, you get to choose how you send and receive money; send at your own rate with 'Swap', send and receive instantly with 'Express', or make free local transfers with 'Withdraw Money'.",
      image: "/images/slide2.png",
      direction: "left",
    },
    {
      id: 3,
      title: "Accept and create offers with Swap",
      description:
        "You can send money internationally at your preferred rate on our Peer-to-peer Marketplace by choosing or accepting an offer. Created offers get accepted within an average time of 30 minutes.",
      image: "/images/slide3.png",
      direction: "right",
    },
    {
      id: 4,
      title: "Review and confirm your transaction",
      description:
        "Review your transaction, ensure that the provided details are correct, then click the send button!",
      image: "/images/slide4.png",
      direction: "left",
    },
    {
      id: 5,
      title: "Make instant transfers with Express",
      description:
        "When you send money using 'Express' - it's sent at Bomba exchange rate and your transaction is completed instantly",
      image: "/images/slide5.png",
      direction: "right",
    },
    {
      id: 6,
      title: "Completed! Fast, easy and secure",
      description:
        "Money on its way! Send money today to your friends, family or make payment to a business.",
      image: "/images/slide6.png",
      direction: "left",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const getSlideDirection = (index: number) => {
    if (index === currentSlide) return "center";
    if (index < currentSlide) return "left";
    return "right";
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get started for free
              </button>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                <span>Watch video</span>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Phone Frame */}
              <div className="relative w-full max-w-sm mx-auto">
                <div className="relative">
                  {/* Phone Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl p-1">
                    <div className="bg-gray-900 rounded-3xl p-2">
                      {/* Screen */}
                      <div className="bg-gray-900 rounded-2xl overflow-hidden relative">
                        {/* Slide Content */}
                        <div className="relative h-96 w-full">
                          {slides.map((slide, index) => (
                            <div
                              key={slide.id}
                              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                index === currentSlide
                                  ? "opacity-100 translate-x-0"
                                  : index < currentSlide
                                  ? "opacity-0 -translate-x-full"
                                  : "opacity-0 translate-x-full"
                              }`}
                            >
                              <div className="h-full w-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                <div className="text-center text-white p-6">
                                  <div className="text-2xl font-bold mb-4">
                                    {slide.title}
                                  </div>
                                  <div className="text-sm opacity-90">
                                    {slide.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              className="w-5 h-5 animate-bounce"
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
  );
};

export default HeroSlider;
