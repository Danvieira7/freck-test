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
    return (
      <div>
        <Head>
          <title>Freck | The Original Faux Freckles</title>
          <meta name="description" content="change me: description for indexing bots" />
          <Favicon />
        </Head>
        <Link href="/">
          <a>
            <img src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" />
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
            <a>Cart</a>
          </Link>
        </div>
        <div className="hamburger" onClick={this.toggleClass}>
          <div className={this.state.transform ? 'bar1 change1' : 'bar1'}></div>
          <div className={this.state.transform ? 'bar2 change2' : 'bar2'}></div>
          <div className={this.state.transform ? 'bar3 change3' : 'bar3'}></div>
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
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
          }
          img {
            margin-left: -32.5px;
            margin-top: 4.5px;
            height: 100px;
          }
          .nav {
            padding-right: 40px;
            font-size: 18px;
          }
          @media screen and (max-width: 925px) {
            .nav {
              display: none;
            }
          }
          .hamburger {
            display: inline-block;
            cursor: pointer;
            padding-top: 14px;
            padding-right: 20px;
          }
          @media screen and (min-width: 926px) {
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
          .change1 .bar1 {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px);
            transform: rotate(-45deg) translate(-9px, 6px);
          }
          .change2 .bar2 {
            opacity: 0;
          }
          .change3 .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
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
        `}</style>
      </div>
    );
  }
};

export default HomeHeader;