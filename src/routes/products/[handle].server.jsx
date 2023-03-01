import { useShopQuery, gql, CacheLong, useRouteParams, Seo } from "@shopify/hydrogen"
import Layout from "../../components/layout/Layout.server";
import { Suspense } from 'react';

import ProductDetails from "../../components/sections/product/ProductDetails.client";
import AdvantagesSection from "../../components/sections/Advantages.client"
import DermatologistSection from "../../components/sections/about/DermatologistSection.client";
import CollectionsSection from "../../components/sections/index/CollectionsSlider.client";
import NotFound from '../../components/NotFound.server';

import {
  OkendoReviewsWidget,
  OkendoStarRating,
} from '@okendo/shopify-hydrogen';

export default function Product() {

	const { handle } = useRouteParams();

	const { data: { product } } = useShopQuery({
		query: PRODUCT_QUERY,
		cache: CacheLong,
		variables: {
			handle
		}
	})

	const {data: { collections: { nodes: collections } }} = useShopQuery({
		query: CollectionsQuery,
		cache: CacheLong,
		preload: true
	})

	if (!product) {
		return(
			<NotFound />
		)
	} else{
		return (
			<Layout>
				<Suspense>
					<Seo type="product" data={product} />
				</Suspense>
				<div className="mt-10 container">
					<ProductDetails okendoRating={<OkendoStarRating productId={product.id} />} product={product} />
				</div>
				<AdvantagesSection />
				<DermatologistSection />
				<OkendoReviewsWidget productId={product.id} />
				<Suspense>
					<CollectionsSection collections={collections} />
				</Suspense>
			</Layout>
		)
	}
}

const CollectionsQuery = gql`
	query Collections {
		collections (first: 3) {
			nodes{
				id
				title
				handle
				image{
					url
					width
					height
				}
			}
		}
	}
`

const PRODUCT_QUERY = gql`
  fragment MediaFields on Media {
    mediaContentType
    alt
    previewImage {
      url
    }
    ... on MediaImage {
      id
      image {
        url
        width
        height
      }
    }
    ... on Video {
      id
      sources {
        mimeType
        url
      }
    }
    ... on Model3d {
      id
      sources {
        mimeType
        url
      }
    }
    ... on ExternalVideo {
      id
      embedUrl
      host
    }
  }
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      media(first: 7) {
        nodes {
          ...MediaFields
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`;