import Link from 'next/link';
  
export default function Submenu() {
  return (
    <div className="submenu">
      <div className="submenu-icons">
        <div>
          <a href="https://freckbeauty.com/my-account">
            <img className="account icon" src="https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51f95678d23e8f296d3_freck-mobile_Account.png" />
          </a>
        </div>
        <div>
          <a href="https://freckbeauty.com/cart">
          <img className="cart icon" src="https://uploads-ssl.webflow.com/5cdc55a95b0a2bf4bf7ea924/5cdca51edd56264e977a632b_freck-mobile_Bag.png" />
          </a>
        </div>
      </div>
      <div className="submenu-item">
        <Link href="/">
          <a>SHOP BEAUTY</a>
        </Link>
        <div></div>
        <div></div>
      </div>
      <div className="submenu-item">
        <details>
          <summary>
            BEST SELLERS
          </summary>
          <p>
            <a href="https://freckbeauty.com/product/freck-og">
              FRECK OG
            </a>
          </p>
          <p>
            <a href="https://freckbeauty.com/product/so-jelly">
              SO JELLY
            </a>
          </p>
          <p>
            <a href="https://freckbeauty.com/product/rich-bitch">
              RICH BITCH
            </a>
          </p>
        </details>
        <div></div>
        <div></div>
      </div>
      <div className="submenu-item">
        <a href="https://freckbeauty.com/about">
        ABOUT
        </a>
      </div>
      <div className="submenu-item">
        <a href="https://freckbeauty.com/blog">
          OOZE
        </a>
      </div>
      <div className="submenu-item">
        <a href="https://freckbeauty.com/contact">
          CONTACT
        </a>
      </div>
      <div className="submenu-item">
        <a href="https://freckbeauty.com/my-account">
          ACCOUNT
        </a>
      </div>
      <div className="submenu-item">
        <img className="logo" src="https://freckbeauty.com/wp-content/uploads/2019/07/Freck-Logos-All_F-Rust-150x150.png" alt="Freck dot logo" />
      </div>
      <style jsx>{`
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
          justify-content: flex-end;
          margin-right: 21%;
          padding: 20px 0;
        }
        .icon {
          width: 30px;
          margin: 0 10px;
        }
        a {
          text-decoration: none;
          color: #000;
        }
        .submenu-item {
          text-align: right;
          padding-top: 10px;
          padding-right: 25%;
          padding-bottom: 10px;
        }
        p {
          padding: 10px 0;
        }
        .logo {
          width: 50px;
          padding-top: 30px;
        }
      `}</style>
    </div>
  );
}