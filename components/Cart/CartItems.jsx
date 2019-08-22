import React, { Component } from 'react';

export default class CartItems extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    let { item } = this.props;
    return (
      <div>
        {item.name}
        <br/><br/>
        ${item.price}
        <br/><br/>
        Quantity: {item.quantity}
        <br/><br/>
      </div>
    )
  }
}