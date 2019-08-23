import React, { Component } from 'react';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	toggleHover = () => {
		this.setState(function(prevState) {
			return {hover: !prevState.hover}
		})
	}

	handleClick = () => {
		this.props.handleAddToCart();
		this.props.toggleCart();
	}

	render() {
		const { product } = this.props;
		const rawJson = product.short_description;
		const productDescription = rawJson.replace(/(<([^>]+)>)/ig,"");
		const toggleImg = {
			opacity: this.state.hover ? '0' : '1',
			cursor: this.state.hover ? 'pointer' : '',
			transition: this.state.hover ? 'filter .6s, opacity .6s, transform .6s, -webkit-filter .6s, -webkit-transform .6s' : ''
		}
		const outOfStock = {
			opacity: product.stock_status === 'outofstock' ? '1' : '0'
		}
		return (
			<div className="product-container">
				<div className="product-image">
					<div className="out-of-stock" style={outOfStock}>
						OUT OF STOCK
					</div>
					<a href={`https://freckbeauty.com/product/${product.slug}`}>
						<img
							src={product.images[0].src}
							alt="Product image"
							style={toggleImg}
							onMouseEnter={this.toggleHover}
							onMouseLeave={this.toggleHover}
						/>
					</a>
				</div>
				<div className="product-heading">
					<a href={`https://freckbeauty.com/product/${product.slug}`}>
							<h3>{product.name}</h3>
							<h5 className="product-description">{productDescription}</h5>
					</a>
					{/* <a href={`https://freckbeauty.com/cart/?add-to-cart=${evt}&quantity=1`}> */}
						<button
							onClick={this.handleClick}
						>
							${product.price} — ADD
						</button>
					{/* </a> */}
				</div>
				<style jsx>{`
					.product-container {
						margin: 0 20px;
					}
					img, .product-image {
						max-width: 450px;
						max-height: 450px;
					}
					.product-image {
						position: relative;
						background: url('${product.images[1].src}');
						background-size: cover;
						font-weight: bold;
					}
					.out-of-stock {
						position: absolute;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: -35px;
						background-color: rgba(255, 255, 255, 0.88);
						height: 14%;
						width: 100%;
						opacity: 0;
						top: 50%;
					}
					.product-heading {
						width: 100%;
						text-align: center;
						text-transform: uppercase;
					}
					.product-description {
						line-height: 20px;
					}
					a {
						text-decoration: none;
						color: #000;
					}
					button {
						background-color: #A73E24;
						color: #fff;
						width: 100%;
						padding: 9px 15px;
						border: none;
						margin-bottom: 10px;
					}
					button:focus {
						outline: 0;
					}
					button:hover {
						cursor: pointer;
					}
					@media only screen and (max-width: 420px) {
						.product-container {
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
							max-width: 125px;
						}
						img, .product-image {
							max-width: 125px;
							max-height: 125px;
						}
						.out-of-stock {
							margin-top: -10px;
						}
					}
					@media only screen and (min-width: 421px) and (max-width: 820px) {
						.product-container {
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
							width: 250px;
							margin: 0 20px;
						}
						img, .product-image {
							max-width: 250px;
							max-height: 250px;
						}
					}
				`}</style>
			</div>
		);
	}
}