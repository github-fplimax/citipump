"use client";

import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 roboto-thin">
      <div className="container mx-auto flex px-4 md:px-8 flex-col md:flex-row justify-between items-start md:items-start">
        <div className="flex items-center space-x-6">
          <a href="#">
            <img
              src="/CITI PUMP INDONESIA-border putih.png "
              alt="Logo"
              className="h-36 w-56 justify-center item-start item-center flex"
            />
          </a>
        </div>
        <div className="mb-8 md:mb-0  sm:text-start text-center">
          <h2 className="text-xl sm:ml-7 ml-0 font-bold">Quick Contact</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <MapPin size={24} weight="thin" className="text-red-500" />
              <a
                href="https://maps.app.goo.gl/nSLiLjxCAosJrjUH7"
                className="ml-2 text-white hover:text-red-500 transition-colors"
                target="_blank"
                title="Head Office Citi Pump"
              >
                {/* Jalan Srengseng Raya, Jakarta Barat. */}
                Jalan Srengseng Raya No No.41 A-B, <br /> RT.4/RW.1, Srengseng,{" "}
                <br />
                Kec. Kembangan, Kota Jakarta Barat,
                <br />
                Daerah Khusus Ibukota Jakarta 11630
              </a>
            </li>
            <li className="flex items-center">
              <EnvelopeSimple
                size={24}
                weight="thin"
                className="text-red-500"
              />
              <a
                href="mailto:marketing@citi-pump.com"
                className="ml-2 text-white hover:text-red-500 transition-colors"
                target="_blank"
                title="Contact Us via email now!!"
              >
                marketing@citi-pump.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone size={24} weight="thin" className="text-red-500" />
              <a
                target="_blank"
                href="https://wa.me/6281574747474"
                className="ml-2 text-white hover:text-red-500"
              >
                +62 815-7474-7474
              </a>
            </li>
          </ul>
        </div>
        <div id="location">
          <h2 className="text-xl font-bold">Location</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4968935979446!2d106.75342887499022!3d-6.197983293789729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f717cf0908cb%3A0xd735cf273480d8c4!2sPT.%20CITI%20PUMP%20INDONESIA!5e0!3m2!1sid!2sid!4v1719393294800!5m2!1sid!2sid"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
