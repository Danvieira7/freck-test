import Link from 'next/link';
import RightArrow from './RightArrow';

export default function FooterNav() {
  return (
    <div id="footer-nav-container">
      <div id="footer-nav">
        <div className="footer-column one">
          <p className="footer-nav-title">SHOP FRECK</p>
          <p>
            <a>Freck OG</a>
            <RightArrow />
          </p>
          <p>
            <a>Foreclay</a>
            <RightArrow />
          </p>
          <p>
            <a>Rich Bitch</a>
            <RightArrow />
          </p>
          <p>
            <a>So Jelly</a>
            <RightArrow />
          </p>
          <p>
            <a>Lil Prick</a>
            <RightArrow />
          </p>
          <p>
            <a>Cactus Water</a>
            <RightArrow />
          </p>
        </div>
        <div className="footer-column two">
          <p className="footer-nav-title">CUSTOMER SERVICE</p>
          <p>
            <a>
                <img src="https://freckbeauty.com/wp-content/uploads/2019/08/email-16.png" />
                &nbsp;
                hi@freckbeauty.com
            </a>
          </p>
          <p>
            <a>
                <img className="phone" src="https://freckbeauty.com/wp-content/uploads/2019/08/phone-42-16.png" />
                &nbsp;
                213.632.6977
            </a>
          </p>
          <p>MON – SAT | 9 AM – 6 PM PDT</p>
          <img className="ssl" src="https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/10/ssl-badge-2-32.png" alt="SSL certificate" />
        </div>
        <div className="footer-column three">
          <p className="footer-nav-title">BLOG</p>
          <p>
            <a>Beauty</a>
            <RightArrow />
          </p>
          <p>
            <a>Culture</a>
            <RightArrow />
          </p>
          <p>
            <a>Business</a>
            <RightArrow />
          </p>
          <p>
            <a>Press</a>
            <RightArrow />
          </p>
          <p>
            <a>Travel</a>
            <RightArrow />
          </p>
        </div>
        <div className="footer-column four">
          <p className="footer-nav-title">GET FRECKED</p>
          <p>
            <a>About</a>
            <RightArrow />
          </p>
          <p>
            <a>Stores</a>
            <RightArrow />
          </p>
          <p>
            <a>Return Policy</a>
            <RightArrow />
          </p>
          <p>
            <a>Terms and Conditions</a>
            <RightArrow />
          </p>
          <p>
            <a>Privacy Policy</a>
            <RightArrow />
          </p>
          <p>
            <a>FAQ</a>
            <RightArrow />
          </p>
        </div>
        <div className="logo-container">
        <div className="separator"></div>
          <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" alt="Freck logo"/>
          <p>
            © 2019 Freck Beauty. All Rights Reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        #footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-column {
          padding-bottom: 20px;
        }
        .phone {
          margin-left: -3px;
        }
        .ssl {
          margin-left: -5.5px;
          width: 27.5px;
        }
        .two, .three {
          padding-right: 30px;
        }
        .two {
          padding-left: 30px;
        }
        .separator {
          height: 1px;
          border-top: 1px solid #332b23;
          width: 100%;
        }
        .logo-container {
          text-align: center;
          color: #4d3c2d;
        }
        .logo {
          width: 60%;
        }
      `}</style>
    </div>
  );
}