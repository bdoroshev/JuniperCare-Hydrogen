import { Link, Image } from "@shopify/hydrogen";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../assets/swiper.min.css';

export default function CollectionsSection ({ collections }) {
	return(
		<section className="container pr-0 lg:pr-5 my-20 sm:my-28 lg:my-52">
			<div className="grid lg:grid-cols-[2fr_1fr] gap-5 md:gap-10 lg:gap-7 mb-7 lg:mb-10">
				<h2>OUR PRODUCTS</h2>
				<p className="text-sm pr-5 lg:pr-0">At JuniperCare, we take our formulation charter for each product to the next level, surpassing international cosmetics regulations. Our strict approach to product development is driven by our passion for delivering the best skincare possible. We meticulously evaluate every step of the process to ensure that our products are effective and safe, and our efforts are supported by continuous advances in dermatological research.</p>
			</div>
			<Swiper
				spaceBetween={20}
				slidesPerView={1.2}
				breakpoints={{
					1024: {
						slidesPerView: 3,
					},
				}}
			>
				{
					collections.map(({ id, title, handle, image }) => (
						<SwiperSlide key={id}>
							<Link className="group" to={`collections/${handle}`}>
								<Image data={image} alt={title} className="object-cover h-[320px] group-hover:lg:h-[500px] transition-all duration-300" />
								<h3 className="font-bold text-[20px] uppercase mt-3 group-hover:text-3xl transition-all duration-300">{title}</h3>
							</Link>
						</SwiperSlide>
					))
				}
			</Swiper>
		</section>
	)
}