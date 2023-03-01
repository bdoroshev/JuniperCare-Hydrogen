import { Image, Link } from "@shopify/hydrogen";

import aboutImage from "../../../assets/index/about-company.png";

const CompanySection = () => (
	<section className="container text-center my-20 sm:my-28 lg:my-52 max-w-4xl">
		<h2>ABOUT COMPANY</h2>
		<p className="uppercase my-5 sm:my-10 lg:mb-14 text-sm sm:text-xl">As the leading dermocosmetic brand worldwide, we've been recommended <b className="text-2xl sm:text-3xl normal-case">by 30,000 dermatologists</b>. Our brand is built upon the values of courage, commitment, and love, which drives us to partner with <b className="text-2xl sm:text-3xl normal-case">dermatologists and experts</b> in designing innovative skincare solutions for delicate skin. We strive to be helpful to people by providing effective and <b className="text-2xl sm:text-3xl normal-case">reliable skincare products</b>.</p>
		<Image src={aboutImage} width="100%" height="auto" alt="ABOUT COMPANY" />
		<Link className="mx-auto mt-5 sm:mt-10 button" to="/about">Read More</Link>
	</section>
)

export default CompanySection