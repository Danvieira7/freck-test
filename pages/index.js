import React, {Component} from 'react';
import HomeHero from '../components/HomeHero';
import CactusSection from '../components/CactusSection';
import FreckSection from '../components/FreckSection';
import OozeSection from '../components/OozeSection'
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