import { total } from 'cart-localstorage';

export default function FreeShippingBar() {
  let style = {
    width: total() * 3 + 'px'
  };
  return (
    <div id="container">
      <span id="msg">
        {total() > 75 ? <p>You've unlocked free shipping!</p> : <p>You're on your way to free shipping!</p>}
      </span>
      <div id="bar">
        <div id="fill" style={style}></div>
      </div>
      <br/>
      <div id="spend-div">
        <span id="spend">
          {total() > 75 ? '$75' : '$' + total()}
        </span> of $75
      </div>
      <br/><br/>
      <style jsx>{`
        #container {
          padding-top: 5%;
        }
        #msg {
          color: #A73E24;
          font-weight: 545;
        }
        #bar {
          width: 225px;
          height: 12.5px;
          background-color: #E5D9C9;
          margin: 0 auto;
          margin-top: 15px;
          border-radius: 20px;
        }
        #fill {
          height: 100%;
          max-width: 225px;
          background-color: #A73E24;
          border-radius: 20px;
        }
        #spend-div {
          font-style: italic;
        }
      `}</style>
    </div>
  );
  
}