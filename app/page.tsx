"use client";

import CanvasCursor from "@/components/canvas-cursor";
import NexusNavbar from "@/components/Navbar";

import { FadeText } from "@/components/magicui/fade-text";
import { Technologies } from "@/components/Technologies";
import Features from "@/components/Features";
import { About } from "@/components/About";
import Contact from "@/components/Contact";

import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		fetch("/api/")
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	}, []);
	return (
		<>
			<div className='z-30'>
				<CanvasCursor />
			</div>

			<section className=' w-full flex-1 flex-col relative'>
				<NexusNavbar />
				<div className='absolute inset-0 -z-10 h-full w-full items-center  pt-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%,#000_70%)]'></div>
				<div className='justify-center md:items-center z-50 max-sm:pt-32 max-sm:pb-12 flex w-full md:h-screen flex-col'>
					<h2 className='text-white  font-semibold text-center'>
						<FadeText
							className='text-white font-medium text-center'
							direction='up'
							framerProps={{
								show: {
									transition: { duration: 0.5 },
								},
							}}
							text='Meet, Collaborate, Succeed Meetings'
						/>
					</h2>
				</div>
			</section>
			<section className='[background:radial-gradient(160%_160%_at_50%_90%,#000_40%,#63e_74.75%)] inset-0 -z-30 h-screen w-full'></section>
			<section
				className='w-full relative -top-[172px] max-sm:-top-96 z-50 flex justify-center items-center flex-col'
				id='tech'
			>
				<Technologies />
			</section>
			<section
				className='w-full relative -top-[112px] max-sm:-top-64 z-50 flex justify-center items-center flex-col '
				id='features'
			>
				<Features />
			</section>
			<section
				className='w-full relative  max-sm:-top-64 z-50 flex justify-center items-center flex-col'
				id='about'
			>
				<About />
			</section>
			<section id='contact'>
				<Contact />
			</section>
			<footer className='w-full flex justify-center items-center  mt-12  m-auto'>
				<div className='w-[75%] flex justify-between items-center  border-t-[0.05px] border-zinc-800 py-4 max-lg:w-[90%] '>
					<div className='flex items-center justify-center text-xs text-stone-400 gap-2'>
						<i className='fa-regular fa-copyright'></i>
						<p>Utkarsh Tiwari</p>
					</div>
					<div className='flex items-center justify-center text-xs gap-3 text-stone-400'>
						<a
							href='https://www.linkedin.com/in/DeveloperUtkarsh/'
							target='_blank'
						>
							<i className='fa-brands fa-linkedin-in  hover:text-white  transition cursor-pointer'></i>
						</a>
						<a
							href='https://github.com/Developer-Utkarsh'
							target='_blank'
						>
							<i className='fa-brands fa-github hover:text-white transition cursor-pointer'></i>
						</a>
						<a
							href='https://instagram.com/developer_utkarsh/'
							target='_blank'
						>
							<i className='fa-brands fa-instagram  hover:text-white transition cursor-pointer'></i>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
