import React, { Component } from 'react';
import Link from 'next/link';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		}
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover() {
		this.setState({hover: !this.state.hover})
	}
	render() {
		const {product} = this.props;
		const rawJson = product.short_description;
		const productDescription = rawJson.replace(/(<([^>]+)>)/ig,"");
		const toggleImg = {
			opacity: this.state.hover ? '0' : '1',
			cursor: this.state.hover ? 'pointer' : '',
			transition: this.state.hover ? 'filter .6s, opacity .6s, transform .6s, -webkit-filter .6s, -webkit-transform .6s' : ''
		}
		const outOfStock = {
			opacity: product.in_stock ? '0' : '1'
		}
		return (
			<div className="product-container">
				<div className="product-image">
					<div className="out-of-stock" style={outOfStock}>
						OUT OF STOCK
					</div>
					<Link
						href={`/product`}
						as={`/product/${product.slug}`}
					>
						<img
							src={product.images[0].src}
							alt="Product image"
							style={toggleImg}
							onMouseEnter={this.toggleHover}
							onMouseLeave={this.toggleHover}
						/>
					</Link>
				</div>
				<div className="product-heading">
					<h3>{product.name}</h3>
					<h5 className="product-description">{productDescription}</h5>
					<button onClick={() => console.log(`${product.id} added to cart!`)}>${product.price} — ADD</button>
				</div>
				<style jsx>{`
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
						text-align: center;
						text-transform: uppercase;
					}
					.product-description {
						line-height: 20px;
					}
					button {
						background-color: #A73E24;
						color: #fff;
						width: 100%;
						max-width: 350px;
						padding: 9px 15px;
						border: none;
						margin-bottom: 10px;
					}
					button:focus {
						outline: 0;
					}
					@media only screen and (max-width: 420px) {
						.product-container {
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
							width: 150px;
							padding: 10px;
						}
						img, .product-image {
							max-width: 150px;
							max-height: 150px;
						}
						.out-of-stock {
							margin-top: -10px;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default ProductList;