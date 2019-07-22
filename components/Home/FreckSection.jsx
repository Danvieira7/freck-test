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
        <button>Purchase</button>
      </div>
      <style jsx>{`
        container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          min-height: 700px;
          color: #af492f;
          height: 650px;
        }
        h2 {
          font-size: 58px;
        }
      `}</style>
    </container>
  );
};