import { Image } from "@shopify/hydrogen";

import expertTips from "../../../assets/index/expert-tips.jpg";

const ExpertSection = () => (
	<section className="container my-20 sm:my-28 lg:my-52">
		<div className="grid lg:grid-cols-[2fr_1fr] gap-5 lg:gap-7 items-center">
			<div className="relative">
				<h2 className="font-bold text-3xl sm:text-6xl absolute top-1/2 -translate-y-1/2 left-3 sm:left-0">EXPERT TIPS <br className="sm:hidden"/>& <br className="hidden sm:block"/>ADVICE</h2>
				<Image src={expertTips} width="100%" height="auto" alt="Expert" className="sm:pl-[60px] h-[250px] sm:h-[500px] object-cover object-center" />
			</div>
			<p className="text-sm sm:pl-[60px] lg:pl-0">Discover our skincare education center that was created in collaboration with dermatologists. It provides a wealth of information and advice on topics such as acne, sun protection, eczema, skin microbiome, and more!</p>
		</div>
	</section>
)

export default ExpertSection