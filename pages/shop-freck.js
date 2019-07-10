import React, {Component} from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';
import wooApi from '../utilities/wooApi';
import Product from '../components/Product';

export default class ShopFreck extends Component {
  // notice that it's an async function
  static async getInitialProps () {
    
    // fetch data on the server and parse it to JSON
    const res = await fetch(`${wooApi.baseUrl}/wp-json/wc/v3/products?consumer_key=${
      wooApi.consumerKey
    }&consumer_secret=${
      wooApi.consumerSecret
    }`);
    const json = await res.json();
  
    // return data from the server so it can be consumed by our component
    // all returned data from this method is added to out React.Component this.props
  
     return {
        products: json
      }
    }
    
    render() {
      const { products } = this.props;
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
      {products.length ? (
        products.map(
          product =>
          <Product
            product={product}
            key={product.id}
          />
        )
      ) : ''}
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
}