import Link from 'next/link';

export default function CactusSection() {
  return (
    <div>
      <h2>
        Introducing the
        <br />
        Cactus Collection
      </h2>
      <Link href="shop-freck">
        <button>Shop</button>
      </Link>
      <style jsx>{`
      div {
        background-color: #af492f;
        height: 400px;
        color: white;
        height: 400px;
      }
      `}</style>
    </div>
  );
};