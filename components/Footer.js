import Link from 'next/link';

function Footer() {
  return (
    <div id="container">
      <div id="uno">
        <h3>Enter the Freck Fam</h3>
        <br/>
        <p>We send email updates on stuff you'll probably want to know about: new products, promos, international shipping, parties, travel guides, & playlists. Welcome to the Freck Fam.</p>
        <form action="/signup" method="POST">
            <div className="form-group">
                <label className="form-label" htmlFor="firstname">First Name</label>
                <input className="form-input" type="text" name="firstname" id="firstname"/>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="lastname">Last Name</label>
                <input className="form-input" type="text" name="lastname" id="lastname"/>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="text" name="email" id="email"/>
            </div>
            <input type="submit" value="JOIN"/>
        </form>
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