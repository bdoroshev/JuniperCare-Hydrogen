import { Image } from "@shopify/hydrogen";

import heroImage from "../../../assets/about/hero-image.jpg";

const HeroSection = () => (
	<section className="mt-7 sm:mt-14 mb-20 sm:mb-28 lg:mb-52">
		<div className="container flex flex-col lg:flex-row lg:justify-between gap-7 sm:gap-10 mb-7">
			<h1 className="font-bold text-3xl sm:text-6xl uppercase">ABOUT<br/>JuniperCare</h1>
			<p className="uppercase">
				We recognize that skin has a significant.<br/>
				We are aware that skin issues impact your everyday.<br/>
				People require solutions that are proportional.<br/>
				Skin issues, whether they are significant or minor.
			</p>
		</div>
		<Image src={heroImage} width="100%" height="auto" alt="About JuniperCare" />
	</section>
)

export default HeroSection