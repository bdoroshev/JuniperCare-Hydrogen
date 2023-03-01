import { Image, Link, useShopQuery, gql, CacheLong } from "@shopify/hydrogen";

const MissionSection = () => {

	const {data: { blog: { articles: { nodes: articles } } }} = useShopQuery({
		query: ArticlesQuery,
		cache: CacheLong,
		preload: true
	})

	return(
		<section className="container my-20 sm:my-28 lg:my-52">
			<h2>OUR MISSION</h2>
			<hr className="border-lightGray mt-7" />
			{
				articles.map((article, i) => {
					const {title, handle, excerpt, image} = article;

					return(
						<div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-14 py-3 border-b border-lightGray" key={i}>
							<Image data={image} alt={title} className="w-full object-cover h-[300px] lg:max-w-[570px]" />
							<div>
								<h3 className="text-2xl font-bold uppercase">{title}</h3>
								<p className="uppercase my-3">{excerpt}</p>
								<Link to={`blog/mission/${handle}`} className="text-sm inline-block text-gray hover:text-textColor transition-all">DISCOVER MORE +</Link>
							</div>
						</div>
					)
				})
			}
		</section>
	)
}

const ArticlesQuery = gql`
	query Articles {
		blog(handle: "mission"){
			articles(first: 2){
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

export default MissionSection