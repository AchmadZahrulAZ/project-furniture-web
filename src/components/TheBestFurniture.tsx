import React from 'react';
import TheBestFurnitureImage from '../assets/images/TheBestFurniture.png'; // Pastikan jalur benar

const TheBestFurniture: React.FC = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center justify-between bg-white shadow-lg">
      {/* Kiri: Konten Teks */}
      <div className="w-full md:w-1/2 text-gray-700 md:pr-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          The Best Furniture Manufacturer Of Your Choice
        </h2>
        <p className="text-sm md:text-base">
          Furniture power is a software as services for multipurpose business
          management system, especially for them who are running two or more
          businesses. Explore the future with Furniture power as a software as
          services.
        </p>
      </div>

      {/* Kanan: Gambar */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={TheBestFurnitureImage}
          alt="The Best Furniture"
          className="w-[554px] h-[399px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default TheBestFurniture;
