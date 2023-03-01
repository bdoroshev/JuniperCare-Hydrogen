import Header from "./Header.client";
import Community from "./Community.client";
import Footer from "./Footer.server";

export default function Layout({children}) {
	return(
		<>
			<Header />
			<main>
				{children}
			</main>
			<Community />
			<Footer />
		</>
	)
}