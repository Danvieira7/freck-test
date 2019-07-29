import HomeHeader from './HomeHeader';

export default function HomeHero() {
  return (
  <div>
    <HomeHeader />
    <style jsx>{`
        div {
          background: url('https://freckbeauty.com/wp-content/uploads/2018/11/hero-home-2.jpg');
          background-repeat: no-repeat;
          background-position: center top;
          background-attachment: scroll;
          background-size: cover;
          min-height: 620px;
          width: 100%;
        }
        @media screen and (max-width: 420px) {
          div {
            background: url('https://freckbeauty.com/wp-content/uploads/2019/07/home-models-p-500.jpeg');
            background-repeat: no-repeat;
            background-position: right;
            background-attachment: scroll;
            background-size: cover;
            min-height: 500px;
            width: 100%;
          }
        }
    `}</style>
  </div>
  )
}