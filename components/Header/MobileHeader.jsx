export default function MobileHeader() {
  return(
    <div className="mobile-nav">
      <div className="nav-div">
        <a data-w-id="700b4392-5203-73bc-e19b-4b4356c967ec" className="link-block-2 w-inline-block">
          <img src="https://freckbeauty.com/wp-content/uploads/2019/07/Freck-dots_dots.png" width="25" height="25" alt="" className="image-7" />
        </a>
        <a className="w-inline-block">
          <img src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Search.png" height="25" width="25" alt="" className="image" />
        </a>
        <a className="w-inline-block">
          <img src="https://freckbeauty.com/wp-content/uploads/2019/05/Freck-logo.png" width="150" sizes="(max-width: 479px) 41vw, 150px" alt="" className="image-13" />
        </a>
        <a className="w-inline-block">
          <img src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Account.png" width="25" height="25" alt="" className="image-4" />
        </a>
        <a className="w-inline-block">
          <img src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png" width="25" height="25" alt="" className="image-2" />
        </a>
      </div>
      <div className="mobile-second-nav">
        <a href="http://freck-mobile-redesign.webflow.io/shop-freck" className="no-underline">SHOP</a>
        <a href="https://freckbeauty.com/about/" className="no-underline">ABOUT</a>
        <a href="https://freckbeauty.com/blog/" className="no-underline">BLOG</a>
        <a href="https://freckbeauty.com/contact/" className="no-underline">CONTACT</a>
        <a href="https://freckbeauty.com/my-account/" className="no-underline">ACCOUNT</a>
      </div>
      <style jsx>{`
        .mobile-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background-color: #fff;
        }
        .mobile-second-nav {
          padding: 10px 0;
          margin-bottom: 10px;
        }
        .mobile-second-nav > a {
          padding: 0 10px;
        }
        @media only screen and (min-width: 421px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}