import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Favicon from '../Favicon';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({transform: !this.state.transform});
    console.log(`Transform is ${this.state.transform}`);
  }

  render() {
    const bar1 = {
      transform: this.state.transform ? 'rotate(-45deg) translate(-9px, 6px)' : ''
    }
    const bar2 = {
      opacity: this.state.transform ? '0' : ''
    }
    const bar3 = {
      transform: this.state.transform ? 'rotate(45deg) translate(-8px, -8px)' : ''
    }
    const toggle = {
      display: this.state.transform ? 'block' : 'none'
    }
    return (
      <div id="header">
        <Head>
          <title>Freck | The Original Faux Freckles</title>
          <meta name="description" content="change me: description for indexing bots" />
          <Favicon />
        </Head>
        <Link href="/">
          <a>
            <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" alt="Freck logo"/>
          </a>
        </Link>
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="shop-freck">
            <a>Shop Freck</a>
          </Link>
          <Link href="blog">
            <a>Blog</a>
          </Link>
          <Link href="about">
            <a>About</a>
          </Link>
          <Link href="contact">
            <a>Contact</a>
          </Link>
          <Link href="my-account">
            <a>Log In</a>
          </Link>
          <Link href="cart">
            <a>
              <img className="cart" src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png" alt="cart"/>
            </a>
          </Link>
        </div>
        <div className="mobile-nav-section">
          <div className="nav-div">
            <a data-w-id="700b4392-5203-73bc-e19b-4b4356c967ec" href="#" className="link-block-2 w-inline-block">
              <img src="https://freckbeauty.com/wp-content/uploads/2019/07/Freck-dots_dots.png" width="25" height="25" alt="" className="image-7" />
            </a>
            <a href="#" className="w-inline-block">
              <img src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Search.png" height="25" width="25" alt="" className="image" />
            </a>
            <a href="/" className="w-inline-block">
              <img src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" width="150" srcset="images/Freck-Logos-All_Freck-Rust_3_566x150-p-500.png 500w, images/Freck-Logos-All_Freck-Rust_3_566x150.png 566w" sizes="(max-width: 479px) 41vw, 150px" alt="" className="image-13" />
            </a>
            <a href="https://freckbeauty.com/my-account/" className="w-inline-block">
              <img src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Account.png" width="25" height="25" alt="" className="image-4" />
            </a>
            <a href="https://freckbeauty.com/cart/" className="w-inline-block">
              <img src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png" width="25" height="25" alt="" className="image-2" />
            </a>
          </div>
          <div className="mobile-nav-second-div">
            <a href="http://freck-mobile-redesign.webflow.io/shop-freck" className="no-underline">SHOP</a><a href="https://freckbeauty.com/about/" className="no-underline">ABOUT</a><a href="https://freckbeauty.com/blog/" className="no-underline">BLOG</a><a href="https://freckbeauty.com/contact/" className="no-underline">CONTACT</a><a href="https://freckbeauty.com/my-account/" className="no-underline">ACCOUNT</a>
          </div>
        </div>
        <div className="hamburger" onClick={this.toggleClass}>
          <div className="bar1" style={bar1}></div>
          <div className="bar2" style={bar2}></div>
          <div className="bar3" style={bar3}></div>
        </div>
        <div className="submenu" style={toggle}>
          <div className="submenu-icons">
            <div>My Account Icon</div>
            <div>Cart Icon</div>
          </div>
          <div className="submenu-item">
            SHOP BEAUTY
            <div></div>
            <div></div>
          </div>
          <div className="submenu-item">
            BEST SELLERS
            <div></div>
            <div></div>
          </div>
          <div className="submenu-item">ABOUT</div>
          <div className="submenu-item">OOZE</div>
          <div className="submenu-item">CONTACT</div>
          <div className="submenu-item">ACCOUNT</div>
          <div className="submenu-item">Freck Logo</div>
        </div>
        <style jsx global>{`
          * { 
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
        </style>
        <style jsx>{`
          #header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
          }
          a {
            text-decoration: none;
            color: #A73E24;
            font-style: italic;
            text-transform: uppercase;
            padding: 0 10px;
          }
          a:hover {
            opacity: 0.6;
            color: #b86756;
          }
          a {
            font-family: 'Helvetica';
            padding: 10px;
          }
          .logo {
            margin-left: -32.5px;
            margin-top: 4.5px;
            height: 100px;
          }
          .nav {
            padding-right: 40px;
            font-size: 18px;
          }
          @media only screen and (max-width: 1002px) {
            .nav {
              display: none;
            }
          }
          .hamburger {
            display: inline-block;
            cursor: pointer;
            padding-right: 1.5%;
          }
          @media only screen (min-width: 1004px) {
            .hamburger {
              display: none;
            }
          }
          .bar1, .bar2, .bar3 {
            width: 35px;
            height: 5px;
            background-color: #a73e24;
            margin: 6px 0;
            transition: 0.4s;
          }
          #header > .nav > a {
            padding-left: 25px;
          }
          .cart {
            width: 20px;
            margin-bottom: -2px;
          }
          .submenu {
            background-color: #f6f8f6;
            position: fixed;
            width: 40%;
            height: 100vh;
            top: 0px;
            left: 52.5%;
            z-index: 1000;
          }
          .submenu-icons {
            display: flex;
            justify-content: space-around;
          }
          .submenu-item {
            padding-left: 20px;
          }
          @media only screen and (max-width: 421px) {
            .hamburger, .logo {
              display: none;
            }
          }
          @media only screen and (min-width: 421px) {
            .mobile-nav-section {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
};

export default HomeHeader;