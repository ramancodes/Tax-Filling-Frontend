import React, { useState, useEffect } from 'react';

const HeroSectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample carousel images - replace with your actual images
  const carouselImages = [
    {
      src: "https://www.incometax.gov.in/iec/foportal/sites/default/files/styles/home_slider/public/2024-10/Settle%20Tax%20Dispute_Banner_01%20%281%29.jpg?itok=Vms7GEIP",
      alt: "Hero Image 1",
    },
    {
      src: "https://www.incometax.gov.in/iec/foportal/sites/default/files/styles/home_slider/public/2024-07/Online%20Scams%202.jpeg?itok=o0DYL_GK",
      alt: "Hero Image 2",
    },
    {
      src: "https://www.incometax.gov.in/iec/foportal/sites/default/files/styles/home_slider/public/2025-01/Bank%20validation_Banner_Jan25.png?itok=N6Sfsr2U",
      alt: "Hero Image 3",
    },
    {
      src: "https://www.incometax.gov.in/iec/foportal/sites/default/files/styles/home_slider/public/2025-01/Updated%20ITR%203_755x305px%20V3_0.png?itok=0MGs0GFY",
      alt: "Hero Image 3",
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-70 overflow-hidden">
      {/* Carousel slides */}
      <div className="relative h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border-3 cursor-pointer border-white focus:outline-none ${
              index === currentSlide ? 'bg-gray-700' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSectionCarousel;