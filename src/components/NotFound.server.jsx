import Layout from "./layout/Layout.server"

export default function NotFound(){
	return(
		<Layout>
			<div className="container py-20 text-center">
				<h1 className="text-3xl font-bold">404</h1>
				<p>page not found</p>
			</div>
		</Layout>
	)
}