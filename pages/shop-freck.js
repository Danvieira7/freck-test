import React, {Component} from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer/Footer';
import fetch from 'isomorphic-unfetch';
import ProductList from '../components/ProductList';

class ShopFreck extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  static async getInitialProps () {
    const res = await fetch(`https://freckbeauty.com/wp-json/wc/v3/products?consumer_key=${process.env.KEY}&consumer_secret=${process.env.SECRET}`);
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
              <ProductList
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
            max-width: 55%;
          }
          .product-container {
            display: flex;
            flex-wrap: wrap;
            max-width: 1000px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  };
}
export default ShopFreck;