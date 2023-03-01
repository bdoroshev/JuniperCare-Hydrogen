import communityImage from '../../assets/community.jpg'

export default function Community() {
	return (
		<div className="h-[300px] sm:h-[450px] w-full relative bg-[87%] lg:bg-right bg-cover" style={{backgroundImage: `url('${communityImage}')`}}>
			<div className="flex flex-col justify-center container h-full">
				<h2 className="uppercase font-bold text-3xl sm:text-6xl">You are our community!</h2>
				<p className="text-sm mt-5 mb-10 max-w-[270px]">Gain exclusive access to expert content and connect with fellow community members to share experiences.</p>
				{/* <a href="https://community.laroche-posay.co.uk/" target="_blank" className="button text-white bg-textColor hover:bg-white hover:text-textColor">DISCOVER MORE</a> */}
			</div>
		</div>
	)
}