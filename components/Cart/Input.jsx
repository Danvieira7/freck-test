import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state= {
      quantity: this.props.item.quantity
    }
  }
  render(){
    console.log(this.props)
    return(
      <div
        type="text"
        min="1"
        placeholder={this.state.quantity}
      >
        {this.state.quantity}
      </div>
    );
  };
}