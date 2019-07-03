export default function FooterOptIn() {
  return (
    <div>
      <div id="opt-in">
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
      <style jsx>{`
        #dos {
          background-color: coral;
        }
      `}</style>
    </div>
  );
}