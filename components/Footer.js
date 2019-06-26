import Link from 'next/link';

function Footer() {
  return (
    <div id="container">
      <div id="uno">
        <h3>Enter the Freck Fam</h3>
        <br/>
        <p>We send email updates on stuff you'll probably want to know about: new products, promos, international shipping, parties, travel guides, & playlists. Welcome to the Freck Fam.</p>
      </div>
      <div id="dos">This is the center div will all the links.</div>
      <div id="tres">RECENT NEWS</div>
      <style jsx>{`
        #container {
          display: grid;
          grid-template-rows: 25% 50% 25%;
          grid-template-columns: 25% 50% 25%;
        }
        #uno {
          background-color: lavender;
        }
        #dos {
          background-color: coral;
        }
        #tres {
          background-color: peachpuff;
        }
      `}</style>
    </div>
  );
};

export default Footer;