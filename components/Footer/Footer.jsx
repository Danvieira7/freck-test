import axios from "axios";
import Link from 'next/link';
import MobileFooter  from './MobileFooter';
import FooterOptIn from './FooterOptIn';
import FooterNav from './FooterNav';
import RecentNews from './RecentNews';

export default function Footer() {
  return (
    <div id="container">
      <MobileFooter />
      <div>
        <FooterOptIn />
      </div>
      <div>
        <FooterNav />
      </div>
      <div>
        <RecentNews />
      </div>
    <style global jsx>{`
      .footer-nav-title {
        color: #9a8470;
        padding-bottom: 10px;
      }
    `}</style>
    <style jsx>{`
      @media only screen and (min-width: 421px) {
        #container {
          display: grid;
          grid-template-rows: 25% 50% 25%;
          grid-template-columns: 25% 50% 25%;
          background-color: #1c150f;
          color: #fff;
          padding: 20px 20px;
        }
      }
      @media only screen and (max-width: 420px) {
        #container {
          background-color: #f6f8f6;
        }
      }
    `}</style>
  </div>
  );
};