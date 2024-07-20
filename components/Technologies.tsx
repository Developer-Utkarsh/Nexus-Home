"use client";

import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Marquee } from "./Marquee";

export const Technologies = () => {
	const technologies = [
		{ id: "nextjs-icon", name: "Next.js" },
		{ id: "tailwindcss-icon", name: "Tailwind CSS" },
		{ id: "mongodb-icon", name: "MongoDB" },
		{ id: "typescript-icon", name: "TypeScript" },
		{ id: "framer-motion-icon", name: "Framer Motion" },
	];

	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,

				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.75,
				duration: 1.25,
			},
		},
	};

	return (
		<section className='py-12 md:py-16 lg:py-20' ref={ref}>
			<div className='container mx-auto px-4 md:px-6 lg:px-8'>
				<motion.div
					className='relative flex items-center justify-center'
					initial='hidden'
					animate={controls}
					variants={containerVariants}
				>
					<div className='absolute left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent' />
					<motion.h2
						className='relative z-10 px-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl bg-[#000]'
						variants={itemVariants}
					>
						What Technologies We Used
					</motion.h2>
				</motion.div>
				<motion.div
					className='mt-16 flex items-center gap-4 justify-center overflow-hidden bg-transparent'
					initial='hidden'
					animate={controls}
					variants={containerVariants}
				>
					<Marquee>
						{technologies.map((tech) => (
							<motion.div
								key={tech.id}
								className='mx-24 max-sm:mx-8'
								variants={itemVariants}
							>
								<svg
									width='72'
									height='72'
									className='text-white'
								>
									<use href={`#${tech.id}`} />
								</svg>
								<p className='mt-2 text-base text-white text-center'>
									{tech.name}
								</p>
							</motion.div>
						))}
					</Marquee>
				</motion.div>
			</div>
			{/* SVG definitions */}
			<svg xmlns='http://www.w3.org/2000/svg' className='hidden'>
				{/* Your existing SVG symbol definitions */}
				<symbol id='nextjs-icon' viewBox='0 0 24 24'>
					<path
						fill='#ffffff'
						d='M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z'
					/>
				</symbol>
				<symbol id='mongodb-icon' viewBox='0 0 24 24'>
					<path
						fill='#4DA53F'
						d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'
					/>
				</symbol>

				<symbol id='framer-motion-icon' viewBox='0 0 24 24'>
					<path
						fill='#ffffff'
						d='M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z'
					/>
				</symbol>

				<symbol id='tailwindcss-icon' viewBox='0 0 24 24'>
					<path
						fill='#07B0CE'
						d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'
					/>
				</symbol>

				<symbol id='typescript-icon' viewBox='0 0 24 24'>
					<path
						fill='#2F74C0'
						d='M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853c0-1.089-3.251-1.089-3.251-3.501c0-1.648,1.239-2.319,2.883-2.319c1.211,0,2.021,0.412,2.021,0.412v1.654c0,0-0.992-0.472-1.839-0.472s-1.043,0.392-1.043,0.824c0,1.089,3.278,0.986,3.278,3.5c0,1.867-1.343,2.326-2.93,2.326C15.123,19.166,13.998,18.626,13.998,18.626z'
					/>
				</symbol>

				<symbol id='clerk-icon' viewBox='0 0 24 24'>
					<path
						fill='#ffffff'
						d='M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.6l6.6 3.3-6.6 3.3L5.4 7.9 12 4.6zM4 9.2l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z'
					/>
				</symbol>

				<symbol id='stream-icon' viewBox='0 0 24 24'>
					<path
						fill='#ffffff'
						d='M19 12c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7 7 3.14 7 7zm1.73-1.55A9 9 0 0 0 12 4.5a9 9 0 0 0-8.73 5.95A1 1 0 0 0 4.73 12 9 9 0 0 0 12 19.5a9 9 0 0 0 8.73-5.95 1 1 0 0 0 0-1.1zm-9.73 3.55a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'
					/>
				</symbol>

				<symbol id='shadcn-ui-icon' viewBox='0 0 24 24'>
					<path
						fill='#ffffff'
						d='M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.6l6.6 3.3-6.6 3.3L5.4 7.9 12 4.6zM4 9.2l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z'
					/>
				</symbol>
			</svg>
		</section>
	);
};
