import HomeHeader from './HomeHeader';

export default function HomeHero() {
  return (
  <div>
    <HomeHeader />
    <style jsx>{`
        div {
          background: url('https://freckbeauty.com/wp-content/uploads/2018/11/hero-home-2.jpg');
          background-position: top 45%;
          background-size: cover;
          height: 620px;
        }
    `}</style>
  </div>
  )
}