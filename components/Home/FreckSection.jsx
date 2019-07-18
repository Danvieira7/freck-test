import Link from 'next/link';

export default function FreckSection() {
  return (
    <container>
      <div>
        Image goes here.
        <img src="" alt=""/>
      </div>
      <div>
        <h2>
          The Original Freckle Cosmetic
        </h2>
        <button>Purchase</button>
      </div>
      <style jsx>{`
        container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          height: 400px;
          color: #af492f;
          height: 650px;
        }
      `}</style>
    </container>
  );
};