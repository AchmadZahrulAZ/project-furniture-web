import React from 'react';
import ArrowRight from '../assets/icons/ArrowRight.svg'; // Ikon panah kanan

const NewInStore: React.FC = () => {
  // Dummy data untuk PhotoCard
  const items = [
    { id: 1, name: 'Chair', image: 'https://via.placeholder.com/265x400' },
    { id: 2, name: 'Bed', image: 'https://via.placeholder.com/265x400' },
    { id: 3, name: 'Cupboard', image: 'https://via.placeholder.com/265x400' },
    { id: 4, name: 'Lighting', image: 'https://via.placeholder.com/265x400' },
    { id: 5, name: 'Sofa', image: 'https://via.placeholder.com/265x400' },
  ];

  return (
    <section className="w-full max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Bagian Kiri */}
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          New In Store Now
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Get the latest items immediately with promo prices
        </p>
        <button className="hidden md:flex items-center text-blue-600 font-semibold">
          Check All
          <img src={ArrowRight} alt="Arrow Right" className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Bagian Tengah & Kanan */}
      <div
        className="w-full md:w-2/3 flex md:justify-end space-x-6 py-4 md:py-0 overflow-x-auto"
        style={{
          scrollbarWidth: 'thin', // Untuk Firefox
          WebkitOverflowScrolling: 'touch', // Untuk smooth scrolling di iOS
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[265px] h-[400px] bg-gray-200 rounded-lg flex flex-col items-center justify-end"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-full text-center bg-black/50 py-2 text-white rounded-b-lg font-semibold">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewInStore;
