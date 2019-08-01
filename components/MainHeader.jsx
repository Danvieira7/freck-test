import Link from 'next/link';
import Head from 'next/head';
import Favicon from './Favicon';
import MobileHeader from './Header/MobileHeader';

function MainHeader() {
  return (
    <div>
      <Head>
        <Favicon />
      </Head>
      <MobileHeader />
      <div id="main-header">
        <Link href="/">
          <a>
            <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" />
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
          background-color: #E5D9C9;
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
        @media only screen and (max-width: 1002px) {
          .logo, .nav {
            display: none;
          }
          #main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
            background-color: #E5D9C9;
          }
        }
        @media only screen and (max-width: 821px) {
          #main-header {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MainHeader;