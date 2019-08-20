import Link from 'next/link';

export default function MobileFooter() {
  return(
    <div id="mobile-footer">
      <p>
        <Link href="/">
          <a>SHOP FRECK</a>
        </Link>
      </p>
      <p>
        <a href="https://freckbeauty.com/about">ABOUT</a>
      </p>
      <p>
        <a href="https://freckbeauty.com/blog">BLOG</a>
      </p>
      <p>
        <a href="https://freckbeauty.com/my-account">ACCOUNT</a>
      </p>
      <p>
        <a href="https://freckbeauty.com/stores">STORES</a>
      </p>
      <p>
        <a href="https://freckbeauty.com/faq">FAQ</a>
      </p>
      <p>
        <a href="https://freckbeauty.com/contact">CONTACT</a>
      </p>
      <img src="https://freckbeauty.com/wp-content/uploads/2019/07/Freck-Logos-All_F-Rust-150x150.png" alt="Freck dot logo" />
      <style jsx>{`
        #mobile-footer {
          padding: 40px 0;
          color: #000;
          text-align: center;
          background-color: #f6f8f6;
        }
        a {
          text-decoration: none;
          color: #000;
        }
        img {
          padding-top: 30px;
          width: 31px;
        }
      `}</style>
    </div>
  );
};