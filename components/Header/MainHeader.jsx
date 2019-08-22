import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Favicon from './Favicon';
import MobileHeader from './MobileHeader';
import CartIcon from './CartIcon';
import Submenu from './Submenu';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: false
    };
  }

  toggle = () => {
    this.setState({transform: !this.state.transform});
  }

  render() {
    const fixedHamburger = {
      position: this.state.transform ? 'fixed' : null,
      left: this.state.transform ? '94%' : null,
    }
    const bar1 = {
      transform: this.state.transform ? 'rotate(-45deg) translate(-9px, 6px)' : null
    }
    const bar2 = {
      opacity: this.state.transform ? '0' : null
    }
    const bar3 = {
      transform: this.state.transform ? 'rotate(45deg) translate(-8px, -8px)' : null
    }
    return (
      <div>
        <Head>
          <title>Freck | The Original Faux Freckles</title>
          <meta name="description" content="change me: description for indexing bots" />
          <script src="https://kit.fontawesome.com/ab17e105a7.js"></script>
          <Favicon />
        </Head>
        <MobileHeader />
        <div id="main-header">
          <a href="https://freckbeauty.com">
            <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" alt="Freck logo"/>
          </a>
          <div>
            <div className="nav">
              <a href="https://freckbeauty.com">
                Home
              </a>
              <Link href="/">
                <a>
                  Shop Freck
                </a>
              </Link>
              <a href="https://freckbeauty.com/blog">
                Blog
              </a>
              <a href="https://freckbeauty.com/about">
                About
              </a>
              <a href="https://freckbeauty.com/contact">
                Contact
              </a>
              <a href="https://freckbeauty.com/my-account">
                Log In
              </a>
              <CartIcon />
            </div>
          </div>
          <div className="hamburger" style ={fixedHamburger} onClick={this.toggle}>
            <div className="bar1" style={bar1}></div>
            <div className="bar2" style={bar2}></div>
            <div className="bar3" style={bar3}></div>
          </div>
          {this.state.transform ? <Submenu /> : null}
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
          #main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
            width: 100%;
            background-color: #E5D9C9;
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
          #main-header > .nav > a {
            padding-left: 25px;
          }
          .cart {
            width: 20px;
            margin-bottom: -2px;  
          }
          @media only screen and (max-width: 421px) {
            #main-header, .hamburger, .logo {
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

export default MainHeader;