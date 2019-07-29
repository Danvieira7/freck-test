import Link from 'next/link';

export default function FreckSection() {
  return (
    <container>
      <div>
        <img src="https://mk0freckbeautyfwjku5.kinstacdn.com/wp-content/uploads/2018/11/home-og.jpg" alt="Freck model and product"/>
      </div>
      <div>
        <h2>
          The Original
          <br/>
          Freckle Cosmetic
        </h2>
        <Link href="product/freck-og">
          <a>
            <button>Purchase</button>
          </a>
        </Link>
      </div>
      <style jsx>{`
        container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          min-height: 700px;
          color: #af492f;
          min-height: 650px;
        }
        h2 {
          font-size: 58px;
        }
        button {
          text-transform: uppercase;
          border-style: solid;
          background-clip: padding-box;
          background-color: transparent;
          border-color: #a73e24;
          border-top-width: 1px;
          border-right-width: 1px;
          border-bottom-width: 1px;
          border-left-width: 1px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: .5px;
          padding-top: 5px;
          padding-right: 10px;
          padding-bottom: 5px;
          padding-left: 10px;
          color: #a73e24;;
        }
      `}</style>
    </container>
  );
};