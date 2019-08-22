import React, { Component } from 'react';
import { list, total, destroy } from 'cart-localstorage'
import CartItems from './CartItems';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.toggleCart();
	}
  
  render() {
    let cartTotal = total();
    let cartItems = list();
    return (
      <div id="modal">
        <div id="cart">
          {cartItems.length ? (
            cartItems.map(
              item =>
              <CartItems
                item={item}
                key={item.id}
              />
            )
          ) : ''}
          <br/><br/>
          Total: ${cartTotal}
          <br/><br/><br/><br/>
          <button onClick={destroy}>CLEAR CART</button>
          <button onClick={this.handleClick}>CLOSE CART</button>
        </div>
        <style jsx>{`
          #modal {
            height: 100vh;
            width: 100vw;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
          }
          #cart {
            background-color: white;
            text-align: center;
            height: 100%;
            width: 100%;
            padding-top: 10%;
          }
        `}</style>
      </div>
    );
  }
}