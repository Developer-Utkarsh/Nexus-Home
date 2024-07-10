import CanvasCursor from "@/components/canvas-cursor";
import NexusNavbar from "@/components/Navbar";

import { FadeText } from "@/components/magicui/fade-text";
import { BentoGridSecondDemo } from "@/components/Complete-Grid";

export default function Home() {
	return (
		<>
			<div className='z-30'>
				<CanvasCursor />
			</div>

			<section className=' w-full flex-1 flex-col relative'>
				<NexusNavbar />
				<div className='absolute inset-0 -z-10 h-full w-full items-center  py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%,#000_70%)]'></div>
				<div className='justify-center md:items-center z-50 max-sm:pt-32 max-sm:pb-12 flex w-full md:h-screen flex-col'>
					<h2 className='text-white  font-semibold text-center'>
						<FadeText
							className='text-white font-medium text-center'
							direction='up'
							framerProps={{
								show: {
									transition: { delay: 0.1, duration: 1 },
								},
							}}
							text='Meet, Collaborate, Succeed Meetings'
						/>
					</h2>
				</div>
			</section>
			<section className='[background:radial-gradient(160%_160%_at_50%_90%,#000_40%,#63e_74.75%)] inset-0 -z-30 h-screen w-full'></section>
		</>
	);
}
