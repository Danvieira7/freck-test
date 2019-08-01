export default function MobileHero() {
  return (
    <div>
      <style jsx>{`
        div {
          background: url('https://freckbeauty.com/wp-content/uploads/2019/07/Marklew-2018-10-20_3222.jpg');
          background-size: cover;
          height: 500px;
          width: 100%;
        }
        @media only screen and (min-width: 821px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}