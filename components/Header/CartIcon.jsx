import Link from 'next/link';

export default function CartIcon() {
  return (
    <a href="https://freckbeauty.com/cart">
      <img className="cart" src="https://freckbeauty.com/wp-content/uploads/2019/07/freck-mobile_Bag.png" alt="cart"/>
      <style jsx>{`
        .cart {
          width: 20px;
          margin-bottom: -2px;
        }
        a:hover {
          opacity: 0.6;
          color: #b86756;
        }
      `}</style>
    </a>
  );
}