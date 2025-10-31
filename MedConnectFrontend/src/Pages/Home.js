import React from 'react';
import About from '../component/About';
import CarouselPage from '../ImageSlider/CarouselPage';
import OurServices from '../component/Service';

export default function Home() {
  return (
    <div>
      < CarouselPage/>
      <About />
      <OurServices/>
    </div>
  );
}