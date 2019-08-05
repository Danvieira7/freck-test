import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Favicon from '../Favicon';
import MobileHeader from '../Header/MobileHeader';
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
  }

  render() {
    const fixedHamburger = {
      position: this.state.transform ? 'fixed' : '',
      left: this.state.transform ? '94%' : '',
    }
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
      <div>
        <Head>
          <title>Freck | The Original Faux Freckles</title>
          <meta name="description" content="change me: description for indexing bots" />
          <Favicon />
        </Head>
        <MobileHeader />
        <div id="home-header">
          <Link href="/">
            <a>
              <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" alt="Freck logo"/>
            </a>
          </Link>
          <div>
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
          </div>
          <div className="hamburger" style ={fixedHamburger} onClick={this.toggleClass}>
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
        </div>
        <style jsx global>{`
          * { 
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          html, body {
            overflow-x: hidden;
            font-family: Helvetica;
          }
        `}
        </style>
        <style jsx>{`
          #home-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
            width: 100%;
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
            cursor: pointer;
            padding-right: 2.5%;
          }
          @media only screen (min-width: 1003px) {
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
          #home-header > .nav > a {
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
            #home-header, .hamburger, .logo {
              display: none;
            }
          }
          @media only screen and (min-width: 1003px) {
            .hamburger {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
};

export default HomeHeader;