import './Testimonials.scss';
import TestimonialCard from './TestimonialCard';
import { useTestimonialStore } from '../stores/useTestimonialStore';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonials = useTestimonialStore((state) => state.testimonials);
  const fetchAllTestimonials = useTestimonialStore((state) => state.fetchAllTestimonials);

  const [cardsPerView, setCardsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const sliderRef = useRef(null);

  const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width < 640) setCardsPerView(1);
    else if (width < 1024) setCardsPerView(2);
    else if (width < 1440) setCardsPerView(3);
    else setCardsPerView(4);
  };

  useEffect(() => {
    fetchAllTestimonials();
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [fetchAllTestimonials]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = direction === 'forward' ? prev + 1 : prev - 1;

      // Hit end → reverse
      if (next >= maxIndex) {
        setDirection('backward');
        return maxIndex;
      }

      // Hit start → reverse
      if (next <= 0) {
        setDirection('forward');
        return 0;
      }

      return next;
    });
  };

  /* const manualPrev = () => {
    setDirection('backward');
    nextSlide();
  };

  const manualNext = () => {
    setDirection('forward');
    nextSlide();
  }; */

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transition = 'transform 0.6s ease';
    sliderRef.current.style.transform = `translateX(-${(currentIndex * 100) / cardsPerView}%)`;
  }, [currentIndex, cardsPerView]);

  return (
    <div>
      <h2 className='text-center text-primary my-5 text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl justify-self-center'>Here's what our clients have to say</h2>
      <div className="slider-container relative overflow-hidden max-w-[100vw] md:max-w-[90vw] lg:max-w-[80vw] mx-auto py-10">
        <div ref={sliderRef} className="slider-track flex w-[100%]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-slide px-2 min-w-[25%] justify-items-center"
              style={{ flex: `0 0 ${100 / cardsPerView}%`, maxWidth: `${100 / cardsPerView}%`, }}
            >
              <TestimonialCard
                title={testimonial.clientName}
                image={testimonial.clientImage || 'https://via.placeholder.com/300'}
                description={testimonial.message}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="icons absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <div className="icon cursor-pointer text-2xl" onClick={manualPrev}>
          <FaRegArrowAltCircleLeft />
        </div>
        <div className="icon cursor-pointer text-2xl" onClick={manualNext}>
          <FaRegArrowAltCircleRight />
        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
