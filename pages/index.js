import Link from 'next/link';
import HomeHero from '../components/HomeHero'
import CactusSection from '../components/CactusSection'
import FreckSection from '../components/FreckSection'
import OozeSection from '../components/OozeSection'
import Footer from '../components/Footer';

function Index() {
  return (
    <div>
      <HomeHero />
      <CactusSection />
      <FreckSection />
      <OozeSection />
      <Footer />
    </div>
  );
};

export default Index;