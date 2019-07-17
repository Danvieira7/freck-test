import Link from 'next/link';

export default function CactusSection() {
  return (
    <div id="cactus-collection">
      <div>
        <h2>
          Introducing the
          <br />
          Cactus Collection
        </h2>
        <Link href="shop-freck">
          <button>Shop</button>
        </Link>
      </div>
      <div>
        <img src="https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/03/Group_Collection_R_v2.jpg" />
      </div>
      <style jsx>{`
      #cactus-collection {
        display: flex;
        flex-wrap: wrap;
        background-color: #af492f;
        height: 550px;
        color: white;
      }
      img {
        width: 582px;
      }
      `}</style>
    </div>
  );
};