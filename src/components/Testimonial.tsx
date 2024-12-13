import React from 'react';
import ArrowLeft from '../assets/icons/ArrowLeft.svg'; // Pastikan jalur sesuai
import ArrowRight from '../assets/icons/ArrowRight.svg';
import TestimonialImage from '../assets/images/TestimonialDummy.png'; // Gambar dummy untuk bagian kanan

const Testimonial: React.FC = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Bagian Kiri */}
      <div className="w-full md:w-1/2">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What People Are Saying About Us
        </h2>

        {/* Testimonial */}
        <div className="flex items-start mb-6">
          {/* Foto */}
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />

          {/* Informasi */}
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-800">Josh Smith</h3>
            <p className="text-sm text-gray-500">Manager of The New York Times</p>
          </div>
        </div>

        {/* Kalimat Testimonial */}
        <p className="text-gray-700 text-lg italic mb-6">
          “They are have a perfect touch for make something so professional ,interest and useful for a lot of people.”
        </p>

        {/* Pagination (Hanya di bawah teks pada mode desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="w-12 h-12 flex items-center justify-center bg-[#286F6C] text-white rounded-full"
          >
            <img src={ArrowLeft} alt="Previous" className="w-6 h-6" />
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center bg-[#286F6C] text-white rounded-full"
          >
            <img src={ArrowRight} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
        <div
          className="w-[562px] h-[340px] bg-gray-200 rounded-lg"
          style={{
            backgroundImage: `url(${TestimonialImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '6px',
          }}
        ></div>

        {/* Pagination (Hanya di bawah gambar pada mode mobile) */}
        <div className="flex md:hidden items-center space-x-4 mt-4">
          <button
            className="w-12 h-12 flex items-center justify-center bg-[#286F6C] text-white rounded-full"
          >
            <img src={ArrowLeft} alt="Previous" className="w-6 h-6" />
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center bg-[#286F6C] text-white rounded-full"
          >
            <img src={ArrowRight} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
