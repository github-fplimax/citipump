"use client";

import React, { useState } from "react";
import { X, CaretDoubleDown } from "@phosphor-icons/react";
import { testimonials } from "..";


const TestimonialSection: React.FC = () => {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const handleReadMore = () => {
    setShowAllTestimonials(!showAllTestimonials);
  };

  return (
    <div className="py-12 flex justify-center">
      <div className="max-w-4xl w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Have To Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials
            .slice(0, showAllTestimonials ? testimonials.length : 3)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full w-28 h-28 mb-4"
                />
                <h3 className="text-lg font-semibold text-center">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 italic text-center my-2">{testimonial.text}</p>
                <p className="text-gray-700 text-sm text-center">{testimonial.projectLocation}</p>
              </div>
            ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleReadMore}
            className="px-4 py-2 text-red-500 hover:text-black transition-all"
          >
            {showAllTestimonials ? (
              <X size={40} weight="thin" />
            ) : (
              <CaretDoubleDown
                size={40}
                weight="thin"
                className="animate-bounce"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
