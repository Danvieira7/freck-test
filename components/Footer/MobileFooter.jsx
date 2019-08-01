import Link from 'next/link';

export default function MobileFooter() {
  return(
    <div id="mobile-footer">
      <p>
        <Link href="/shop-freck">
          <a>SHOP FRECK</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
        <a>ABOUT</a>
        </Link>
      </p>
      <p>
        <Link href="/blog">
          <a>BLOG</a>
        </Link>
      </p>
      <p>
        <Link href="/my-account">
          <a>ACCOUNT</a>
        </Link>
      </p>
      <p>
        <Link href="/#">
          <a>STORES</a>
        </Link>
      </p>
      <p>
        <Link href="/#">
          <a>FAQ</a>
        </Link>
      </p>
      <p>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
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
        @media only screen and (min-width: 822px) {
          #mobile-footer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};