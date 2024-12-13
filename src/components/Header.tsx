import React from 'react';
import HeaderImage from '../assets/images/Header.png'; // Pastikan jalurnya sesuai

const Header: React.FC = () => {
  return (
    <section
      className="relative w-full h-[1000px] bg-cover bg-center flex flex-col justify-between items-center"
      style={{ backgroundImage: `url(${HeaderImage})` }}
    >
      {/* Konten Tengah */}
      <div className="flex flex-col items-center text-center mt-20 md:mt-32">
        {/* Judul */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Creative Home Simplify Your Furniture
        </h1>

        {/* Deskripsi */}
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
          Do i have consent to record this meeting gain location, root-and-branch, review, nor game plan who’s the goto
        </p>

        {/* Button */}
        <button
          className="w-[257px] h-[62px] text-white font-bold rounded-lg backdrop-blur-md bg-[#E2E2E240] hover:bg-[#E2E2E290]"
          style={{
            borderRadius: '10px',
            background: '#E2E2E240',
            backdropFilter: 'blur(30px)',
          }}
        >
          Shop Now
        </button>
      </div>

      {/* Kotak Informasi */}
      <div className="absolute bottom-8 bg-[#286F6C] w-[90%] md:w-[1240px] h-auto md:h-[180px] rounded-xl flex flex-col md:flex-row items-center justify-evenly px-6 py-4">
        {/* Kolom 1 */}
        <div className="flex flex-col items-center text-white mb-4 md:mb-0">
          <h2 className="text-4xl font-bold">7</h2>
          <p className="text-lg">Year Experience</p>
        </div>
        <div className="hidden md:block h-[100px] w-[1px] bg-white"></div>

        {/* Kolom 2 */}
        <div className="flex flex-col items-center text-white mb-4 md:mb-0">
          <h2 className="text-4xl font-bold">2</h2>
          <p className="text-lg">Opened in the country</p>
        </div>
        <div className="hidden md:block h-[100px] w-[1px] bg-white"></div>

        {/* Kolom 3 */}
        <div className="flex flex-col items-center text-white mb-4 md:mb-0">
          <h2 className="text-4xl font-bold">10k+</h2>
          <p className="text-lg">Furniture sold</p>
        </div>
        <div className="hidden md:block h-[100px] w-[1px] bg-white"></div>

        {/* Kolom 4 */}
        <div className="flex flex-col items-center text-white">
          <h2 className="text-4xl font-bold">260+</h2>
          <p className="text-lg">Variant Furniture</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
