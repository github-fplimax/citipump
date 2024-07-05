"use client";

import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import React from "react";

function FloatingIcon() {
  return (
    <div
      className="z-40 rounded-full mr-5 mb-2 pr-1 pb-1"
      style={{
        position: "fixed",
        bottom: "20px", // Change this value according to your preference
        right: "20px", // Change this value according to your preference
      }}
    >
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg rounded-l-lg p-2">
        <div className="space-y-4">
          <ul className="text-red-500 hover:text-red-600 cursor-pointer flex flex-row">
            <li>
              <a
                target="_blank"
                href="https://wa.me/6281574747474"
                className="hover:text-black text-red-500 transition-colors"
              >
                <Phone size={32} weight="thin" />
              </a>
            </li>
          </ul>
          <ul className="cursor-pointer flex flex-row">
            <li className="text-red-500 hover:text-red-600">
              <a
                href="https://maps.app.goo.gl/nSLiLjxCAosJrjUH7"
                className="hover:text-black text-red-500 transition-colors"
                target="_blank"
                title="Head Office Citi Pump"
              >
                <MapPin size={32} weight="thin" />
              </a>
            </li>
          </ul>
          <ul className="text-red-500 hover:text-red-600 cursor-pointer flex flex-row">
            <li>
              <a
                href="mailto:marketing@citi-pump.com"
                className="hover:text-black text-red-500 transition-colors"
                target="_blank"
                title="Contact Us via email now!!"
              >
                <EnvelopeSimple size={32} weight="thin" />
              </a>
            </li>
            {/* Email */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FloatingIcon;
