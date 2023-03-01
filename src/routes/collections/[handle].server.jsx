import { useShopQuery, CacheLong, gql, useRouteParams, Image } from '@shopify/hydrogen';
import { Suspense } from 'react';

import Layout from '../../components/layout/Layout.server';

import ProductCard from '../../components/sections/product/ProductCard.server'

import gradient from '../../assets/gradient.svg'

export default function Collection(){

	const { handle } = useRouteParams();

	const data = useShopQuery({
		query: PRODUCTS_QUERY,
		cache: CacheLong(),
		preload: true,
		variables: {
			handle
		}
  });

	const { data: { collection: collection } } = data;
	const { products: { nodes } } = collection;

	const products = nodes.map(product => (
		<ProductCard product={product} />
	))

	return (
		<Layout>
			<Suspense>
				<div className="container my-10 lg:my-20">
					<div className="text-center max-w-3xl mx-auto mb-20 relative">
						{/* <Image src={gradient} width="100%" height="auto" alt="gradient" className="-z-10 absolute w-[700px] h-[300px] top-1/2 -translate-y-1/2" /> */}
						<h1 className="text-3xl sm:text-[40px] font-bold mb-10 uppercase">{ collection.title }</h1>
						<p className="text-sm">{ collection.description }</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-y-14">
						{ products }
					</div>
				</div>
			</Suspense>
		</Layout>
	)
}

const PRODUCTS_QUERY = gql`
	query CollectionDetails($handle: String) {
		collection(handle: $handle) {
			id
			title
			description
			seo {
				title
				description
			}
			products(first: 9){
				nodes{
					title
					handle
					featuredImage{
						url
						width
						height
					}
					priceRange{
						minVariantPrice{
							amount
							currencyCode
						}
					}
				}
			}
		}
	}
`;