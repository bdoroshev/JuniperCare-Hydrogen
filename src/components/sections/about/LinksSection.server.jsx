import { Link } from "@shopify/hydrogen";

const LinksSection = () => {
	const links = [
		{
			title: "Ingredients used in an effective concentration",
			url: "/blog/blog-post"
		},
		{
			title: "SUSTAINABLE DEVELOPMENT",
			url: "/blog/inside-our-formulas"
		},
		{
			title: "An expert in the field of skin microbiome",
			url: "/blog/find-your-moisturizer-match"
		}
	]
	return(
		<section className="mt-7 sm:mt-14 mb-20 sm:mb-28 lg:mb-52">
			{
				links.map(({ title, url }, i) => (
					<div className="group hover:bg-lightGray transition-all" key={i}>
						<Link to={url} className="container flex justify-between items-center gap-8 sm:gap-20 py-10 sm:py-12">
							<p className="text-gray group-hover:text-textColor uppercase text-xl sm:text-2xl transition-all">{ title }</p>
							<svg width="60" height="26" viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M55.6409 11.9398L45.9443 2.16667L47.5979 0.5L60 13L47.5979 25.5L45.9443 23.8333L55.4061 14.2969L0 14.2969V11.9398L55.6409 11.9398Z" className="fill-gray group-hover:fill-textColor transition-all"/>
							</svg>
						</Link>
					</div>
				))
			}
		</section>
	)
}

export default LinksSection