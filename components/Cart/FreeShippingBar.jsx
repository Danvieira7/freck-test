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
    console.log('did mount: '+ total());
    if (total() >= 75) {
      this.setState(function(prevState) {
        return {qualifies: !prevState.qualifies}
      })
    } else {
      return total();
    }
  }

  componentDidUpdate() {
    if (total() < 75) {
      this.setState(function(prevState) {
        return {qualifies: !prevState.qualifies}
      })
    }
  }
  
  handleTotal() {
    return total();
  }

  render() {
    return (
      <div id="container">
        {this.state.qualifies ? <p>You've unlocked free shipping!</p> : <p>You're on your way to free shipping!</p>}
        <div id="bar">
        </div>
        <br/>
        <span id="spend">
        {this.state.qualifies ? '$75' : '$' + this.handleTotal()}
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
}