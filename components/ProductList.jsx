import React, { Component } from 'react';
import Link from 'next/link';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover() {
		this.setState({hover: !this.state.hover})
	}
	render() {
		const {product} = this.props;
		let toggleImg;
		if (this.state.hover) {
			toggleImg = {opacity: '0', cursor: 'pointer', transition: 'filter .6s, opacity .6s, transform .6s, -webkit-filter .6s, -webkit-transform .6s'}
		} else {
			toggleImg = {opacity: '1'}
		}
		const rawJson = product.short_description;
		const productDescription = rawJson.replace(/(<([^>]+)>)/ig,"");
		return (
			<div>
				<div className="product-image">
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
					<button>${product.price} — ADD</button>
				</div>
				<style jsx>{`
					img, .product-image {
						max-width: 450px;
						max-height: 450px;
					}
					.product-image {
						background: url('${product.images[1].src}');
						background-size: cover;
					}
					.product-heading {
						text-align: center;
						text-transform: uppercase;
					}
					button {
						background-color: #A73E24;
					}
				`}</style>
			</div>
		);
	}
}

export default ProductList;