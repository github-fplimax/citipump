"use client";

import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 roboto-thin">
      <div className="container mx-auto flex px-4 md:px-8 flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex items-center space-x-6 mb-8 md:mb-0">
          <a href="#">
            <img
              src="/CITI PUMP INDONESIA-border putih new.png"
              alt="Logo"
              className="h-36 w-56"
            />
          </a>
        </div>
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <ul className="mt-4 space-y-2">
            <span className="text-lg font-bold text-end">Citipump Office Address</span>
            <li className="flex items-center justify-center sm:justify-start">
              <MapPin size={24} weight="thin" className="text-red-500" />
              <a
                href="https://maps.app.goo.gl/nSLiLjxCAosJrjUH7"
                className="ml-2 text-white text-justify hover:text-red-500 transition-colors"
                target="_blank"
                title="Head Office Citi Pump"
              >
                Jalan Srengseng Raya No No.41 A-B, <br /> RT.4/RW.1, Srengseng,{" "}
                <br />
                Kec. Kembangan, Kota Jakarta Barat, <br />
                Daerah Khusus Ibukota Jakarta 11630
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <EnvelopeSimple
                size={24}
                weight="thin"
                className="text-red-500"
              />
              <a
                href="mailto:marketing@citi-pump.com"
                className="ml-2 text-white text-start mr-20 sm:mr-0 hover:text-red-500 transition-colors"
                target="_blank"
                title="Contact Us via email now!!"
              >
                marketing@citi-pump.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone size={24} weight="thin" className="text-red-500" />
              <a
                target="_blank"
                href="https://wa.me/6281574747474"
                className="ml-2 text-white text-start mr-32 sm:mr-0 hover:text-red-500"
              >
                +62 815-7474-7474
              </a>
            </li>
          </ul>
        </div>
        <div id="location" className="text-center md:text-left">
          <h2 className="text-xl font-bold">Location</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4961743542244!2d106.75356567355395!3d-6.198078960716837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f77305c654ff%3A0x5c50db3133a6daae!2sPT.%20FARRASINDO%20PERKASA%20-%20HEAD%20OFFICE!5e0!3m2!1sen!2sid!4v1720428892624!5m2!1sen!2sid"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center pt-5">
          Copyright {getCurrentYear()} Citi Pump Indonesia.
      </div>
    </footer>
  );
};

export default Footer;
