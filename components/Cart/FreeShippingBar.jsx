import { total } from 'cart-localstorage';

export default function FreeShippingBar() {
  return (
    <div id="container">
      {total() > 75 ? <p>You've unlocked free shipping!</p> : <p>You're on your way to free shipping!</p>}
      <div id="bar">
      </div>
      <br/>
      <span id="spend">
      {total() > 75 ? '$75' : '$' + total()}
      </span> of $75
      <br/><br/>
      <style jsx>{`
        #container {
          padding-top: 5%;
        }
      `}</style>
    </div>
  );
  
}