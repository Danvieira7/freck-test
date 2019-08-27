import React, { Component } from 'react';
import { list, remove } from 'cart-localstorage';

export default class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      decrement: this.props.item.price * this.props.item.quantity
    }
  }

  handleDelete = () => {
    this.props.deleteItem();
    this.setState(function(prevState) {
      return {
        deleted: !prevState.deleted,
      }
    })
  }

  handleDecrement = () => {
    let quantity = this.props.item.quantity;
    if ((quantity - 1) === 0 ) {
      remove(this.props.item.id);
      this.setState(function(prevState) {
        return {
          deleted: !prevState.deleted,
        }
      })
    } else {
      this.props.decrementItem();
      this.setState({
        list: list()
      })
      this.props.item.quantity-- - 1;
    }
  }

  handleIncrement = () => {
    this.props.incrementItem();
    this.setState({
      list: list()
    })
    this.props.item.quantity++ + 1;
  }

  render() {
    let { item } = this.props;
    const style = {display: this.state.deleted ? 'none' : 'flex' };
    let quantity = item.quantity;
    return (
        <div
          className="item"
          style={style}
        >
          <div className="imgComp">
            <i
              className="far fa-times-circle"
              onClick={this.handleDelete}
            >
            </i>
            <img className="img" src={item.image}></img>
          </div>
          <div className="descComp">
            <p className="name"> {item.name} </p>
            <p className="short"> {item.short_description} </p>
            <p className="price"> ${item.price} </p>
          </div>
          <div className="qtyComp">
            <button onClick={this.handleDecrement}>-</button>
            <div
              id="input"
              type="text"
              min="1"
              placeholder={quantity}
            >
              {quantity}
            </div>
            <button onClick={this.handleIncrement}>+</button> 
          </div>
        <style jsx>{`
          .item {
            background-color: rgb(244, 245, 243);
            display: flex;
            height: 168px;
          }
          .name {
            font-family: Arial;
            font-size: 14px;
            font-weight: bold;
            font-style: italic;
          }
          .short, .price {
            font-family: Arial;
            font-size: 12px;
            font-style: italic;
          }
          #input {
            color: black;
            width: 25px;
            height: 19px;
            border: #BAB9B3 2px solid;
            text-align: center;
            margin-top: -35px;
          }
          input:focus{
            outline: none;
          }
          ::placeholder {
            color: #000;
          }
          button {
            margin-top: -35px;
            width: 25px;
            height: 19px;
            background-color: #BAB9B3;
            color: white;
            border: #BAB9B3 2px solid;
            font-size: 13px;
          }
          button:focus {
            outline: none;
          }
          .far {
            margin-left: -47px;
            margin-top: -15px;
            font-size: 15px;
            color: #BAB9B3;
          }
          .imgComp {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 30%
          }
          .img {
            display: flex;
            justify-content: center;
            max-height: 60px;
            max-width: 60px;
            width: 100%;
            width: 100%;
            border-radius: 50%;
          }
          .descComp {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            width: 40%
          }
          .qtyComp {
            display: flex;
            align-items: center;
            width: 30%
            height: 70%;
            top: 50px;
          }
        `}</style>
      </div>
    )
  }
}