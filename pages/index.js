import React, {Component} from 'react';
import HomeHero from '../components/Home/HomeHero';
import CactusSection from '../components/Home/CactusSection';
import FreckSection from '../components/Home/FreckSection';
import OozeSection from '../components/Home/OozeSection'
import Footer from '../components/Footer/Footer';

function Index() {
  return (
    <div>
      <HomeHero />
      <CactusSection />
      <FreckSection />
      <OozeSection />
      <Footer />
    <style global jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
    </div>
  );
};

export default Index;