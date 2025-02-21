import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Link, useNavigate } from 'react-router-dom';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Premium Quality Products",
      description: "Discover our handpicked selection of top-tier products",
      ctaText: "Shop Now",
      ctaLink: "/shop",
      image: "/images/hero/hero1.jpg",
      bgColor: "bg-gradient-to-r from-blue-600 to-indigo-700",
    },
    {
      id: 2,
      title: "New Collection Available",
      description: "Be the first to explore our latest seasonal releases",
      ctaText: "View Collection",
      ctaLink: "/shop",
      image: "/images/hero/hero2.jpg",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-600",
    },
    {
      id: 3,
      title: "Limited Time Offers",
      description: "Special discounts on selected items for a limited time",
      ctaText: "See Offers",
      ctaLink: "/promotions",
      image: "/images/hero/hero3.jpg",
      bgColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const goToSlide = (index : number) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background with gradient overlay */}
            <div className={`absolute inset-0 ${slide.bgColor} opacity-80`}></div>
            
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-6 z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <Link
                  to={slide.ctaLink}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 rounded-full shadow-md transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 rounded-full shadow-md transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <NavigationMenu.Root className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <NavigationMenu.List className='flex gap-2'>
          {slides.map((_, index) => (
            <NavigationMenu.Item key={index}>
              <NavigationMenu.Trigger
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default HeroCarousel;