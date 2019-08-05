import React, {Component} from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';
import MobileHero from '../components/Shop/MobileHero';
import ProductList from '../components/ProductList';
import { server } from '../config/server';

class ShopFreck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps() {
    const res = await fetch(`${server}/api/products`);
    const data = await res.json();
    return {
      products: data
    }
  }
    
  render() {
    const { products } = this.props;
    return (
      <div>
        <MainHeader />
        <div className="hero-container">
          <div id="left-hero">
            <img src="https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/f-dot.svg" alt="F Dot Logo"/>
          </div>
          <div id="carousel">
          </div>
        </div>
        <MobileHero />
        <div className="product-container">
          {products.length ? (
            products.map(
              product =>
              <ProductList
                product={product}
                key={product.id}
              />
            )
          ) : ''}
        </div>
        <div id="products-hero"></div>
        <Footer />
        <style jsx>{`
          .hero-container {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: -5.5px;
          }
          #left-hero {
            background: url('https://freckbeauty.com/wp-content/uploads/2018/11/shop-header-left.jpg');
            background-repeat: no-repeat;
            background-position: 0% 50%;
            background-size: cover;
            width: 50%;
            height: 720px;
            display: flex;
            align-items: center;
          }
          #carousel {
            background: url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Sml-Open_Flatlay-Shadow_R__676x676.jpg');
            background-repeat: no-repeat;
            background-position: 0% 50%;
            background-size: cover;
            width: 50%;
            height: 720px;
          }
          img {
            width: 21%;
            margin-left: 30px;
          }
          .product-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10%;
            justify-content: center;
            margin-right: 5%;
            margin-left: 5%;
          }
          #products-hero {
            background: url('https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/04/Freck_Group-Collection_Flatlay-Shadow_R_1351x901_ImgOptm.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: scroll;
            background-size: contain;
            min-height: 900px;
            width: 100%;
            margin-top: 10%;
          }
          @media only screen and (max-width: 820px) {
            .hero-container {
              display: none;
            }
            #products-hero {
              background-position: 0% 0%;
              min-height: 300px;
              width: 100%;
              margin-top: 0;
              margin-bottom: -55px;
            }
          }
          @media only screen and (min-width: 520px) and (max-width: 820px) {
            #products-hero {
              min-height: 600px;
              margin-top: 20px;
            }
          }
        `}</style>
      </div>
    );
  };
}
export default ShopFreck;