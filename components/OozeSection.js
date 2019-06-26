import Link from 'next/link';

export default function Ooze() {
  return (
    <div>
      <h2>
      Ooze
      </h2>
      <Link href="blog">
        <button>Read the blog</button>
      </Link>
      <style jsx>{`
        div {
          color: #e4d8c7;
          background-color: #af492f;
          height: 200px;
        }
      `}</style>
    </div>
  );
};