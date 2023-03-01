import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../assets/swiper.min.css';

import { Pagination,Navigation } from "swiper";


export default function CollectionsSection () {
	const heroes = [
		{
			title: 'DISCOVER DR. JASON LEE-LLACER’S JOURNEY',
			description: 'Witness the experience of Dr. Jason Lee-Llacer as he travels to JuniperCare Thermal Center in France, where a team of eight dermatologists utilizes JuniperCare Thermal Spring Water, a crucial component in our skincare products, to treat a range of skin conditions.',
			video: 'sV4I-IMtBn0'
		},
		{
			title: 'DISCOVER CASEY’S JOURNEY',
			description: 'Watch 8-year-old Casey’s journey to the Thermal Center',
			video: 'FaESlKIn6-Y'
		},
		{
			title: 'DISCOVER DR. JASON LEE-LLACER’S JOURNEY',
			description: 'Witness the experience of Dr. Jason Lee-Llacer as he travels to JuniperCare Thermal Center in France, where a team of eight dermatologists utilizes JuniperCare Thermal Spring Water, a crucial component in our skincare products, to treat a range of skin conditions.',
			video: 'sV4I-IMtBn0'
		},
		{
			title: 'DISCOVER CASEY’S JOURNEY',
			description: 'Watch 8-year-old Casey’s journey to the Thermal Center',
			video: 'FaESlKIn6-Y'
		},
		{
			title: 'DISCOVER DR. JASON LEE-LLACER’S JOURNEY',
			description: 'Witness the experience of Dr. Jason Lee-Llacer as he travels to JuniperCare Thermal Center in France, where a team of eight dermatologists utilizes JuniperCare Thermal Spring Water, a crucial component in our skincare products, to treat a range of skin conditions.',
			video: 'sV4I-IMtBn0'
		}
	]
	return(
		<section className="my-20 sm:my-28 lg:my-52">
			<div className="container grid lg:grid-cols-2 gap-7 lg:gap-12 mb-7 lg:mb-12">
				<h2>INSPIRED BY HEROES</h2>
				<p className="uppercase">At the core of our brand is the goal of improving your life through skincare. We understand that each person's journey is unique. Our SkinStories, shared by members of the JuniperCare community, are firsthand accounts of life-altering dermatological care, from treatments received at our Thermal Center to at-home skincare regimens.</p>
			</div>
			<div className="pl-5 container-left lg:flex gap-10">
				<div className="flex flex-col mb-10 lg:mb-0 lg:h-[450px] gap-5">
					<div className="swiper-navigation flex items-center gap-10 lg:gap-0 lg:justify-between">
						<div className="swiper-button-prev group cursor-pointer -scale-x-100">
							<svg width="60" height="26" viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M55.6409 11.9398L45.9443 2.16667L47.5979 0.5L60 13L47.5979 25.5L45.9443 23.8333L55.4061 14.2969L0 14.2969V11.9398L55.6409 11.9398Z" className="fill-gray group-hover:fill-textColor transition-all"/>
							</svg>
						</div>
						<div className="swiper-button-next group cursor-pointer">
							<svg width="60" height="26" viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M55.6409 11.9398L45.9443 2.16667L47.5979 0.5L60 13L47.5979 25.5L45.9443 23.8333L55.4061 14.2969L0 14.2969V11.9398L55.6409 11.9398Z" className="fill-gray group-hover:fill-textColor transition-all"/>
							</svg>
						</div>
					</div>
					<div className="swiper-pagination w-[160px] text-5xl flex gap-5 mt-auto"></div>
				</div>
				<Swiper
					spaceBetween={20}
					slidesPerView={1.2}
					autoHeight={true}
					breakpoints={{
						1024: {
							slidesPerView: 1.7,
						},
					}}
					pagination={{
						el: '.swiper-pagination',
						type: 'custom',
						renderCustom: function (swiper, current, total) {
							return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
						}
					}}
					navigation={{
						nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
					}}
					modules={[Pagination, Navigation]}
				>
					{
						heroes.map(({ title, video, description }, i) => (
							<SwiperSlide key={i}>
								<iframe
									id="ytplayer"
									className="object-cover w-full h-[450px]"
									type="text/html"
									width="100%"
									height="360"
									src={`https://www.youtube.com/embed/${video}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
									frameBorder="0"
									title="youtube video"
								></iframe>
								<h3 className="my-5 uppercase">{title}</h3>
								<p>{ description }</p>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	)
}