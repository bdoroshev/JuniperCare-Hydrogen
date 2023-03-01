import { Link, Image } from "@shopify/hydrogen";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../assets/swiper.min.css';

export default function TrendsSection ({ articles }) {
	return(
		<section className="container pr-0 lg:pr-5 my-20 sm:my-28 lg:my-52">
			<h2 className="font-bold text-2xl sm:text-[40px] mb-7 lg:mb-10">WHATS TRENDING</h2>
			<Swiper
				spaceBetween={20}
				slidesPerView={1.2}
				autoHeight={true}
				breakpoints={{
					1024: {
						slidesPerView: 3,
					},
				}}
			>
				{
					articles.map(({ title, handle, image, excerpt }, i) => (
						<SwiperSlide key={i}>
							<Image data={image} alt={title} className="object-cover h-[500px]" />
							<h3 className="mt-3 mb-2 uppercase">{title}</h3>
							<p className="text-sm">{excerpt}</p>
							<Link to={`blog/${handle}`} className="text-sm inline-block mt-[30px] text-gray hover:text-textColor transition-all">DISCOVER NOW +</Link>
						</SwiperSlide>
					))
				}
			</Swiper>
		</section>
	)
}