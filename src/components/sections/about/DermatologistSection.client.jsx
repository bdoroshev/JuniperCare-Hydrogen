import { Image } from "@shopify/hydrogen";

import dermatologist1 from "../../../assets/about/dermatologist-1.jpg";
import dermatologist2 from "../../../assets/about/dermatologist-2.jpg";
import dermatologist3 from "../../../assets/about/dermatologist-3.jpg";

const DermatologistSection = () => (
	<section className="container my-20 sm:my-28 lg:my-52">
		<div className="grid lg:grid-cols-2 gap-7 lg:gap-12 mb-7 lg:mb-12">
			<h2>DERMATOLOGIST<br/>BACKED SCIENCE</h2>
			<p className="uppercase">We collaborate with dermatologists to stay at the forefront of skincare science, leading the way in advanced topics such as skin microbiome. With over 750+ studies and 25 years of comprehensive research, we're dedicated to producing safe and effective products that are both developed and tested by dermatologists.</p>
		</div>
		<div className="grid lg:grid-cols-2 gap-7 lg:gap-12">
			<div className="grid sm:grid-cols-2 gap-7">
				<Image src={dermatologist1} width="100%" height="auto" alt="Expert" className="h-[350px] object-cover object-center" />
				<Image src={dermatologist2} width="100%" height="auto" alt="Expert" className="h-[350px] object-cover object-center" />
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1.5fr] gap-7">
				<p className="text-2xl uppercase">Explore the beginnings<br/> of origin<br/> dermatology</p>
				<Image src={dermatologist3} width="100%" height="auto" alt="Expert" className="h-[350px] object-cover object-center" />
			</div>
		</div>
	</section>
)

export default DermatologistSection