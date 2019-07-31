import React, {Component} from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';
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
          <div>
          </div>
        </div>
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
            margin: 0;
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
        `}</style>
      </div>
    );
  };
}
export default ShopFreck;