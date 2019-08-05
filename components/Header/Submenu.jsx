export default function Submenu() {
  return (
    <div className="submenu">
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
          justify-content: space-around;
        }
        .submenu-item {
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
}