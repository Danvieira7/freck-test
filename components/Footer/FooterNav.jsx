export default function FooterNav() {
  return (
    <div id="footer-nav">
      <div className="footer-column">
        SHOP FRECK
      </div>
      <div className="footer-column">
        CUSTOMER SERVICE
      </div>
      <div className="footer-column">
        BLOG
      </div>
      <div className="footer-column">
        GET FRECKED
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
      `}</style>
    </div>
  );
}