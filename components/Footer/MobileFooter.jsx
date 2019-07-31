import Link from 'next/link';

export default function MobileFooter() {
  return(
    <div id="mobile-footer">
      <p>
        <Link>Shop Freck</Link>
      </p>
      <p>
        <Link>About</Link>
      </p>
      <p>
        <Link>Blog</Link>
      </p>
      <p>
        <Link>Account</Link>
      </p>
      <p>
        <Link>Stores</Link>
      </p>
      <p>
        <Link>FAQ</Link>
      </p>
      <p>
        <Link>CONTACT</Link>
      </p>
      <img src="" alt="Freck dot logo" />
      <style jsx>{`
        #mobile-footer {
          padding: 40px 0;
          color: #000;
          text-align: center;
        }
        img {
          padding-top: 30px;
        }
        
      `}</style>
    </div>
  );
};