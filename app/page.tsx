import CanvasCursor from "@/components/canvas-cursor";
import NexusNavbar from "@/components/Navbar";

import { FadeText } from "@/components/magicui/fade-text";

export default function Home() {
	return (
		<>
			<section className='h-screen w-full flex-1 flex-col'>
				<NexusNavbar />
				<div className='absolute inset-0 -z-10 h-full w-full items-center  py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
					<CanvasCursor />
				</div>
				<div className='justify-center items-center z-50 flex w-full h-screen flex-col'>
					<h2 className='text-white  font-semibold text-center'>
						<FadeText
							className='text-white font-medium text-center'
							direction='up'
							framerProps={{
								show: {
									transition: { delay: 0.1, duration: 0.75 },
								},
							}}
							text='Meet, Collaborate, Succeed Meetings'
						/>
					</h2>
				</div>
			</section>
		</>
	);
}
