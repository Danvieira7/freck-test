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
    } else {
      return spend;
    }
  }

  handleTotal() {
    return total();
  }

  render() {
    return (
      <>
        <p>You're on your way to free shipping!</p>
        <div>
          This is the Free Shipping Bar div.
        </div>
        <br/>
        <span id="spend">
        {this.state.qualifies ? '$75' : '$' + this.handleTotal()}
        </span> of $75
        <br/><br/>
      </>
    );
  }
}