import React from 'react';
import ArrowLeft from '../assets/icons/ArrowLeft.svg'; // Panah kiri
import ArrowRight from '../assets/icons/ArrowRight.svg'; // Panah kanan
import CircleBlack from '../assets/icons/CircleBlack.svg'; // Circle aktif
import Circle from '../assets/icons/Circle.svg'; // Circle tidak aktif

const AllProduct: React.FC = () => {
  // Dummy data untuk produk
  const products = [
    {
      id: 1,
      name: 'Ceiling Light',
      price: '$75.00',
      oldPrice: '$82.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 2,
      name: 'Wood Chair',
      price: '$50.00',
      oldPrice: '$70.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 3,
      name: 'Papper Cupboard',
      price: '$105.00',
      oldPrice: '$120.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 4,
      name: 'Ole Gundorse Spring',
      price: '$82.00',
      oldPrice: '$100.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 5,
      name: 'Treos Seroes 911',
      price: '$200.00',
      oldPrice: '$210.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 6,
      name: 'Multi Bilderman Slibber',
      price: '$45.00',
      oldPrice: '$50.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 7,
      name: 'XORA Corner Desk',
      price: '$320.00',
      oldPrice: '$325.00',
      image: 'https://via.placeholder.com/285x292',
    },
    {
      id: 8,
      name: 'Black Forest Series Wood',
      price: '$225.00',
      oldPrice: '$240.00',
      image: 'https://via.placeholder.com/285x292',
    },
  ];

  return (
    <section className="w-full max-w-screen-xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">All Product</h2>
        <p className="text-sm md:text-base text-gray-600 mt-4">
          The products we provide only for you as our service are selected from the
          best products with number 1 quality in the world
        </p>
      </div>

      {/* Produk */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full bg-white rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[292px] object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="flex items-center justify-center mt-2">
                <span className="text-gray-800 font-semibold mr-2">{product.price}</span>
                <span className="text-gray-500 line-through">{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-10 space-x-4">
        {/* Panah Kiri */}
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <img src={ArrowLeft} alt="Previous" className="w-6 h-6" />
        </button>

        {/* Circle Pagination */}
        <div className="flex items-center space-x-2">
          <img src={CircleBlack} alt="Active Page" className="w-4 h-4" />
          <img src={Circle} alt="Inactive Page" className="w-4 h-4" />
        </div>

        {/* Panah Kanan */}
        <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <img src={ArrowRight} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default AllProduct;
