import React, { Component } from 'react';
import { list, total, remove, destroy, update, get } from 'cart-localstorage';
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

  componentDidMount() {
  }

  handleClick = () => {
    this.props.toggleCart();
  }

  deleteItem() {
    let item = this.item.id;
    remove(item);
    // console.log(this.item.price * this.item.quantity)
    return total(this.subtotal, this.item.price);
  }

  decrementItem() {
    let item = this.item.id;
    let quantity = item.quantity;
    if (quantity > 1) {
      quantity-- - 1;
    } else {
      remove(item);
    }
    console.log(item);
    console.log(this.item);
  }

  incrementItem() {
    let item = this.item.id;
    let quantity = item.quantity;
    quantity++ + 1;
    console.log(this.item);
  }

  render() {
    let cartItems = this.state.list;
    let subtotal = total();
    return (
      <div id="modal">
        <div id="cart">
          {/* DO NOT DELETE THE NEXT TWO LINES! For dev purposes only. */}
          <button onClick={destroy}>destroy</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.handleClick}>close</button>
          <FreeShippingBar
            {...this.state}
          />
          {cartItems.length ? (
            cartItems.map(
              item =>
              <CartItems
                {...this.state}
                item={item}
                key={item.id}
                deleteItem={this.deleteItem}
                decrementItem={this.decrementItem}
                incrementItem={this.incrementItem}
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