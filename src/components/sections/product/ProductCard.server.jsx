import { Link, Image, Money } from "@shopify/hydrogen";

export default function ProductCard({ product }) {

	const { handle, title, featuredImage, priceRange: { minVariantPrice: price }} = product;

  return (
		<Link to={`/products/${handle}`}>
			<div className="bg-white overflow-hidden">
				<Image data={featuredImage} alt={title} className="hover:scale-110 transition-all object-center" />
			</div>
			<h3 className="text-sm uppercase my-2">{title}</h3>
			<Money withoutTrailingZeros data={price} className="text-sm uppercase" />
		</Link>
  );
}