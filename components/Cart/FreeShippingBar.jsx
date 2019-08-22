import React, { Component } from 'react';
import { total } from 'cart-localstorage';

export default class FreeShippingBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qualifies: false
    }
  }

  componentDidMount() {
    let spend = total();
    if (spend >= 75) {
      this.setState(function(prevState, props) {
        return {qualifies: !prevState.qualifies}
      })
    }
  }

  render() {
    let spend = total();
    return (
      <>
        <p>You're on your way to free shipping!</p>
        <div>
          This is the Free Shipping Bar div.
        </div>
        <br/>
        <span id="spend">
          ${spend}
        </span> of $75
        <br/><br/>
      </>
    );
  }
}