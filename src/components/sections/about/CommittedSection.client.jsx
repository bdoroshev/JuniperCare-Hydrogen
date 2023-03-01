import { Image } from "@shopify/hydrogen";

import committed1 from "../../../assets/about/committed-1.jpg";
import committed2 from "../../../assets/about/committed-2.jpg";
import committed3 from "../../../assets/about/committed-3.jpg";

const CommittedSection = () => (
	<section className="container my-20 sm:my-28 lg:my-52">
		<div className="grid lg:grid-cols-2 gap-7 lg:gap-12 mb-7 lg:mb-12">
			<h2 className="uppercase">We're dedicated<br/>to dermatology<br/>and innovation</h2>
			<p className="uppercase">Since its establishment in 2015, JuniperCare has been at the forefront of dermatology, working closely with dermatologists. The brand has conducted over 300 clinical studies on 10,000 patients, ranging from newborns to 90-year-olds, with diverse ethnic backgrounds and a variety of skin conditions such as acne, allergic skin, eczema, wounds, post-cancer treatment, and post-esthetic treatment.</p>
		</div>
		<div className="grid lg:grid-cols-2 gap-3 lg:gap-12">
			<Image src={committed1} width="100%" height="100%" alt="Expert" className="h-full object-cover object-center" />
			<div className="grid sm:grid-cols-2 gap-3">
				<div>
					<Image src={committed2} width="100%" height="auto" alt="Expert" className="h-[300px] object-cover object-center" />
					<p className="text-sm font-bold mt-5">
						8/10 UK Dermatologists recommend JuniperCare*
					</p>
				</div>
				<Image src={committed3} width="100%" height="auto" alt="Expert" className="h-[300px] object-cover object-center -order-1 sm:order-1" />
			</div>
		</div>
	</section>
)

export default CommittedSection