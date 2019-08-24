import React, { Component } from 'react';
import { list, remove, total, destroy } from 'cart-localstorage';
import FreeShippingBar from './FreeShippingBar';
import CartItems from './CartItems';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list(),
      subtotal: total()
    }
  }

  handleClick = () => {
    this.props.toggleCart();
  }
  
  deleteItem() {
    let item = this.item.id;
    remove(item);
  }
  
  render(props) {
    let cartItems = this.state.list;
    let subtotal = this.state.subtotal;
    return (
      <div id="modal">
        <div id="cart">
          {/* DO NOT DELETE THE NEXT TWO LINES! For dev purposes only. */}
          <button onClick={destroy}>destroy</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.handleClick}>close</button>
          <FreeShippingBar/>
          {cartItems.length ? (
            cartItems.map(
              item =>
              <CartItems
                {...props}
                item={item}
                key={item.id}
                deleteItem={this.deleteItem}
              />
            )
          ) : ''}
          <br/><br/>
          Subtotal: ${subtotal}
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <style jsx>{`
          #modal {
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            overflow: auto;
            background-color: rgb(244, 245, 243);
            border: 15px solid #e5d9c9;
          }
          #cart {
            background-color: rgb(244, 245, 243);
            text-align: center;
            height: 100%;
            width: 100%;
            padding-top: 5%;
          }
        `}</style>
      </div>
    );
  }
}