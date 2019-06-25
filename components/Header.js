import Link from 'next/link';

function Header() {
  return (
    <div>
      <Link href="index">
        <a>Freck</a>
      </Link>
      <Link href="index">
        <a>Home</a>
      </Link>
      <Link href="shop-freck">
        <a>Shop Freck</a>
      </Link>
      <Link href="blog">
        <a>Blog</a>
      </Link>
      <Link href="about">
        <a>About</a>
      </Link>
      <Link href="contact">
        <a>Contact</a>
      </Link>
      <Link href="my-account">
        <a>Log In</a>
      </Link>
      <Link href="cart">
        <a>Cart</a>
      </Link>
      <style jsx global>{`
        * { 
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: #A73E24;
          font-style: italic;
          text-transform: uppercase;
        }

        a:hover {
          opacity: 0.6;
          color: #b86756;
        }

        a {
          font-family: 'Helvetica';
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Header;