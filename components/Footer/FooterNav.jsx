import Link from 'next/link';

export default function FooterNav() {
  return (
    <div>
      <div id="footer-nav">
        <div className="footer-column">
          SHOP FRECK
          <br/><br/>
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
        <div className="footer-column">
          CUSTOMER SERVICE
          <br/><br/>
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
        <div className="footer-column">
          BLOG
          <br/><br/>
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
        <div className="footer-column">
          GET FRECKED
          <br/><br/>
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
        <div className="logo">
          FRECK LOGO GOES HERE
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
          font-weight: 900;
        }
        .footer-column {
          padding: 20px;
        }
        .logo {
          text-align: center;
        }
      `}</style>
    </div>
  );
}