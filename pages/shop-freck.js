import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

export default function ShopFreck() {
  return (
  <div>
    <MainHeader />
    <div className="hero-container">
      <div>
        <img src="https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg" />
      </div>
      <div>
      </div>
    </div>
    <div className="product-container">

    </div>
    <Footer />
    <style jsx>{`
      .hero-container {
        margin: 0;
        margin-bottom: -5.5px;
      }
      img {
        width: 55%;
      }
      .product-container {
        background-color: lightblue;
        height: 500px;
      }
    `}</style>
  </div>
  );
};