import {
	ProductOptionsProvider,
	useProductOptions,
	Image,
	ProductPrice,
	AddToCartButton
} from '@shopify/hydrogen'

import { Drawer, useDrawer } from '../../layout/Drawer.client';
import { CartDetails } from "../../layout/CartDetails.client";

export default function ProductDetails({ product, okendoRating }) {
	const { media } = product;

	return(
		<ProductOptionsProvider data={ product } >
			<div className="grid lg:grid-cols-2 gap-5 sm:gap-10 lg:gap-14">
				<Image data={ media.nodes[0].image } className="object-cover w-full h-full max-h-[500px]" />
				<ProductForm product={ product } okendoRating={ okendoRating } />
			</div>
		</ProductOptionsProvider>
	)
}

function ProductForm({ product, okendoRating }) {
	const { isOpen, openDrawer, closeDrawer } = useDrawer();

	const { title, descriptionHtml } = product;
	const { selectedVariant } = useProductOptions();
	const isOutOfStock = !selectedVariant?.availableForSale || false;
	
	return(
		<div>
			{okendoRating}
			<h1 className="h2">{ title }</h1>
			<ProductPrice
				className="my-5 lg:my-10 text-2xl"
				withoutTrailingZeros
				data={ product }
				variantId={ selectedVariant.id }
			/>
			<div className="product-description" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
			
				<AddToCartButton className="button mt-10" disabled={isOutOfStock} onClick={openDrawer}>
					{isOutOfStock ? 'Sold Out' : 'Add to Cart'}
				</AddToCartButton>
				<Drawer open={isOpen} onClose={closeDrawer}>
					<div className="grid">
						<Drawer.Title>
							<h2 className="sr-only">Cart Drawer</h2>
						</Drawer.Title>
						<CartDetails onClose={closeDrawer} />
					</div>
				</Drawer>
		</div>
	)
}