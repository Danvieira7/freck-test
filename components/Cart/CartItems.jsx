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
        <div>
          <img className="img" src={item.image}></img>
        </div>
        
        <div className="desc">
          <p>
          {item.name}
          </p>
          <br/>
          <p>
          {item.short_description}
          </p>
          ${item.price}
        </div>
        
        <div className="qty">
          <button>+</button>
          <input type="text" placeholder={item.quantity}/>
          <button>-</button> 
        </div>

        <style jsx>{`
          .item {
            background-color: rgb(244, 245, 243);
          }
          .img {
            max-height: 60px;
            max-width: 60px;
            width: 100%;
            width: 100%;
            border-radius: 50%;
          }
        `}</style>
      </div>
    )
  }
}