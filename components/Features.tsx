"use client";
import { motion } from "framer-motion";

export default function Features() {
	const features = [
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
					/>
				</svg>
			),
			title: "Lightning-Fast Conferencing",
			desc: "Nexus helps you to conduct meetings fastly with less effort to fulfill your meeting purpose effectively and effeciently by using the latest technologies.",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
					/>
				</svg>
			),
			title: "Upcoming & Previous Meetings",
			desc: "Nexus provides you a feature to check you scheduled upcoming meetings and previous meetings to save your time and effort.",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
					/>
				</svg>
			),
			title: "Public Meetings",
			desc: "Nexus allows you to create Public Meetings and join Public Meetings Created by the user to increase social connections with people.",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
					/>
				</svg>
			),
			title: "Nexus Profiles",
			desc: "Now every Nexus User have its own profile with their details and meetings related details.",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9'
					/>
				</svg>
			),
			title: "BookMark Meetings",
			desc: "Nexus provides you a feature to BookMark Scheduled Meetings and can join them later whey are live.",
		},
		{
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
					/>
				</svg>
			),
			title: "Transcriptions & Recordings",
			desc: "Nexus helps you to live transcript meetings and also provide you recordings of meetings.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3 },
		},
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.2 },
		},
	};

	return (
		<motion.section
			className='py-14 relative'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
		>
			<motion.img
				src='https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif'
				className='absolute z-2 -top-0'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			/>
			<div className='w-full mx-auto px-4 text-gray-400 md:px-8'>
				<motion.div
					className='relative max-w-2xl mx-auto sm:text-center'
					variants={itemVariants}
				>
					<div className='relative z-10'>
						<motion.h3
							className='text-gray-200 mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl'
							variants={contentVariants}
						>
							Let's Empower your Meetings
						</motion.h3>
						<motion.p
							className='mt-3 font-geist text-gray-200'
							variants={contentVariants}
						>
							Nexus helps you to Conduct Meetings effortlessly
							with many Features.
						</motion.p>
					</div>
					<div
						className='absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]'
						style={{
							background:
								"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
						}}
					></div>
				</motion.div>
				<motion.hr
					className='bg-white/30 h-px w-1/2 mx-auto mt-5'
					variants={itemVariants}
				/>
				<motion.div
					className='relative mt-12'
					variants={containerVariants}
				>
					<ul className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{features.map((item, idx) => (
							<motion.li
								key={idx}
								className='bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] space-y-3 p-4 border rounded-xl'
								variants={itemVariants}
							>
								<motion.div
									className='text-purple-600 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit'
									variants={contentVariants}
								>
									{item.icon}
								</motion.div>
								<motion.h4
									className='text-lg text-gray-300 font-bold font-geist tracking-wide'
									variants={contentVariants}
								>
									{item.title}
								</motion.h4>
								<motion.p
									className='text-gray-500'
									variants={contentVariants}
								>
									{item.desc}
								</motion.p>
							</motion.li>
						))}
					</ul>
				</motion.div>
			</div>
		</motion.section>
	);
}
