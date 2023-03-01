import { Image } from "@shopify/hydrogen";

import gift from '../../assets/index/icon-gift.png'
import routine from '../../assets/index/icon-routine.png'
import shipping from '../../assets/index/icon-shipping.png'
import save from '../../assets/index/icon-save.png'
import expert from '../../assets/index/icon-expert.png'

export default function AdvantagesSection () {
	const advantages = [
		{
			title: 'access to exclusive rewards program',
			image: gift
		},
		{
			title: 'Take our routine finder quiz',
			image: routine
		},
		{
			title: 'Enjoy free shipping on orders over $45',
			image: shipping
		},
		{
			title: 'replenish & save option',
			image: save
		},
		{
			title: 'EXPERT ADVICE',
			image: expert
		}
	]
	return(
		<section className="flex flex-wrap lg:flex-nowrap items-center justify-between container gap-5 lg:gap-12 mt-10 mb-20 sm:mt-16 sm:mb-28 lg:mt-32 lg:mb-50">
			{
				advantages.map(({image, title}, i) => (
					<div className="flex items-center gap-5 max-w-[250px] text-sm" key={i}>
						<Image src={image} width="100%" height="auto" alt={title} className="max-w-[45px]" />
						<h4 className="uppercase">{title}</h4>
					</div>
				))
			}
		</section>
	)
}