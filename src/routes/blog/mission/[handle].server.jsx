import { useShopQuery, gql, Seo, useRouteParams, Image, useLocalization } from '@shopify/hydrogen';
import Layout from "../../../components/layout/Layout.server";
import { Suspense } from 'react';
import NotFound from '../../../components/NotFound.server';

export default function Article() {

	const { handle } = useRouteParams();

	const data = useShopQuery({
		query: QUERY,
		variables: {
			handle
		}
  });

	if (!data.data.blog.articleByHandle) {
		return(
			<NotFound />
		)
	} else{
		
		const { title, publishedAt, image, contentHtml, authorV2: { name: author }} = data.data.blog.articleByHandle;

		const {
			language: {isoCode: languageCode},
			country: {isoCode: countryCode}
		} = useLocalization();
		
		const formattedDate = new Intl.DateTimeFormat(
			`${languageCode}-${countryCode}`,
			{
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}
		).format(new Date(publishedAt))
		
		return (
			<Layout>
				<Suspense>
					<Seo type="article" data={data.data.blog.articleByHandle} />
				</Suspense>
				<div className="article-page container mt-10 sm:mt-20 mb-20 sm:mb-28 lg:mb-52">
					<div className="text-center">
						<h1 className="font-bold text-2xl">{title}</h1>
						<p className="uppercase mt-5 mb-10">{formattedDate} {author}</p>
					</div>
					<article>
						<Image data={image} alt={title} className="w-full object-cover max-h-[500px] mb-20 sm:mb-28"/>
						<div dangerouslySetInnerHTML={{ __html: contentHtml }} className="max-w-[630px] ml-auto text-sm"></div>
					</article>
				</div>
			</Layout>
		);
	}
}

const QUERY = gql`
	query article($handle: String!) {
		blog(handle: "mission"){
			articleByHandle(handle: $handle){
				title
				publishedAt
				contentHtml
				authorV2{
					name
				}
				image{
					width
					height
					url
				}
			}
		}
	}
`;