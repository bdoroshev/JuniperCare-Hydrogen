import { Image } from "@shopify/hydrogen";

import founderImage from "../../../assets/about/founder.jpg";

const FounderSection = () => (
	<section className="container my-20 sm:my-28 lg:my-52">
		<div className="grid lg:grid-cols-2 gap-7 lg:gap-12 items-center">
			<Image src={founderImage} width="100%" height="100%" alt="Expert" className="h-full object-cover object-center order-1 lg:-order-1" />
			<div>
				<h3 className="uppercase text-2xl">We don't just see skin, we see people - people who are worth fighting for, innovating for, and daring for.</h3>
				<p className="text-lg my-7 sm:my-10">
					Skin is much more than a mere covering; it's a vital organ that plays a crucial role in people's lives and well-being. At JuniperCare, we view skin as a representation of the person and believe that they are worth fighting for and daring for.
					<br/><br/>
					We believe that nobody should be left out because of skin issues, variations, skin tones, or scars of life. Whether it's eczema, acne, skin aging, allergic reactions, or the skin side effects of cancer treatments, no challenge is too great for us. We're committed to pushing the boundaries of dermatology to make a difference in people's lives.
				</p>
				<span className="font-bold text-sm mb-1">Kate Machulina</span>
				<p className="text-xs">JuniperCare International General Manager</p>
			</div>
		</div>
	</section>
)

export default FounderSection