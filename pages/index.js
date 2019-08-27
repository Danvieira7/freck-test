import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { add } from 'cart-localstorage';
import MainHeader from '../components/Header/MainHeader';
import MobileFooter from '../components/Footer/MobileFooter';
import MobileHero from '../components/Shop/MobileHero';
import ProductList from '../components/Shop/ProductList';
import Cart from '../components/Cart/Cart';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  static async getInitialProps() {
    const res = await fetch(`https://my-json-server.typicode.com/freckbeauty/dummy-data/products`, {
      mode: 'cors',
      'cache-control': 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic Y2tfMWE0ODFkYTMzNTkxMWZkY2E3MWMzMjM4YTQ4NjJhZGZiZjgyNDE2YTpjc183M2QwMjhmMzAwZDIzMmU5YjQzMzhmOTc3YmM5ZmU3YmFmNjNjMzkx'
      }
    });
    const data = await res.json();
    return {
      products: data
    }
  }
  
  handleAddToCart() {
    add({
			id: this.product.id,
      name: this.product.name,
      short_description: this.product.short_description,
      price: this.product.price,
      image: this.product.images[0].src
    });
  }

  toggleCart = () => {
    this.setState(function(prevState) {
      return {show: !prevState.show}
    });
  }

  render(props) {
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
        {this.state.show ?
          <Cart
            deleteItem={this.deleteItem}
            toggleCart={this.toggleCart}
          /> 
          : null}
        <div className="product-container">
          {products.length ? (
            products.map(
              product =>
              <ProductList
                product={product}
                key={product.id}
                handleAddToCart={this.handleAddToCart}
                toggleCart={this.toggleCart}
              />
            )
          ) : ''}
        </div>
        <div id="products-hero"></div>
        <MobileFooter />
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