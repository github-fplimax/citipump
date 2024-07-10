import React from "react";

interface EmployeeProps {
  name: string;
  contact: string;
  imageUrl: string;
}

const EmployeeCard: React.FC<EmployeeProps> = ({ name, contact, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <a href={contact} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={name}
          className="sm:w-32 sm:h-32 w-24 h-24 object-cover rounded-full mb-4 sm:mb-2 cursor-pointer"
        />
      </a>
      <h3 className="sm:text-lg text-sm font-semibold">{name}</h3>

      <a
        href={contact}
        target="_blank"
        title="Silahkan chat WA Saya"
        className="sm:text-sm text-xs text-center text-blue-500"
      >
        Contact Me
      </a>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="container mx-auto py-6 bg-gray-200"
      style={{ scrollMargin: "100px" }}
    >
      <h2 className="text-2xl font-bold text-center mb-8 capitalize">
        connect with our sales
      </h2>
      {/* <p className="text-center mb-8">Dengan dukungan penuh dari jajaran manajemen dan staff kami.</p> */}
      <div className="flex justify-center space-x-8">
        <EmployeeCard
          name="Soleh Hasbi"
          contact="https://wa.me/62812345678"
          imageUrl="/pak soleh.png"
        />
        <EmployeeCard
          name="Fitria Anita S."
          contact="https://wa.me/62812345678"
          imageUrl="/ibu fitri.png"
        />
        <EmployeeCard
          name="Evitha A."
          contact="https://wa.me/6281381796119"
          imageUrl="/bu evitha.png"
        />
      </div>
    </section>
  );
};

export default ContactSection;
