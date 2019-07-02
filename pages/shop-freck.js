import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';

export default function ShopFreck() {
  return (
  <div>
    <HomeHeader />
    <div className="hero">
      <div>
        <img src="https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg" />
      </div>
      <div>
      </div>
    </div>
    <Footer />
    <style jsx>{`
      img {
        width: 55%;
      }
    `}</style>
  </div>
  );
};