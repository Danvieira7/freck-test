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
    `}</style>
  </div>
  )
}