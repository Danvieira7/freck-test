import Link from 'next/link';

export default function FooterNav() {
  return (
    <div id="footer-nav-container">
      <div id="footer-nav">
        <div className="footer-column one">
          <p className="footer-nav-title">SHOP FRECK</p>
          <p>
            <Link>
              <a>Freck OG</a>
            </Link> 
          </p>
          <p>
            <Link>
              <a>Foreclay</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Rich Bitch</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>So Jelly</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Lil Prick</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Cactus Water</a>
            </Link>
          </p>
        </div>
        <div className="footer-column two">
          <p className="footer-nav-title">CUSTOMER SERVICE</p>
          <p>
            <Link>
              <a>hi@freckbeauty.com</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>213.632.6977</a>
            </Link>
          </p>
          <p>MON – SAT | 9 AM – 6 PM PDT</p>
          <img src="" alt="SSL certificate"/>
        </div>
        <div className="footer-column three">
          <p className="footer-nav-title">BLOG</p>
          <p>
            <Link>
              <a>Beauty</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Culture</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Business</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Press</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Travel</a>
            </Link>
          </p>
        </div>
        <div className="footer-column four">
          <p className="footer-nav-title">GET FRECKED</p>
          <p>
            <Link>
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Stores</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Return Policy</a>
            </Link>
          </p>
          <p>
            <Link>
                <a>Terms and Conditions</a>
            </Link>
          </p>
          <p>
            <Link>
              <a>Privacy Policy</a>
            </Link>
          </p>
          <p>
            <Link>
                <a>FAQ</a>
            </Link>
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
        .two, .three {
          padding-right: 35px;
        }
        .two {
          padding-left: 35px;
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