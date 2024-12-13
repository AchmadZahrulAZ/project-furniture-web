import React from 'react';
import WeCreateImage from '../assets/images/WeCreate.png'; // Pastikan jalur benar
import ChecklistIcon from '../assets/icons/Checklist.svg'; // Pastikan jalur benar

const WeCreate: React.FC = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center justify-between bg-white shadow-lg md:space-x-10">
      {/* Kiri: Gambar */}
      <div className="w-full md:w-1/2 flex justify-center order-last md:order-1 mt-4 md:mt-0">
        <img src={WeCreateImage} alt="We Create" className="w-full max-w-sm md:max-w-none h-auto object-cover rounded-lg" />
      </div>

      {/* Kanan: Konten Teks */}
      <div className="w-full md:w-1/2 text-gray-700 mt-8 md:mt-0 order-first md:order-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">We Create Your Home More Aesthetic</h2>
        <p className="text-sm md:text-base mb-6">Furniture power is a software as services for multipurpose business management system.</p>
        {/* Poin-Poin */}
        <div className="space-y-4">
          {/* Poin 1 */}
          <div className="flex items-start">
            <img src={ChecklistIcon} alt="Checklist" className="w-6 h-6 mr-4 mt-1" />
            <div>
              <h3 className="text-base md:text-lg font-semibold">Valuation Services</h3>
              <p className="text-sm text-gray-600">Sometimes features require a short description. This can be a detailed description.</p>
            </div>
          </div>
          {/* Poin 2 */}
          <div className="flex items-start">
            <img src={ChecklistIcon} alt="Checklist" className="w-6 h-6 mr-4 mt-1" />
            <div>
              <h3 className="text-base md:text-lg font-semibold">Development of Furniture Models</h3>
              <p className="text-sm text-gray-600">Sometimes features require a short description. This can be a detailed description.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeCreate;
