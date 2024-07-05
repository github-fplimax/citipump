"use client";

import { CaretDown, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { servicesMobile } from "../index";

const servicesStationery = [
  {
    image:
      "/construction-workers-wearing-safety-harness-installing-scaffolding-high-level-Recovered-Recovered-Recovered.png",
    title: "HBT 50",
    maxDeliveryVolume: "50 m³",
    maxDeliveryHeight: "150 Meter",
    maxDeliveryPressure: "13 Mpa",
    maxDeliveryDistance: "400 Meter",
    distributionValveType: "S tube valve",
    concreteCylinderSpecification: "⌀ 180X1200 mm",
    mainOilCylinderSpecification: "⌀ 100 / ⌀ 70X1200 mm",
    oilTank: "300 L",
    hopperCapacity: "600 L",
    feedingHeight: "1400 mm",
    outputOpeningDiameter: "⌀ 125",
    innerDiaOfConcreteDeliveryPipe: "⌀ 125",
    weight: "4 Ton",
  },
  {
    image: "/industrial-cranes-construction-plant-Recovered-Recovered.png",
    title: "HBT 80",
    maxDeliveryVolume: "50 m³",
    maxDeliveryHeight: "150 Meter",
    maxDeliveryPressure: "13 Mpa",
    maxDeliveryDistance: "400 Meter",
    distributionValveType: "S tube valve",
    concreteCylinderSpecification: "⌀ 180X1200 mm",
    mainOilCylinderSpecification: "⌀ 100 / ⌀ 70X1200 mm",
    oilTank: "300 L",
    hopperCapacity: "600 L",
    feedingHeight: "1400 mm",
    outputOpeningDiameter: "⌀ 125",
    innerDiaOfConcreteDeliveryPipe: "⌀ 125",
    weight: "4 Ton",
  },
  {
    image:
      "/shot-of-soil-mounds-and-stones-for-the-constructi-2023-11-27-05-24-06-utc-Recovered-Recovered-Recovered.png",
    title: "HBT 100",
    maxDeliveryVolume: "50 m³",
    maxDeliveryHeight: "150 Meter",
    maxDeliveryPressure: "13 Mpa",
    maxDeliveryDistance: "400 Meter",
    distributionValveType: "S tube valve",
    concreteCylinderSpecification: "⌀ 180X1200 mm",
    mainOilCylinderSpecification: "⌀ 100 / ⌀ 70X1200 mm",
    oilTank: "300 L",
    hopperCapacity: "600 L",
    feedingHeight: "1400 mm",
    outputOpeningDiameter: "⌀ 125",
    innerDiaOfConcreteDeliveryPipe: "⌀ 125",
    weight: "4 Ton",
  },
];

const ProductSection: React.FC = () => {
  const [showDescription, setShowDescription] = useState(
    Array(servicesMobile.length).fill(false)
  );

  const toggleDescription = (index) => {
    const newShowDescription = [...showDescription];
    newShowDescription[index] = !newShowDescription[index];
    setShowDescription(newShowDescription);
  };
  return (
    <section className="py-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-red-500">
          Product & Service
        </h1>
        <p className="mt-4 text-xl text-gray-500 sm:mx-auto mx-2">
          Specializing in Concrete Pump, We Rent and Sell Concrete Pump
          Equipment and Spareparts.
        </p>
      </div>

      <div
        style={{ scrollMarginTop: "100px" }}
        id="mobile"
        className="text-3xl font-extrabold tracking-tight text-center mt-4 text-gray-900 cursor-pointer flex items-center justify-center"
      >
        <span className="text-black hover:text-red-500 transition-all">
          Mobile Concrete Pump
        </span>
      </div>

      <div className="mt-10 flex justify-center container mx-auto px-4 text-gray-700 hover:text-white transition-all">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesMobile.map((service, index) => (
  <div
    key={index}
    className="p-4 sm:p-6 rounded-lg shadow-lg text-center transition-all bg-gray-200 hover:bg-red-500 text-black hover:text-white"
  >
    <div className="h-40 w-full mx-auto mb-4 overflow-hidden">
      <img
        src={service.productImage}
        alt={service.productName}
        className="h-full sm:w-full w-52 object-cover"
      />
    </div>
    <h1 className="text-xl text-gray-800 font-bold mt-4">
      {service.productName}
    </h1>
    <h2 className="text-xl font-bold">{service.ToolsType}</h2>
    <button
      onClick={() => toggleDescription(index)}
    >
      {showDescription[index] ? (
        <X size={32} weight="thin" />
      ) : (
        <CaretDown size={32} weight="thin" />
      )}
    </button>
    {showDescription[index] && (
      <div className="mt-4">
        <p><strong>Product Name:</strong> {service.productName}</p>
        <p><strong>Tools Type:</strong> {service.ToolsType}</p>
        <p><strong>Boom Arm Length:</strong> {service.BoomArmLength}</p>
        {service.NoOfArms && <p><strong>No Of Arms:</strong> {service.NoOfArms}</p>}
        <p><strong>Car Length:</strong> {service.CarLength}</p>
        <p><strong>Car Height:</strong> {service.CarHeight}</p>
        <p><strong>Car Width:</strong> {service.CarWidth}</p>
        <p><strong>Car Weight:</strong> {service.CarWeight}</p>
        <p><strong>Jacking:</strong> {service.Jacking}</p>
      </div>
    )}
  </div>
))}


        </div>
      </div>

      <div
        id="stationary"
        className="text-3xl font-extrabold tracking-tight text-center mt-4 text-gray-900 cursor-pointer flex items-center justify-center sm:text-left"
        style={{ scrollMarginTop: "100px" }}
      >
        <span className="text-black hover:text-red-500 transition-all pt-5 text-2xl sm:text-3xl">
          Stationary Concrete Pump
        </span>
      </div>

      <div className="mt-6 items-center justify-center flex sm:mt-10 container mx-auto text-gray-700 hover:text-white transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesStationery.map((service, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-lg shadow-lg text-center transition-all bg-gray-200 hover:bg-red-500 text-black hover:text-white ${
                index === servicesStationery.length - 1
                  ? "sm:col-span-2 col-span-1 mx-auto"
                  : ""
              }`}
            >
              <div className="h-40 w-full mx-auto mb-4 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold">{service.title}</h1>
              <button onClick={() => toggleDescription(index)}>
                {showDescription[index] ? (
                  <X size={32} weight="thin" />
                ) : (
                  <CaretDown size={32} weight="thin" />
                )}
              </button>
              {showDescription[index] && (
                <div className="mt-4">
                  <p>Max Delivery Volume: {service.maxDeliveryVolume}</p>
                  <p>Max Delivery Height: {service.maxDeliveryHeight}</p>
                  <p>Max Delivery Pressure: {service.maxDeliveryPressure}</p>
                  <p>Max Delivery Distance: {service.maxDeliveryDistance}</p>
                  <p>
                    Distribution Valve Type: {service.distributionValveType}
                  </p>
                  <p>
                    Concrete Cylinder Specification:{" "}
                    {service.concreteCylinderSpecification}
                  </p>
                  <p>
                    Main Oil Cylinder Specification:{" "}
                    {service.mainOilCylinderSpecification}
                  </p>
                  <p>Oil Tank: {service.oilTank}</p>
                  <p>Hopper Capacity: {service.hopperCapacity}</p>
                  <p>Feeding Height: {service.feedingHeight}</p>
                  <p>
                    Output Opening Diameter: {service.outputOpeningDiameter}
                  </p>
                  <p>
                    Inner Diameter of Concrete Delivery Pipe:{" "}
                    {service.innerDiaOfConcreteDeliveryPipe}
                  </p>
                  <p>Weight: {service.weight}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
