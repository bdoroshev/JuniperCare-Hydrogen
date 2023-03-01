import { Image } from "@shopify/hydrogen";
import heroImage from "../../../assets/index/hero-image.jpg"

const HeroSection = () => (
	<section className="h-[500px] sm:h-[800px] w-full relative bg-black/60">
		<Image src={heroImage} width="100%" height="auto" alt="hero-image" className="absolute w-full h-full object-cover mix-blend-overlay" />
		<div className="text-white flex flex-col justify-center container h-full">
			<h1 className="font-bold max-w-xl text-2xl sm:text-5xl uppercase">Dermatology that can transform your life if you have sensitive skin.</h1>
			<p className="max-w-sm uppercase mt-5">At JuniperCare, we don't just see skin, we see individuals - individuals who are worth advocating for, pushing the boundaries for, and taking risks for.</p>
		</div>
	</section>
)

export default HeroSection