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
      <div className="item">
        <div className="imgComp">
          <i className="far fa-times-circle"></i>
          <img className="img" src={item.image}></img>
        </div>
        <div className="descComp">
          <p className="name"> {item.name} </p>
          <p className="short"> {item.short_description} </p>
          <p className="price"> ${item.price} </p>
        </div>
        <div className="qtyComp">
          <button>-</button>
          <input type="text" placeholder={item.quantity}/>
          <button>+</button> 
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
          input{
            color: black;
            width: 25px;
            height: 19px;
            border: gray 2px solid;
            text-align: center;
            margin-top: -35px;
          }
          button {
            margin-top: -35px;
            width: 25px;
            height: 19px;
            background-color: gray;
            color: white;
            border: gray 2px solid;
            font-size: 13px;
          }
          .far {
            margin-left: -47px;
            margin-top: -15px;
            font-size: 15px;
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