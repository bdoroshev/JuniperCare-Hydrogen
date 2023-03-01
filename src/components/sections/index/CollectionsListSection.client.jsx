import { Image, Link } from "@shopify/hydrogen";

import skincare1 from "../../../assets/index/skincare.jpg";
import skincare2 from "../../../assets/index/skincare-2.jpg";
import skincare3 from "../../../assets/index/skincare-3.jpg";

const CollectionsListSection = () => (
	<section className="container my-20 sm:my-28 lg:my-52">
		<div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1.1fr_1fr] gap-7">
			<Image src={skincare1} width="100%" height="auto" alt="image" className="hidden lg:block" />
			<Image src={skincare2} width="100%" height="auto" alt="image" />
			<ul className="space-y-6 text-gray text-[20px] sm:mt-9">
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/skincare">SKINCARE</Link></li>
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/skin-features">SKIN FEATURES</Link></li>
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/sun-care">SUN CARE</Link></li>
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/makeup">MAKEUP</Link></li>
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/gift-sets">GIFT SETS</Link></li>
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/expert-advice">EXPERT ADVICE</Link></li>
				<li className="hover:text-textColor hover:text-3xl hover:pb-6 hover:border-b hover:border-gray transition-all"><Link to="/collections/la-roche-posay-services">JUNIPERCARE SERVICES</Link></li>
			</ul>
			<Image src={skincare3} width="100%" height="auto" alt="image" className="hidden lg:block" />
		</div>
	</section>
)

export default CollectionsListSection