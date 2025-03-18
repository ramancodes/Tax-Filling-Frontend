import React from "react";
import Link from "next/link";
import HeroSectionCarousel from "./heroSectionCarasole";

const HeroSection = () => {
  return (
    <section className="bg-[#1f2c76] text-white py-16">
      <div className="container mx-auto px-15">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Easy, Accurate Tax Filing
            </h2>
            <p className="text-xl mb-6">
              File your taxes online with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-block px-6 py-3 bg-white text-[#1f2c76] font-medium rounded hover:bg-gray-100"
              >
                Start Filing Now
              </Link>
              <Link
                href="#"
                className="inline-block px-6 py-3 border border-white text-white font-medium rounded hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <div className="bg-primary-light h-64 rounded-lg shadow-lg flex items-center justify-center">
              <HeroSectionCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
