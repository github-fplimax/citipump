"use client";

import React, { useState } from "react";
import { X, CaretDoubleDown } from "@phosphor-icons/react";

const testimonials = [
  {
    id: 1,
    name: "Bapak Tono (Project Contractor)",
    image: "/Bapak Tono.png",
    text: '"Pompa Betonnya bagus dan secara servis memuaskan. Dan pastinya akan pakai pompa dari Citipump lagi"',
  },
  {
    id: 2,
    name: "Bapak Asep (Project Contractor)",
    image: "/Bapak Asep.png",
    text: '"Kualitas dan harganya sangat baik dibanding kompetitor yang lain."',
  },
  {
    id: 3,
    name: "Ibu Anita (Project Owner)",
    image: "/Ibu Anita.png",
    text: '"Saya tau Citipump dari Tokopedia dan reviewnya bagus-bagus. Yang jelas puas banget, ini orderan saya yang kedua dan yang pertama tuh hasilnya bagus banget"',
  },
  {
    id: 4,
    name: "Bapak Hairuddin (Project Owner)",
    image: "/Bapak Hairuddin.png",
    text: '"Timnya tangguh dan mesinnya semua lengkap, kerjasama dan komunikasi yang terjalin sangat baik sehingga mempermudah proyek untuk selesai."',
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials
            .slice(0, showAllTestimonials ? testimonials.length : 2)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full w-24 h-24 mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 text-center">{testimonial.text}</p>
              </div>
            ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleReadMore}
            className="text-gray-700 hover:text-gray-900"
          >
            {showAllTestimonials ? (
              <X size={32} weight="thin" />
            ) : (
              <CaretDoubleDown
                size={32}
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
