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
        <img src="https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2019/03/Group_Collection_R_v2.jpg" alt="Cactus Collection" />
      </div>
      <style jsx>{`
      #cactus-collection {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        background-color: #a5503c;
        height: 550px;
        color: white;
      }
      h2 {
        font-size: 58px;
      }
      button {
        width: 200px;
        min-height: 45px;
        background-color: transparent;
        border: solid;
        border: 1px solid #e4d8c7;
        color: #e4d8c7;
        font-family: Helvetica, Verdana, Arial, sans-serif;
        font-weight: 300;
        text-transform: uppercase;
        font-size: 16px;
        line-height: 18px;
      }
      img {
        width: 582px;
      }
      `}</style>
    </div>
  );
};