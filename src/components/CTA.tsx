import React from 'react';
import CTAImage from '../assets/images/CTA.png'; // Pastikan jalurnya sesuai

const CTA: React.FC = () => {
  return (
    <section
      className="relative w-full h-[490px] bg-cover bg-center flex items-center justify-end px-4"
      style={{ backgroundImage: `url(${CTAImage})` }}
    >
      {/* Konten */}
      <div className="max-w-lg w-full text-white md:text-left text-center md:mr-8">
        {/* Judul */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get More Discount <br /> Off Your Order
        </h2>

        {/* Deskripsi */}
        <p className="text-lg mb-6">Join our mailing list</p>

        {/* Form */}
        <div className="flex flex-col md:flex-row md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Input */}
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-96 h-14 px-4 text-gray-700 bg-white rounded-lg focus:outline-none"
            style={{
              borderRadius: '8px',
              height: '60px',
            }}
          />

          {/* Button */}
          <button
            className="w-full md:w-auto h-14 px-8 text-white bg-[#23262F] rounded-lg"
            style={{
              borderRadius: '8px',
              height: '60px',
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
