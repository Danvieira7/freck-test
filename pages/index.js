import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Index() {
  return (
    <div>
      <div id="home-hero">
        <Header />
      </div>
      <div id="cactus">
        <h2>
          Introducing the
          <br />
          Cactus Collection
        </h2>
        <Link href="shop-freck">
          <button>Shop</button>
        </Link>
      </div>
      <div id="freck">
        <h2>
        The Original Freckle Cosmetic
        </h2>
        <button>Purchase</button>
      </div>
      <div id="ooze">
        <h2>
        Ooze
        </h2>
        <Link href="blog">
          <button>Read the blog</button>
        </Link>
      </div>
      <Footer />
      <style jsx>{`
        p {
          padding: 10px;
        }
        #home-hero {
          background: url('https://freckbeauty.com/wp-content/uploads/2018/11/hero-home-2.jpg');
          background-position: top 45%;
          background-size: cover;
          height: 620px;
        }
        #cactus {
          background-color: #af492f;
          height: 400px;
          color: white;
          height: 400px;
        }
        #freck {
          height: 400px;
          color: #af492f;
          height: 400px;
        }
        #ooze {
          color: #e4d8c7;
          background-color: #af492f;
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default Index;