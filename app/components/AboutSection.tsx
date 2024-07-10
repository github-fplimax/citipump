import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-200">
      <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
        <div className="relative w-full h-full">
          <img
            src="/Concrete Pump&Kodok.png"
            alt="About Us"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-12">
        <h1 id="about" className="text-3xl font-bold mb-6 underline underline-offset-4" style={{ scrollMargin: '100px' }}>
          Citi Pump Indonesia
        </h1>
        <p className="text-gray-700 mb-6">
          CITI PUMP is a Rental and Sales Services Company for Heavy Concrete
          Building Construction Equipment which was founded in Jakarta by
          Readymix Concrete practitioners who are experienced in the practice of
          casting buildings, apartments and roads. As a member of the Farrasindo
          Group, CITI PUMP focuses on providing heavy concrete equipment
          solutions for urban areas, where development needs are high but are
          not balanced with adequate road access. Our first product, the "Mini
          Boom Concrete Pump", makes casting projects in alleys easier with its
          slim design, covering a width of 2m, making it suitable for use in
          areas with limited access. Our services prioritize product and service
          quality, speed and timeliness for customer satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
