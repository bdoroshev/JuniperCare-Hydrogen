import Layout from "../components/layout/Layout.server"

import HeroSection from "../components/sections/about/HeroSection.client"
import CommittedSection from "../components/sections/about/CommittedSection.client"
import FounderSection from "../components/sections/about/FounderSection.client"
import DermatologistSection from "../components/sections/about/DermatologistSection.client"
import LinksSection from "../components/sections/about/LinksSection.server"
import MissionSection from "../components/sections/about/MissionSection.server"
import HeroesSlider from "../components/sections/about/HeroesSlider.client"

export default function About() {
	return (
		<Layout>
			<HeroSection />
			<CommittedSection />
			<FounderSection />
			<DermatologistSection />
			<HeroesSlider />
			<LinksSection />
			<MissionSection />
		</Layout>
  )
}