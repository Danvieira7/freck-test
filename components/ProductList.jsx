import Link from 'next/link';

const ProductList = (props) => {
	const {product} = props;
	const rawJson = product.short_description;
	const productDescription = rawJson.replace(/(<([^>]+)>)/ig,"");
	return (
		<div>
			<Link
				href={`/product`}
				as={`/product/${product.slug}`}
			>
				<img
					src={product.images[0].src}
					alt="Product image"
				/>
			</Link>
			<div className="product-headings">
				<h3>{product.name}</h3>
				<h5>${product.price}</h5>
				<h5 className="product-description">{productDescription}</h5>
			</div>
			<style jsx>{`
				img {
					max-width: 450px;
				}
				.product-headings {
					text-align: center;
				}
				.product-headings {
					text-transform: uppercase;
				}
			`}</style>
		</div>
	);
}

export default ProductList;