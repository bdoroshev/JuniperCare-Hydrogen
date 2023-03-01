import { useCart } from "@shopify/hydrogen"

export default function CartCounter() {

	const { totalQuantity } = useCart();

	if (totalQuantity === 0) {
		return null;
	}

	return (
		<span>({ totalQuantity })</span>
	)
}