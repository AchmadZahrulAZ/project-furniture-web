import React from 'react';
import Header from '../components/Header';
import WeCreate from '../components/WeCreate';
import NewInStore from '../components/NewInStore';
import TheBestFurniture from '../components/TheBestFurniture';
import AllProduct from '../components/AllProduct';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <WeCreate />
      <NewInStore />
      <TheBestFurniture />
      <AllProduct />
      <Testimonial />
      <CTA />
    </>
  );
};

export default Home;