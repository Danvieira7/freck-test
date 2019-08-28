import React, { Component } from "react";

export default class CheckoutBtn extends Component {
  constructor(props){
    super(props);

  }
  handleClick = () =>{
    this.props.handleCheckout()
  }
render(){
  return (
    <div id="checkout-btn">
      <button onClick={this.handleClick}>Checkout</button>
      <style jsx>{`
       
      `}</style>
    </div>
  );
}
}