import { useShopQuery, gql, CacheLong } from "@shopify/hydrogen";
import { Suspense } from "react";

import Layout from "../components/layout/Layout.server"

import HeroSection from "../components/sections/index/HeroSection.client"
import AdvantagesSection from "../components/sections/Advantages.client"
import CompanySection from "../components/sections/index/CompanySection.client"
import CollectionsSection from "../components/sections/index/CollectionsSlider.client"
import ExpertSection from "../components/sections/index/ExpertSection.client"
import CollectionsListSection from "../components/sections/index/CollectionsListSection.client"
import TrendsSection from "../components/sections/index/TrendsSlider.client"

export default function Home() {
	const {data: { collections: { nodes: collections } }} = useShopQuery({
		query: CollectionsQuery,
		cache: CacheLong,
		preload: true
	})

	const {data: { blog: { articles: { nodes: articles } } }} = useShopQuery({
		query: ArticlesQuery,
		cache: CacheLong,
		preload: true
	})

	return (
		<Layout>
			<HeroSection />
			<AdvantagesSection />
			<CompanySection />
			<Suspense>
				<CollectionsSection collections={collections} />
			</Suspense>
			<ExpertSection />
			<CollectionsListSection />
			<Suspense>
				<TrendsSection articles={articles} />
			</Suspense>
		</Layout>
  )
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

const ArticlesQuery = gql`
	query Articles {
		blog(handle: "journal"){
			articles(first: 3){
				nodes{
					title
					handle
					excerpt
					image{
						url
						width
						height
					}
				}
			}
		}
	}
`